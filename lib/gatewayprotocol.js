var log = require("loglevel"),
    DataSchema = require("dataschema"),
    GatewayPackets = require("./gatewaypackets");

function packetTable(packets) {
    var names = {};
    for (var name in packets) {
        if (packets.hasOwnProperty(name)) {
            names[+packets[name]] = name;
        }
    }
    Object.defineProperty(packets, "getName", {
        enumerable: false,
        value: function(op) {
            return names[op];
        }
    });
    return packets;
}

function writeString(data, string, offset) {
    data.writeUInt32LE(string.length, offset); 
    data.write(string, offset + 4, string.length, "utf8"); 
    return offset += string.length + 4;
}

function readBytes(data, offset, n) {
    var dst = new Buffer(n);
    data.copy(dst, 0, offset, offset + n);
    return dst;
}

function readBoolean(data, offset) {
    return !!data[offset];
}

function writeBytes(data, bytes, offset) {
    bytes.copy(data, offset, 0, bytes.length);
    return offset + bytes.length;
}

function readUInt32(data, offset) {
    return data.readUInt32LE(offset);
}
function readUInt8(data, offset) {
    return data.readUInt8(offset);
}

function writeUInt32(data, value, offset) {
    data.writeUInt32LE(value, offset);
    return offset + 4;
}

function writeUInt8(data, value, offset) {
    data.writeUInt8(value, offset);
    return offset + 1;
}


function handleLoginRequest(data) {
    log.debug("[GatewayProtocol]", "Received LOGIN_REQUEST");
   
    return {
        type: GatewayPackets.LOGIN_REQUEST
    };
}


function handleLoginReply(data) {
    log.debug("[GatewayProtocol]", "Received LOGIN_REPLY");
   
    return {
        type: GatewayPackets.LOGIN_REPLY
    };
}


function handleForcedLogout(data) {
    log.debug("[GatewayProtocol]", "Received FORCED_LOGOUT");
   
    return {
        type: GatewayPackets.FORCED_LOGOUT
    };
}


function handleChannelIsRoutable(data) {
    
    var channel = data[0] >> 5,
        isRoutable = data[1];
    log.debug("[GatewayProtocol]", "Received CHANNEL_IS_ROUTABLE", "channel=" + channel, "isRoutable=" + isRoutable);

    return {
        type: GatewayPackets.CHANNEL_IS_ROUTABLE,
        channel: channel,
        isRoutable: isRoutable
    };
}


function handleTunnelPacketToExternalConnection(data) {
    //log.debug("[GatewayProtocol]", "Received TUNNEL_PACKET_TO_EXTERNAL_CONNECTION");
    return {
        type: GatewayPackets.TUNNEL_PACKET_TO_EXTERNAL_CONNECTION,
        tunnelData: data.slice(1)
    };
}


function handleTunnelPacketFromExternalConnection(data) {
    //log.debug("[GatewayProtocol]", "Received TUNNEL_PACKET_FROM_EXTERNAL_CONNECTION");
    return {
        type: GatewayPackets.TUNNEL_PACKET_FROM_EXTERNAL_CONNECTION,
        tunnelData: data.slice(1)
    };
}


function packLoginRequest(packet) {
    var data = new Buffer(
            1 + 4 +
            packet.sessionId.length + 4 +
            packet.systemFingerPrint.length + 4
        );
    writeUInt8(data, GatewayPackets.LOGIN_REQUEST, 0);
    writeString(data, packet.sessionId, 1);
    writeString(data, packet.systemFingerPrint, 5 + packet.sessionId.length);
    writeUInt32(data, 0, 9 + packet.sessionId.length + packet.systemFingerPrint.length);
    return data;
}

function GatewayProtocol() {
}



GatewayProtocol.prototype.parse = function(data) {
    var packetType = data[0] & 0x1F,
        result, schema, name,
        packet = GatewayPackets.Packets[packetType];

    if (packet) {
        if (packet.name == "TunnelPacketToExternalConnection" || packet.name == "TunnelPacketFromExternalConnection") {
            log.debug("[GatewayProtocol]", packet.name, data[0], packetType, data[0] >> 5, data.length);

            return {
                type: packet.type,
                flags: data[0] >> 5,
                fromClient: (packet.name == "TunnelPacketFromExternalConnection"),
                name: packet.name,
                tunnelData: data.slice(1)
            }
        } else {    
            if (packet.schema) {
                log.debug("[GatewayProtocol]", packet.name);
                result = DataSchema.parse(packet.schema, data, 1).result;
                return {
                    type: packet.type,
                    flags: data[0] >> 5,
                    name: packet.name,
                    result: result
                };
            } else {
                log.debug("[GatewayProtocol]", "parse()", "No schema for packet " + packet.name);
            }
        }
    } else {
        log.warn("[GatewayProtocol]", "parse()", "Unknown or unhandled gateway packet type: " + packetType);
    }
};


GatewayProtocol.prototype.pack = function(packetName, object) {
    var packetType = GatewayPackets.PacketTypes[packetName],
        packet = GatewayPackets.Packets[packetType],
        payload, data;
    if (packet) {
        if (packet.name == "TunnelPacketToExternalConnection" || packet.name == "TunnelPacketFromExternalConnection") {
            data = new Buffer(1 + object.tunnelData.length);
            data.writeUInt8(packetType | (object.channel << 5), 0);
            object.tunnelData.copy(data, 1);
        } else if (packet.name == "ChannelIsRoutable") {
            data = new Buffer(2);
            data.writeUInt8(packetType | (object.channel << 5), 0);
            data.writeUInt8(object.isRoutable, 1);
        } else {
            if (packet.schema) {
                log.debug("[GatewayProtocol]", "Packing data for " + packet.name);
                payload = DataSchema.pack(packet.schema, object);
                if (payload) {
                    data = new Buffer(1 + payload.length);
                    data.writeUInt8(packetType, 0);
                    payload.data.copy(data, 1);
                } else {
                    log.error("[GatewayProtocol]", "Could not pack data schema for " + packet.name);
                }
            } else {
                log.debug("[GatewayProtocol]", "pack()", "No schema for packet " + packet.name);
            }
        }
    } else {
        log.warn("[GatewayProtocol]", "pack()", "Unknown or unhandled gateway packet type: " + packetType);
    }
    
    return data;
}

exports.GatewayProtocol = GatewayProtocol;
exports.GatewayPackets = GatewayPackets;