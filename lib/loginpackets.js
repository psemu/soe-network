var PacketTable = require("./packettable");

var packets = [
    ["LoginRequest",                        0x01, {
        schema: {
            fields: [
                { name: "sessionId",            type: "string" },
                { name: "systemFingerPrint",    type: "string" },
                { name: "unknown",              type: "uint32", defaultValue: 0 }
            ]
        }
    }],
    ["LoginReply",                          0x02, {
        schema: {
            fields: [
                { name: "loggedIn",             type: "boolean" },
                { name: "status",               type: "uint32" },
                { name: "isMember",             type: "boolean" },
                { name: "isInternal",           type: "boolean" },
                { name: "namespace",            type: "string" },
                { name: "payload",              type: "byteswithlength" }
            ]
        }
    }],
    ["Logout",                              0x03, {
        schema: {}
    }],
    ["ForceDisconnect",                     0x04, {
        schema: {}
    }],
    ["CharacterCreateRequest",              0x05, {
        schema: {
            fields: [
                { name: "serverId",            type: "boolean" },
                { name: "unknown",             type: "boolean" },
                { name: "payload",             type: "byteswithlength", 
                    schema: {
                        fields: [
                            { name: "factionId",            type: "uint8" },
                            { name: "headType",             type: "uint32" },
                            { name: "profileType",          type: "uint32" },
                            { name: "gender",               type: "uint32" },
                            { name: "characterName",        type: "string" }
                        ]
                    }
                }
            ]
        }
    }],
    ["CharacterCreateReply",                0x06, {
        schema: {
            fields: [
                { name: "status",            type: "uint32" },
                { name: "characterId",       type: "bytes",     length: 8 }
            ]
        }
    }],
    ["CharacterLoginRequest",               0x07, {
        schema: {
            fields: [
                { name: "characterId",               type: "bytes", length: 8},
                { name: "serverId",                  type: "uint32" },
                { name: "unknown",                   type: "uint32", defaultValue: 0 },
                { name: "payload",                   type: "byteswithlength",
                    schema: {
                        fields: [
                            { name: "locale",                  type: "string" },
                            { name: "unknown1",                type: "uint8", defaultValue: 8 },
                            { name: "unknown2",                type: "uint32", defaultValue: 0 },
                            { name: "unknown3",                type: "uint32", defaultValue: 0 }
                        ]
                    }
                },
            ]
        }
    }],
    ["CharacterLoginReply",                 0x08, {
        schema: {
            fields: [
                { name: "characterId",              type: "bytes", length: 8},
                { name: "serverId",                 type: "uint32" },
                { name: "unknown",                  type: "uint32" },
                { name: "status",                   type: "uint32" },
                { name: "payload",                  type: "byteswithlength",
                    schema: {
                        fields: [
                            { name: "serverAddress",        type: "string" },
                            { name: "serverTicket",         type: "string" },
                            { name: "encryptionKey",        type: "byteswithlength" },
                            { name: "characterId",          type: "bytes",   length: 8 },
                            { name: "unknown1",             type: "uint32" },
                            { name: "unknown2",             type: "uint32" },
                            { name: "stationName",          type: "string" },
                            { name: "characterName",        type: "string" },
                            { name: "unknown3",             type: "uint32" }
                        ]
                    }
                },
            ]
        }
    }],
    ["CharacterDeleteRequest",              0x09, {}],
    ["CharacterDeleteReply",                0x0A, {}],
    ["CharacterSelectInfoRequest",          0x0B, {
        schema: {}
    }],
    ["CharacterSelectInfoReply",            0x0C, {
        schema: {
            fields: [
                { name: "status",                   type: "uint32" },
                { name: "canBypassServerLock",      type: "boolean" },
                { name: "characters",      type: "array", 
                    elementSchema: {
                        fields: [
                            { name: "characterId",              type: "bytes",  length: 8 },
                            { name: "serverId",                 type: "uint32" },
                            { name: "status",                   type: "uint32" },
                            { name: "lastLoginDate",            type: "uint32" },
                            { name: "unknown1",                 type: "uint32" },
                            { name: "unknown2",                 type: "uint32" },
                            { name: "payload",                  type: "byteswithlength", 
                                schema: {
                                    fields: [
                                        { name: "name",                     type: "string" },
                                        { name: "empireId",                 type: "uint8" },
                                        { name: "battleRank",               type: "uint32" },
                                        { name: "nextBattleRankPercent",    type: "uint32" },
                                        { name: "headId",                   type: "uint32" },
                                        { name: "modelId",                  type: "uint32" },
                                        { name: "gender",                   type: "uint32" },
                                        { name: "profileId",                type: "uint32" },
                                        { name: "unknown1",                 type: "uint32" },
                                        { name: "loadoutId",                type: "uint32" },
                                        { name: "unknown3",                 type: "uint32" },
                                        { name: "unknown4",                 type: "uint32" },
                                        { name: "unknown5",                 type: "uint32" },
                                        { name: "unknown6",                 type: "uint8" },
                                        { name: "loadoutName",              type: "string" },
                                        { name: "tintItemId",               type: "uint32" },
                                        { name: "unknown7",                 type: "uint32" },
                                        { name: "decalItemId",              type: "uint32" },
                                        { name: "loadoutItems",             type: "array",
                                            elementSchema: {
                                                fields: [
                                                    { name: "slot",                   type: "uint32" },
                                                    { name: "index2",                   type: "uint32" },
                                                    { name: "itemLineId",               type: "uint32" },
                                                    { name: "flags",                    type: "uint8" },
                                                    { name: "attachments",              type: "array",
                                                        elementSchema: {
                                                            fields: [
                                                                { name: "attachmentId",     type: "uint32" }
                                                            ]
                                                        }
                                                    },
                                                    { name: "attachmentClasses",        type: "array",
                                                        elementSchema: {
                                                            fields: [
                                                                { name: "classId",          type: "uint32" },
                                                                { name: "attachmentId",     type: "uint32" }
                                                            ]
                                                        }
                                                    },
                                                    { name: "tintItemId",               type: "uint32" },
                                                    { name: "itemSlot",                 type: "uint32" }
                                                ]
                                            }
                                        },
                                        { name: "loadoutItemDefinitions",           type: "array",
                                            elementSchema: {
                                                fields: [
                                                    { name: "itemId",                   type: "uint32" },
                                                    { name: "itemId2",                  type: "uint32" },
                                                    { name: "flags1",                   type: "uint8" },
                                                    { name: "flags2",                   type: "uint8" },
                                                    { name: "nameId",                   type: "uint32" },
                                                    { name: "descriptionId",            type: "uint32" },
                                                    { name: "unknown3",                 type: "uint32" },
                                                    { name: "iconId",                   type: "uint32" },
                                                    { name: "unknown4",                 type: "uint32" },
                                                    { name: "hudImageSetId",            type: "uint32" },
                                                    { name: "unknown6",                 type: "uint32" },
                                                    { name: "unknown7",                 type: "uint32" },
                                                    { name: "cost",                     type: "uint32" },
                                                    { name: "itemClass",                type: "uint32" },
                                                    { name: "unknown9",                 type: "uint32" },
                                                    { name: "slot",                     type: "uint32" },
                                                    { name: "slotOverrideKey",          type: "uint32" },
                                                    { name: "unknown9_2",               type: "uint8" },
                                                    { name: "modelname",                type: "string" },
                                                    { name: "unknown10",                type: "uint32" },
                                                    { name: "unknown11",                type: "uint8" },
                                                    { name: "itemType",                 type: "uint32" },
                                                    { name: "categoryId",               type: "uint32" },
                                                    { name: "unknown12",                type: "uint32" },
                                                    { name: "unknown13",                type: "uint32" },
                                                    { name: "unknown14",                type: "uint32" },
                                                    { name: "unknown15",                type: "uint32" },
                                                    { name: "unknown16",                type: "uint32" },
                                                    { name: "activatableAbilityId",     type: "uint32" },
                                                    { name: "passiveAbilityId",         type: "uint32" },
                                                    { name: "unknown19",                type: "uint32" },
                                                    { name: "maxStackSize",             type: "uint32" },
                                                    { name: "tintName",                 type: "string" },
                                                    { name: "unknown21",                type: "uint32" },
                                                    { name: "unknown22",                type: "uint32" },
                                                    { name: "unknown23",                type: "uint32" },
                                                    { name: "unknown24",                type: "uint32" },
                                                    { name: "uiModelCamera",            type: "uint32" },
                                                    { name: "equipCountMax",            type: "uint32" },
                                                    { name: "currencyType",             type: "uint32" },
                                                    { name: "unknown28",                type: "uint32" },
                                                    { name: "clientItemType",           type: "uint32" },
                                                    { name: "skillSetId",               type: "uint32" },
                                                    { name: "overlayTexture",           type: "string" },
                                                    { name: "decalSlot",                type: "string" },
                                                    { name: "unknown32",                type: "uint32" },
                                                    { name: "trialDurationSec",         type: "uint32" },
                                                    { name: "trialExclusionSec",        type: "uint32" },
                                                    { name: "clientUseRequirementId",   type: "uint32" },
                                                    { name: "overrideAppearance",       type: "string" },
                                                    { name: "unknown35",                type: "uint32" }
                                                ]
                                            }
                                        },
                                        { name: "loadoutAttachments",               type: "array",
                                            elementSchema: {
                                                fields: [
                                                    { name: "loadoutAttachmentId",      type: "uint32" },
                                                    { name: "attachmentId",             type: "uint32" },
                                                    { name: "groupId",                  type: "uint32" },
                                                    { name: "itemLineId",               type: "uint32" },
                                                    { name: "flags",                    type: "bitflags", flags: [
                                                        { bit: 0,   name: "bit0" },
                                                        { bit: 1,   name: "bit1" },
                                                        { bit: 2,   name: "bit2" },
                                                        { bit: 3,   name: "bit3" },
                                                        { bit: 4,   name: "bit4" },
                                                        { bit: 5,   name: "bit5" },
                                                        { bit: 6,   name: "bit6" },
                                                        { bit: 7,   name: "required" }
                                                    ]},
                                                    { name: "classes",                  type: "array", elementType: "uint32" }
                                                ]
                                            }
                                        },
                                        { name: "lastUseDate",                      type: "uint32" },
                                        { name: "unknown8",                         type: "uint32" }
                                    ]
                                }
                            }
                        ]
                    }
                },
            ]
        }
    }],
    ["ServerListRequest",                   0x0D, {
        schema: {}
    }],
    ["ServerListReply",                     0x0E, {
        schema: {
            fields: [
                { name: "servers",      type: "array", 
                    elementSchema: {
                        fields: [
                            { name: "serverId",             type: "uint32" },
                            { name: "serverState",          type: "uint32" },
                            { name: "locked",               type: "boolean" },
                            { name: "name",                 type: "string" },
                            { name: "nameId",               type: "uint32" },
                            { name: "description",          type: "string" },
                            { name: "descriptionId",        type: "uint32" },
                            { name: "reqFeatureId",         type: "uint32" },
                            { name: "serverInfo",           type: "string" },
                            { name: "populationLevel",      type: "uint32" },
                            { name: "populationData",       type: "string" },
                            { name: "allowedAccess",        type: "boolean" }
                        ]
                    }
                },
            ]
        }
    }],
    ["ServerUpdate",                        0x0F, {
        schema: {
            fields: [
                { name: "serverId",             type: "uint32" },
                { name: "serverState",          type: "uint32" },
                { name: "locked",               type: "boolean" },
                { name: "name",                 type: "string" },
                { name: "nameId",               type: "uint32" },
                { name: "description",          type: "string" },
                { name: "descriptionId",        type: "uint32" },
                { name: "reqFeatureId",         type: "uint32" },
                { name: "serverInfo",           type: "string" },
                { name: "populationLevel",      type: "uint32" },
                { name: "populationData",       type: "string" },
                { name: "allowedAccess",        type: "boolean" }
            ]
        }
    }],
    ["TunnelAppPacketClientToServer",       0x10, {}],
    ["TunnelAppPacketServerToClient",       0x11, {}],
    ["CharacterTransferRequest",            0x12, {}],
    ["CharacterTransferReply",              0x13, {}],
];


var packetTypes = {},
    packetDescriptors = {};

PacketTable.build(packets, packetTypes, packetDescriptors);

exports.PacketTypes = packetTypes;
exports.Packets = packetDescriptors;
