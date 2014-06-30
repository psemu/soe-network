var EventEmitter = require("events").EventEmitter,
    crypto = require("crypto"),
    util = require("util"),
    log = require("loglevel");

function SOEInputStream(cryptoKey) {
    EventEmitter.call(this);

    this._sequences = [];
    this._nextSequence = 0;
    this._nextFragment = 0;
    this._lastFragment = -1;
    this._fragments = [];
    this._useEncryption = false;
    this._rc4 = crypto.createDecipheriv("rc4", cryptoKey, "");
}
util.inherits(SOEInputStream, EventEmitter);

function ZeroBuffer(length) {
    var buffer = new Buffer(length);
    for (var i=0;i<length;i++) {
        buffer[i] = 0;
    }
    return buffer;
}

function readDataLength(data, offset) {
    var dataLength = data.readUInt8(offset),
        n;
    if (dataLength == 0xFF) {
        if (data[offset+1] == 0xFF && data[offset+2] == 0xFF) {
            dataLength = data.readUInt32BE(offset+3);
            n = 7;
        } else {
            dataLength = data.readUInt16BE(offset+1);
            n = 3;
        }
    } else {
        n = 1;
    }
    return {
        value: dataLength,
        numBytes: n
    };
}

function parseChannelPacketData(data) {
    var appData = [],
        offset, dataLength;
    if (data[0] === 0x00 && data[1] == 0x19) {
        offset = 2;
        while (offset < data.length) {
            dataLength = readDataLength(data, offset);
            offset += dataLength.numBytes;
            appData.push(data.slice(offset, offset+dataLength.value));
            offset += dataLength.value;
        }
    } else {
        appData = [data];
    }
    return appData;
}

SOEInputStream.prototype._processDataFragments = function() {
    var nextFragment = this._nextFragment,
        lastFragment = this._lastFragment,
        fragments = this._fragments,
        head = fragments[nextFragment],
        data, totalSize, 
        i = nextFragment, 
        offset, fragment,
        appData = [];

    if (head) {
        if (head.singlePacket) {
            this._nextFragment = i + 1;
            appData = parseChannelPacketData(head);
        } else {
            totalSize = head.readUInt32BE(0);

            data = ZeroBuffer(totalSize);
            head.copy(data, 0, 4);
            offset = head.length - 4;
            for (i=i+1;i<=lastFragment;i++) {
                fragment = fragments[i];
                if (fragment) {
                    fragment.copy(data, offset);
                    offset += fragment.length;
                    if (offset > totalSize) {
                        console.log(fragment);
                        throw "processDataFragments: offset > totalSize: " + offset + " > " + totalSize + " (sequence " + i + ") (fragment length " + fragment.length + ")";
                    }
                    if (offset == totalSize) {
                        this._nextFragment = i + 1;
                        appData = parseChannelPacketData(data);
                        break;
                    }
                } else {
                    break;
                }
            }
        }
    }

    if (appData.length) {
        for (i=0;i<appData.length;i++) {
            data = appData[i];
            if (this._useEncryption) {
                if (data.length > 1 && data.readUInt16LE(0) === 0) {
                    this._rc4.write(data.slice(1));
                } else {
                    this._rc4.write(data);
                }
                data = this._rc4.read();
            }
            this.emit("data", null, data);
        }
        this._processDataFragments();
    }
};

SOEInputStream.prototype.write = function(data, sequence, fragment) {
    var sequences = this._sequences;

    if (!sequences.length) {
        this._nextSequence = sequence;
        this._nextFragment = sequence;
        this._lastFragment = sequence - 1;
    }

    if (sequence < this._nextSequence) {
        // repeat packet, do nothing
        return;
    }

    if (sequence > this._lastFragment) {
        this._lastFragment = sequence;
    }
   
    this._fragments[sequence] = data;
    if (!fragment) {
        this._fragments[sequence].singlePacket = true;
    }

    if (sequence > this._nextSequence) {
        this.emit("outoforder", null, this._nextSequence, sequence);
        sequences[sequence] = true;
    } else {
        sequences[sequence] = true;
        while (sequences[sequence]) {
            sequence++;
        }
        this._nextSequence = sequence;
        
        this.emit("ack", null, sequence - 1);

        this._processDataFragments();
    }
};

SOEInputStream.prototype.toggleEncryption = function(value) {
    this._useEncryption = !!value;
};

exports.SOEInputStream = SOEInputStream;
