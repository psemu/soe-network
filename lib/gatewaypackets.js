var PacketTable = require("./packettable");

var packets = [
    ["LoginRequest",                        0x01, {
        schema: {
            fields: [
                { name: "characterId",          type: "bytes", length: 8 },
                { name: "ticket",               type: "string" },
                { name: "clientProtocol",       type: "string" },
                { name: "clientBuild",          type: "string" }
            ]
        }
    }],
    ["LoginReply",                          0x02, {
        schema: {
            fields: [
                { name: "loggedIn",             type: "boolean" }
            ]
        }
    }],
    ["Logout",                              0x03, {
        schema: {}
    }],
    ["ForceDisconnect",                     0x04, {
        schema: {}
    }],
    ["TunnelPacketToExternalConnection",    0x05, {
            
    }],
    ["TunnelPacketFromExternalConnection",  0x06, {
        
    }],
    ["ChannelIsRoutable",                   0x07, {
        schema: {
            fields: [
                { name: "isRoutable",          type: "boolean" }
            ]
        }
    }],
    ["ConnectionIsNotRoutable",             0x08, {
        
    }],
];


var packetTypes = {},
    packetDescriptors = {};

PacketTable.build(packets, packetTypes, packetDescriptors);

exports.PacketTypes = packetTypes;
exports.Packets = packetDescriptors;
