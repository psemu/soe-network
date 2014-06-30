var fs = require("fs"),
    log = require("loglevel"),
    DataSchema = require("dataschema"),
    LoginPackets = require("./loginpackets");

function LoginProtocol() {
}

var n = 0;

LoginProtocol.prototype.parse = function(data) {
    var packetType = data[0],
        result, schema, name,
        packet = LoginPackets.Packets[packetType]
    if (packet) {
        if (packet.schema) {
            log.debug("[LoginProtocol]", packet.name);
            result = DataSchema.parse(packet.schema, data, 1).result;
            return {
                type: packet.type,
                name: packet.name,
                result: result
            };
        } else {
            log.debug("[LoginProtocol]", "parse()", "No schema for packet " + packet.name);
        }
    } else {
        fs.writeFileSync("loginbadpacket.dat", data);
        log.warn("[LoginProtocol]", "parse()", "Unknown or unhandled login packet type: " + packetType);
    }
}

LoginProtocol.prototype.pack = function(packetName, object) {
    var packetType = LoginPackets.PacketTypes[packetName],
        packet = LoginPackets.Packets[packetType],
        payload, data;
    if (packet) {
        if (packet.schema) {
            log.debug("[LoginProtocol]", "Packing data for " + packet.name);
            payload = DataSchema.pack(packet.schema, object);
            if (payload) {
                data = new Buffer(1 + payload.length);
                data.writeUInt8(packetType, 0);
                payload.data.copy(data, 1);
            } else {
                log.error("[LoginProtocol]", "Could not pack data schema for " + packet.name);
            }
        } else {
            log.debug("[LoginProtocol]", "pack()", "No schema for packet " + packet.name);
        }
    } else {
        log.warn("[LoginProtocol]", "pack()", "Unknown or unhandled login packet type: " + packetType);
    }
    return data;
}


exports.LoginProtocol = LoginProtocol;
exports.LoginPackets = LoginPackets;