var PacketTable = require("./packettable");

var packets = [
    ["Server",                                   0x01, {}],
    ["ClientFinishedLoading",                        0x02, {}],
    ["SendSelfToClient",                             0x03, {
        schema: {
            fields: [
                { name: "self",       type: "byteswithlength", 
                    schema: {
                        fields: [
                            { name: "unknown1",             type: "uint32" },
                            { name: "unknown2",             type: "uint32" },
                            { name: "characterId",          type: "uint64" },
                            { name: "unknown3",             type: "uint8" },
                            { name: "unknown4",             type: "uint8" },
                            { name: "unknown5",             type: "uint32" },
                            { name: "unknown6",             type: "uint32" },
                            { name: "unknown7",             type: "uint32" },
                            { name: "headActor",            type: "string" },
                            { name: "unknown8",             type: "uint32" },
                            { name: "unknown9",             type: "uint32" },
                            { name: "unknown10",            type: "uint32" },
                            { name: "unknown11",            type: "uint32" },
                            { name: "unknown12",            type: "uint32" },
                            { name: "unknown13",            type: "uint32" },
                            { name: "headId",               type: "uint32" },
                            { name: "battleRank",           type: "uint32" },
                            { name: "unknown14",            type: "uint32" },
                            { name: "unknown15",            type: "uint32" },
                            { name: "unknown16",            type: "uint32" },
                            { name: "unknown17",            type: "float" },
                            { name: "unknown18",            type: "float" },
                            { name: "unknown19",            type: "float" },
                            { name: "unknown20",            type: "float" },
                            { name: "unknown21",            type: "float" },
                            { name: "unknown22",            type: "float" },
                            { name: "unknown23",            type: "float" },
                            { name: "unknown24",            type: "float" },
                            { name: "unknown25",            type: "float" },
                            { name: "unknown26",            type: "float" },
                            { name: "unknown27",            type: "float" },
                            { name: "characterName",        type: "string" },
                            { name: "unknown28",            type: "uint32" },
                            { name: "unknown29",            type: "uint32" },
                            { name: "resources",            type: "array",  
                                elementSchema: {
                                    fields: [
                                        { name: "resourceId",           type: "uint32" },
                                        { name: "amount",               type: "uint32" }
                                    ]
                                }  
                            },
                            { name: "creationDate",         type: "uint32" },
                            { name: "unknown30",            type: "uint32" },
                            { name: "unknown31",            type: "uint32" },
                            { name: "unknown32",            type: "uint32" },
                            { name: "unknown33",            type: "uint8" },
                            { name: "unknown34",            type: "uint32" },
                            { name: "unknown35",            type: "uint32" },
                            { name: "unknown36",            type: "uint8" },
                            { name: "unknown37",            type: "uint8" },
                            { name: "unknown38",            type: "uint32" },
                            { name: "unknown39",            type: "uint32" },
                            { name: "unknown40",            type: "uint32" },
                            { name: "unknown41",            type: "uint32" },
                            { name: "unknown42",            type: "uint32" },
                            { name: "unknown43",            type: "uint8" },
                            { name: "unknownTimeStamp",     type: "uint32" },
                            { name: "unknown44",            type: "uint32" },
                            { name: "unknown45",            type: "uint32" },
                            { name: "unknown46",            type: "uint32" },
                            { name: "unknown47",            type: "uint32" },
                            { name: "unknown48",            type: "uint32" },
                            { name: "unknown49",            type: "uint8" },
                            { name: "unknown50",            type: "array", 
                                elementSchema: {
                                    fields: [
                                        { name: "unknownId",            type: "uint32" },
                                        { name: "unknown1",             type: "uint32" },
                                        { name: "unknown2",             type: "uint32" },
                                        { name: "unknown3",             type: "uint32" },
                                        { name: "unknown4",             type: "uint32" },
                                        { name: "unknown5",             type: "uint32" },
                                        { name: "unknown6",             type: "uint32" },
                                        { name: "unknown7",             type: "uint32" },
                                        { name: "unknown8",             type: "uint32" },
                                        { name: "unknown9",             type: "uint32" },
                                        { name: "unknown10",            type: "uint32" },
                                        { name: "unknown11",            type: "uint32" },
                                        { name: "unknown12",            type: "uint8" },
                                        { name: "unknown13",            type: "uint8" },
                                        { name: "unknown14",            type: "uint8" },
                                        { name: "unknown15",            type: "uint8" },
                                        { name: "unknown16",            type: "uint8" },
                                        { name: "unknown16_2",            type: "uint8" },
                                        { name: "unknown17",            type: "float" },
                                        { name: "unknown18",            type: "float" },
                                        { name: "unknown19",            type: "float" },
                                        { name: "unknown20",            type: "float" },
                                        { name: "unknown21",            type: "uint32" },
                                        { name: "unknown22",            type: "float" },
                                        { name: "unknown23",            type: "float" },
                                        { name: "unknown24",            type: "float" },
                                        { name: "unknown25",            type: "float" },
                                        { name: "unknown26",            type: "uint32" },
                                        { name: "unknown27",            type: "uint32" },
                                        { name: "unknown28",            type: "uint32" }
                                    ]
                                }
                            },
                            { name: "unknown51",            type: "uint32" },
                            { name: "unknown52",            type: "array",  
                                elementSchema: {
                                    fields: [
                                        { name: "unknown1",             type: "uint32" },
                                        { name: "unknown2",             type: "uint32" }
                                    ]
                                }  
                            },
                            { name: "unknown51",            type: "uint32" },
                            { name: "unknown52",            type: "uint32" },
                            { name: "unknown53",            type: "uint32" },
                            { name: "unknown54",            type: "uint32" },
                            { name: "unknown55",            type: "uint32" },
                            { name: "unknown56",            type: "uint32" },
                            { name: "unknown57",            type: "uint32" }
                        ]
                    }
                }
            ]
        }
    }],
    ["ClientIsReady",                                0x04, {
        schema: {}
    }],
    ["ZoneDoneSendingInitialData",                   0x05, {
        schema: {}
    }],
    ["Chat",                                     0x06, {
        subPackets: [
            ["Chat",                                        0x060100, {
                schema: {
                    fields: [
                        { name: "unknown1",             type: "uint8" },
                        { name: "unknown2",             type: "uint8" },
                        { name: "unknown3",             type: "uint8" },
                        { name: "unknown4",             type: "uint8" },
                        { name: "characterId1",         type: "uint64" },
                        { name: "characterId1",         type: "uint64" },
                        { name: "unknown5",             type: "bytes",  length: 12 },
                        { name: "characterName1",       type: "string" },
                        { name: "unknown6",             type: "bytes",  length: 16 },
                        { name: "characterName2",       type: "string" },
                        { name: "unknown7",             type: "uint32" },
                        { name: "message",              type: "string" },
                        { name: "unknown8",             type: "bytes",  length: 12 },
                        { name: "unknown9",             type: "float" },
                        { name: "unknown10",             type: "bytes",  length: 22 }
                    ]
                }
            }],
            ["EnterArea",                                   0x060200, {}],
            ["DebugChat",                                   0x060300, {}],
            ["FromStringId",                                0x060400, {}],
            ["TellEcho",                                    0x060500, {}],
            ["ChatText",                                    0x060600, {
                schema: {
                    fields: [
                        { name: "message",              type: "string" },
                        { name: "unknown1",             type: "uint32" },
                        { name: "color",                type: "bytes",  length: 4 },
                        { name: "unknown2",             type: "uint32" },
                        { name: "unknown3",             type: "uint8" },
                        { name: "unknown1",             type: "uint8" }
                    ]
                }
            }]
        ]
    }],
    ["ClientLogout",                                 0x07, {}],
    ["TargetClientNotOnline",                        0x08, {}],
    ["Command",                                  0x09, {
        subPackets: [
            ["ShowDialog",                         0x090100, {}],
            ["EndDialog",                          0x090200, {}],
            ["StartDialog",                        0x090300, {}],
            ["PlayerPlaySpeech",                   0x090400, {}],
            ["DialogResponse",                     0x090500, {}],
            ["PlaySoundAtLocation",                0x090600, {}],
            ["InteractRequest",                    0x090700, {}],
            ["InteractCancel",                     0x090800, {
                schema: {}
            }],
            ["InteractionList",                    0x090900, {}],
            ["InteractionSelect",                  0x090A00, {}],
            ["InteractionStartWheel",              0x090B00, {}],
            ["StartFlashGame",                     0x090C00, {}],
            ["SetProfile",                         0x090D00, {
                schema: {
                    fields: [
                        { name: "profileId",            type: "uint32" },
                        { name: "tab",                  type: "uint32" }
                    ]
                }
            }],
            ["AddFriendRequest",                   0x090E00, {}],
            ["RemoveFriendRequest",                0x090F00, {}],
            ["ConfirmFriendRequest",               0x091000, {}],
            ["ConfirmFriendResponse",              0x091100, {}],
            ["SetChatBubbleColor",                 0x091200, {}],
            ["PlayerSelect",                       0x091300, {
                schema: {
                    fields: [
                        { name: "characterId",              type: "uint64" },
                        { name: "guid",                 type: "uint64" }
                    ]
                }
            }],
            ["FreeInteractionNpc",                 0x091400, {
                schema: {}
            }],
            ["FriendsPositionRequest",             0x091500, {}],
            ["MoveAndInteract",                    0x091600, {}],
            ["QuestAbandon",                       0x091700, {}],
            ["RecipeStart",                        0x091800, {}],
            ["ShowRecipeWindow",                   0x091900, {}],
            ["ActivateProfileFailed",              0x091A00, {}],
            ["PlayDialogEffect",                   0x091B00, {}],
            ["ForceClearDialog",                   0x091C00, {}],
            ["IgnoreRequest",                      0x091D00, {}],
            ["SetActiveVehicleGuid",               0x091E00, {}],
            ["ChatChannelOn",                      0x091F00, {}],
            ["ChatChannelOff",                     0x092000, {}],
            ["RequestPlayerPositions",             0x092100, {}],
            ["RequestPlayerPositionsReply",        0x092200, {}],
            ["SetProfileByItemDefinitionId",       0x092300, {}],
            ["RequestRewardPreviewUpdate",         0x092400, {}],
            ["RequestRewardPreviewUpdateReply",    0x092500, {}],
            ["PlaySoundIdOnTarget",                0x092600, {}],
            ["RequestPlayIntroEncounter",          0x092700, {}],
            ["SpotPlayer",                         0x092800, {}],
            ["SpotPlayerReply",                    0x092900, {}],
            ["SpotPrimaryTarget",                  0x092A00, {}],
            ["InteractionString",                  0x092B00, {
                schema: {
                    fields: [
                        { name: "guid",                 type: "uint64" },
                        { name: "stringId",             type: "uint32" },
                        { name: "unknown4",             type: "uint32" }
                    ]
                }
            }],
            ["GiveCurrency",                       0x092C00, {}],
            ["HoldBreath",                         0x092D00, {}],
            ["ChargeCollision",                    0x092E00, {}],
            ["DebrisLaunch",                       0x092F00, {}],
            ["Suicide",                            0x093000, {}],
            ["RequestHelp",                        0x093100, {}],
            ["OfferHelp",                          0x093200, {}],
            ["Redeploy",                           0x093300, {}],
            ["PlayersInRadius",                    0x093400, {}],
            ["AFK",                                0x093500, {}],
            ["ReportPlayerReply",                  0x093600, {}],
            ["ReportPlayerCheckNameRequest",       0x093700, {}],
            ["ReportPlayerCheckNameReply",         0x093800, {}],
            ["ReportRendererDump",                 0x093900, {}],
            ["ChangeName",                         0x093A00, {}],
            ["NameValidation",                     0x093B00, {}],
            ["PlayerFileDistribution",             0x093C00, {}],
            ["ZoneFileDistribution",               0x093D00, {}],
            ["AddWorldCommand",                    0x093E00, {
                schema: {
                    fields: [
                        { name: "command",       type: "string" }
                    ]
                }
            }],
            ["AddZoneCommand",                     0x093F00, {
                schema: {
                    fields: [
                        { name: "command",       type: "string" }
                    ]
                }
            }],
            ["ExecuteCommand",                      0x094000, {
                schema: {
                    fields: [
                        { name: "commandHash",     type: "uint32" },
                        { name: "arguments",       type: "string" }
                    ]
                }
            }],
            ["ZoneExecuteCommand",                  0x094100, {}],
            ["RequestStripEffect",                  0x094200, {}],
            ["ItemDefinitionRequest",               0x094300, {}],
            ["ItemDefinitionReply",                 0x094400, {}],
            ["ItemDefinitions",                     0x094500, {
                schema: {
                    fields: [
                        { name: "data",       type: "byteswithlength" }
                    ]
                }
            }],
            ["EnableCompositeEffects",              0x094600, {
                schema: {
                    fields: [
                        { name: "enabled",       type: "boolean" }
                    ]
                }
            }],
            ["StartRentalUpsell",                   0x094700, {}],
            ["SafeEject",                           0x094800, {}],
            ["WeaponFireStateUpdate",               0x094900, {}],
            ["ForceBlacklist",                      0x094A00, {}],
            ["ValidateDataForZoneOwnedTiles",       0x0946B0, {}],
            ["AddItem",                             0x09EA03, {}],
            ["DeleteItem",                          0x093EB0, {}],
            ["AbilityReply",                        0x093EC0, {}],
            ["AbilityList",                         0x093ED0, {}],
            ["AbilityAdd",                          0x093EE0, {}],
            ["ServerInformation",                   0x093EF0, {}],
        ]
    }],
    ["Admin",                                   0x0A, {}],
    ["ClientBeginZoning",                           0x0B, {}],
    ["Combat",                                  0x0C, {
        subPackets: [
            ["AttackTargetDamage",                          0x0C04, {}],
            ["AttackAttackerMissed",                        0x0C05, {}],
            ["AttackTargetDodged",                          0x0C06, {}],
            ["AttackProcessed",                             0x0C07, {}],
            ["EnableBossDisplay",                           0x0C09, {}],
            ["AttackTargetBlocked",                         0x0C0A, {}],
            ["AttackTargetParried",                         0x0C0B, {}]
        ]        
    }],
    ["Mail",                                     0x0E, {}],
    ["PlayerUpdate",                             0x0F, {
        subPackets: [
            ["None",                                    0x0F00, {}],
            ["RemovePlayer",                            0x0F010000, {
                schema: {
                    fields: [
                        { name: "guid",       type: "uint64" },
                    ]
                }
            }],
            ["RemovePlayerGracefully",                  0x0F010100, {
                schema: {
                    fields: [
                        { name: "guid",       type: "uint64" },
                        { name: "unknown5",       type: "uint8" },
                        { name: "unknown6",       type: "uint32" },
                        { name: "unknown7",       type: "uint32" },
                        { name: "unknown8",       type: "uint32" },
                        { name: "unknown9",       type: "uint32" },
                        { name: "unknown10",      type: "uint32" }
                    ]
                }
            }],
            ["Knockback",                               0x0F02, {}],
            ["UpdateHitpoints",                         0x0F03, {}],
            ["SetAnimation",                            0x0F04, {}],
            ["AddNotifications",                        0x0F05, {}],
            ["RemoveNotifications",                     0x0F06, {}],
            ["NpcRelevance",                            0x0F07, {
                schema: {
                    fields: [
                        { name: "npcs",       type: "array",
                            elementSchema: {
                                fields: [
                                    { name: "guid",       type: "uint64" },
                                    { name: "unknown3",       type: "uint8" },
                                    { name: "unknown4",       type: "uint8" },
                                    { name: "unknown5",       type: "uint8" }
                                ]
                            }
                        }
                    ]
                }
            }],
            ["UpdateScale",                             0x0F08, {}],
            ["UpdateTemporaryAppearance",               0x0F09, {}],
            ["RemoveTemporaryAppearance",               0x0F0A, {}],
            ["PlayCompositeEffect",                     0x0F0B, {}],
            ["SetLookAt",                               0x0F0C, {}],
            ["RenamePlayer",                            0x0F0D, {}],
            ["UpdateCharacterState",                    0x0F0E, {
                schema: {
                    fields: [
                        { name: "characterId",    type: "uint64" },
                        { name: "unknown1",       type: "float" },
                        { name: "unknown2",       type: "uint32" },
                        { name: "unknown3",       type: "uint32" }
                    ]
                }
            }],
            ["QueueAnimation",                      0x0F0F, {}],
            ["ExpectedSpeed",                       0x0F10, {}],
            ["ScriptedAnimation",                   0x0F11, {}],
            ["ThoughtBubble",                       0x0F12, {}],
            ["SetDisposition",                      0x0F13, {}],
            ["LootEvent",                           0x0F14, {}],
            ["SlotCompositeEffectOverride",         0x0F15, {}],
            ["EffectPackage",                       0x0F16, {}],
            ["PreferredLanguages",                  0x0F17, {}],
            ["CustomizationChange",                 0x0F18, {}],
            ["PlayerTitle",                         0x0F19, {}],
            ["AddEffectTagCompositeEffect",         0x0F1A, {}],
            ["RemoveEffectTagCompositeEffect",      0x0F1B, {}],
            ["SetSpawnAnimation",                   0x0F1C, {}],
            ["CustomizeNpc",                        0x0F1D, {}],
            ["SetSpawnerActivationEffect",          0x0F1E, {}],
            ["SetComboState",                       0x0F1F, {}],
            ["SetSurpriseState",                    0x0F20, {}],
            ["RemoveNpcCustomization",              0x0F21, {}],
            ["ReplaceBaseModel",                    0x0F22, {}],
            ["SetCollidable",                       0x0F23, {}],
            ["UpdateOwner",                         0x0F24, {}],
            ["UpdateTintAlias",                     0x0F25, {}],
            ["MoveOnRail",                          0x0F26, {}],
            ["ClearMovementRail",                   0x0F27, {}],
            ["MoveOnRelativeRail",                  0x0F28, {}],
            ["Destroyed",                           0x0F29, {
                schema: {
                    fields: [
                        { name: "guid",                 type: "uint64" },
                        { name: "unknown1",             type: "uint32" },
                        { name: "unknown2",             type: "uint32" },
                        { name: "unknown3",             type: "uint32" },
                        { name: "unknown4",             type: "uint8" }
                    ]
                }
            }],
            ["SeekTarget",                          0x0F2A, {}],
            ["SeekTargetUpdate",                    0x0F2B, {}],
            ["UpdateActiveWieldType",               0x0F2C, {}],
            ["LaunchProjectile",                    0x0F2D, {}],
            ["SetSynchronizedAnimations",           0x0F2E, {}],
            ["HudMessage",                          0x0F2F, {}],
            ["CustomizationData",                   0x0F30, {
                schema: {
                    fields: [
                        { name: "customizationData",       type: "array",
                            elementSchema: {
                                fields: [
                                    { name: "unknown1",       type: "uint32" },
                                    { name: "unknown2",       type: "string" },
                                    { name: "unknown3",       type: "uint32" },
                                    { name: "unknown4",       type: "uint32" }
                                ]
                            }
                        }
                    ]
                }
            }],
            ["MemberStatus",                        0x0F31, {}],
            ["SetCurrentAdventure",                 0x0F32, {}],
            ["StartHarvest",                        0x0F33, {}],
            ["StopHarvest",                         0x0F34, {}],
            ["KnockedOut",                          0x0F35, {
                schema: {
                    fields: [
                        { name: "guid",      type: "uint64" }
                    ]
                }
            }],
            ["KnockedOutDamageReport",              0x0F36, {}],
            ["Respawn",                             0x0F37, {}],
            ["RespawnReply",                        0x0F38, {}],
            ["ReadyToReviveResponse",               0x0F39, {}],
            ["ActivateProfile",                     0x0F3A, {}],
            ["SetSpotted",                          0x0F3B, {}],
            ["Jet",                                 0x0F3C, {
                schema: {
                    fields: [
                        { name: "characterId",      type: "uint64" },
                        { name: "state",            type: "uint8" }
                    ]
                }
            }],
            ["Turbo",                               0x0F3D, {}],
            ["StartRevive",                         0x0F3E, {}],
            ["StopRevive",                          0x0F3F, {}],
            ["ReadyToRevive",                       0x0F40, {}],
            ["SetFaction",                          0x0F41, {}],
            ["SetBattleRank",                       0x0F42, {
                schema: {
                    fields: [
                        { name: "characterId",          type: "uint64" },
                        { name: "battleRank",           type: "uint32" }
                    ]
                }
            }],
            ["StartHeal",                           0x0F43, {}],
            ["StopHeal",                            0x0F44, {}],
            ["Currency",                            0x0F45, {}],
            ["RewardCurrency",                      0x0F46, {}],
            ["ManagedObject",                       0x0F47, {}],
            ["MaterialTypeOverride",                0x0F48, {}],
            ["DebrisLaunch",                        0x0F49, {}],
            ["HideCorpse",                          0x0F4A, {}],
            ["CharacterStateDelta",                 0x0F4B, {
                schema: {
                    fields: [
                        { name: "guid",         type: "uint64" },
                        { name: "unknown1_4",     type: "uint32" },
                        { name: "unknown2",       type: "uint32" },
                        { name: "unknown3",       type: "uint32" },
                        { name: "unknown4",       type: "uint32" },
                        { name: "unknown5",       type: "uint32" },
                        { name: "unknown6",       type: "uint32" },
                        { name: "gameTime",       type: "uint32" }
                    ]
                }
            }],
            ["UpdateStat",                          0x0F4C, {}],
            ["AnimationRequest",                    0x0F4D, {}],
            ["NonPriorityCharacters",               0x0F4E, {}],
            ["PlayWorldCompositeEffect",            0x0F4F, {}],
            ["AFK",                                 0x0F50, {}],
            ["AddLightweightPc",                    0x0F51, {
                schema: {
                    fields: [
                        { name: "characterId",      type: "uint64" },
                        { name: "unknown1",         type: "uint16" },
                        { name: "unknown2",         type: "uint32" },
                        { name: "unknown3",         type: "uint32" },
                        { name: "unknown4",         type: "uint32" },
                        { name: "name",             type: "string" },
                        { name: "unknown5",         type: "uint32" },
                        { name: "unknown6",         type: "uint8" },
                        { name: "unknown7",         type: "uint32" },
                        { name: "unknown8",         type: "uint32" },
                        { name: "locationX",        type: "float" },
                        { name: "locationY",        type: "float" },
                        { name: "locationZ",        type: "float" },
                        { name: "unknown9",         type: "uint32" },
                        { name: "unknown10",        type: "float" },
                        { name: "unknown11",        type: "uint32" },
                        { name: "unknown12",        type: "float" },
                        { name: "unknown13",        type: "float" },
                        { name: "unknown14",        type: "uint32" },
                        { name: "unknown15",        type: "uint32" },
                        { name: "unknown16",        type: "uint32" },
                        { name: "unknown17",        type: "uint32" },
                        { name: "unknown18",        type: "uint8" },
                        { name: "unknown19",        type: "uint32" },
                        { name: "unknown20",        type: "uint32" },
                        { name: "unknown21",        type: "uint8" },
                        { name: "unknown22",        type: "float" }
                    ]
                }
            }],
            ["AddLightweightNpc",                   0x0F52, {
                schema: {
                    fields: [
                        { name: "guid",             type: "uint64" },
                        { name: "unknown6",         type: "uint32" },
                        { name: "unknown7",         type: "uint8" },
                        { name: "unknown8",         type: "uint8" },
                        { name: "nameId",           type: "uint32" },
                        { name: "unknown10",        type: "uint32" },
                        { name: "unknown11",        type: "uint32" },
                        { name: "unknown12",        type: "uint32" },
                        { name: "unknown13",        type: "uint8" },
                        { name: "scale",            type: "floatvector4" },
                        { name: "unknown18",        type: "floatvector4" },
                        { name: "position",         type: "floatvector4" },
                        { name: "rotation",         type: "floatvector4" },
                        { name: "unknown29_0",      type: "uint32" },
                        { name: "unknown29_1",      type: "uint32" },
                        { name: "unknown29_2",      type: "uint32" },
                        { name: "unknown29_3",      type: "uint32" },
                        { name: "unknown29_4",      type: "uint32" },
                        { name: "unknown29_5",      type: "uint32" },
                        { name: "unknown29_6",      type: "uint32" },
                        { name: "unknown29_7",      type: "uint32" },
                        { name: "unknown29_8",      type: "uint32" },
                        { name: "unknown29_9",      type: "uint32" },
                        { name: "unknown30",        type: "uint32" },
                        { name: "unknown31",        type: "uint8" },
                        { name: "profileId",        type: "uint32" },
                        { name: "unknown32",        type: "uint32" },
                        { name: "unknown33_0",      type: "uint32" },
                        { name: "unknown33_1",      type: "uint32" },
                        { name: "unknown33_2",      type: "uint32" },
                        { name: "unknown33_3",      type: "uint32" },
                        { name: "unknown33_4",      type: "uint32" },
                        { name: "unknown33_5",      type: "uint32" },
                        { name: "unknown33_6",      type: "uint32" },
                        { name: "unknown33_7",      type: "uint32" },
                        { name: "unknown33_8",      type: "uint32" },
                        { name: "unknown33_9",      type: "uint8" },
                        { name: "unknown33_10",     type: "uint8" }
                    ]
                }
            }],
            ["AddLightweightVehicle",               0x0F53, {}],
            ["AddProxiedObject",                    0x0F54, {}],
            ["LightweightToFullPc",                 0x0F55, {}],
            ["LightweightToFullNpc",                0x0F56, {}],
            ["LightweightToFullVehicle",            0x0F57, {}],
            ["FullCharacterDataRequest",            0x0F58, {
                schema: {
                    fields: [
                        { name: "guid",        type: "uint64" }
                    ]
                }
            }],
            ["InitiateNameChange",                  0x0F59, {}],
            ["NameChangeResult",                    0x0F5A, {}],
            ["NameValidationResult",                0x0F5B, {}],
            ["Deploy",                              0x0F5C, {}],
            ["LowAmmoUpdate",                       0x0F5D, {}],
            ["EnterCache",                          0x0F5E, {}],
            ["ExitCache",                           0x0F5F, {}]
        ]
    }],
    ["Ability",                                  0x10, {
        subPackets: [
            ["ClientRequestStartAbility",       0x1001, {}],
            ["ClientRequestStopAbility",        0x1002, {}],
            ["ClientMoveAndCast",               0x1003, {}],
            ["Failed",                          0x1004, {}],
            ["StartCasting",                    0x1005, {}],
            ["Launch",                          0x1006, {}],
            ["Land",                            0x1007, {}],
            ["StartChanneling",                 0x1008, {}],
            ["StopCasting",                     0x1009, {}],
            ["StopAura",                        0x100A, {}],
            ["MeleeRefresh",                    0x100B, {}],
            ["AbilityDetails",                  0x100C, {}],
            ["PurchaseAbility",                 0x100D, {}],
            ["UpdateAbilityExperience",         0x100E, {}],
            ["SetDefinition",                   0x100F, {}],
            ["RequestAbilityDefinition",        0x1010, {}],
            ["AddAbilityDefinition",            0x1011, {}],
            ["PulseLocationTargeting",          0x1012, {}],
            ["ReceivePulseLocation",            0x1013, {}],
            ["ActivateItemAbility",             0x1014, {}],
            ["ActivateVehicleAbility",          0x1015, {}],
            ["DeactivateItemAbility",           0x1016, {}],
            ["DeactivateVehicleAbility",        0x1017, {}]
        ]
    }],
    ["ClientUpdate",                             0x11, {
        subPackets: [
            ["Hitpoints",                      0x110100, {}],
            ["ItemAdd",                        0x110200, {}],
            ["ItemUpdate",                     0x110300, {}],
            ["ItemDelete",                     0x110400, {}],
            ["AddItems",                       0x110500, {}],
            ["RemoveItems",                    0x110600, {}],
            ["UpdateStat",                     0x110700, {
                schema: {
                    fields: [
                        { name: "stats",         type: "array",
                            elementSchema: {
                                fields: [
                                    { name: "statId",           type: "uint32" },
                                    { name: "statValue",            type: "variabletype8", types: {0: "uint32", 1: "float"} },
                                    { name: "unknown3",         type: "uint32" }
                                ]
                            }
                        }
                    ]
                }
            }],
            ["CollectionStart",                0x110800, {}],
            ["CollectionRemove",               0x110900, {}],
            ["CollectionAddEntry",             0x110A00, {}],
            ["CollectionRemoveEntry",          0x110B00, {}],
            ["UpdateLocation",                 0x110C00, {}],
            ["Mana",                           0x110D00, {}],
            ["UpdateProfileExperience",        0x110E00, {}],
            ["AddProfileAbilitySetApl",        0x110F00, {}],
            ["AddEffectTag",                   0x111000, {}],
            ["RemoveEffectTag",                0x111100, {}],
            ["UpdateProfileRank",              0x111200, {}],
            ["CoinCount",                      0x111300, {}],
            ["DeleteProfile",                  0x111400, {}],
            ["ActivateProfile",                0x111500, {}],
            ["AddAbility",                     0x111600, {}],
            ["NotifyPlayer",                   0x111700, {}],
            ["UpdateProfileAbilitySetApl",     0x111800, {}],
            ["RemoveActionBars",               0x111900, {}],
            ["UpdateActionBarSlot",            0x111A00, {}],
            ["DoneSendingPreloadCharacters",   0x111B00, {
                schema: {
                    fields: [
                        { name: "unknown1",         type: "uint8" }
                    ]
                }
            }],
            ["SetGrandfatheredStatus",         0x111C00, {}],
            ["UpdateActionBarSlotUsed",        0x111D00, {}],
            ["PhaseChange",                    0x111E00, {}],
            ["UpdateKingdomExperience",        0x111F00, {}],
            ["DamageInfo",                     0x112000, {}],
            ["ZonePopulation",                 0x112100, {
                schema: {
                    fields: [
                        { name: "populations",       type: "array",     elementType: "uint8" }
                    ]
                }
            }],
            ["RespawnLocations",               0x112200, {
                schema: {
                    fields: [
                        { name: "unknown1",       type: "uint8" },
                        { name: "locations",      type: "array",     
                            elementSchema: {
                                fields: [
                                    { name: "respawnId",            type: "uint32" },
                                    { name: "unknown2",             type: "uint32" },
                                    { name: "respawnType",          type: "uint8" },
                                    { name: "x",                    type: "float" },
                                    { name: "y",                    type: "float" },
                                    { name: "z",                    type: "float" },
                                    { name: "unknown7",             type: "float" },
                                    
                                    { name: "iconId1",              type: "uint32" },
                                    { name: "iconId2",              type: "uint32" },
                                    { name: "respawnTotalTime",     type: "uint32" },
                                    { name: "unknown11",            type: "uint32" },

                                    { name: "nameId",               type: "uint32" },
                                    { name: "distance",             type: "float" },
                                    { name: "unknown14",            type: "uint8" },
                                    { name: "unknown15",            type: "uint32" },
                                    { name: "unknown16",            type: "uint8" },
                                    { name: "unknown17",            type: "uint8" },
                                    { name: "unknown18",            type: "uint8" },
                                    { name: "unknown19",            type: "uint8" },
                                    { name: "unknown20",            type: "uint32" }
                                    
                                ]
                            }
                        }
                    ]
                }
            }],
            ["ModifyMovementSpeed",            0x112300, {}],
            ["ModifyTurnRate",                 0x112400, {}],
            ["ModifyStrafeSpeed",              0x112500, {}],
            ["UpdateManagedLocation",          0x112600, {}],
            ["ScreenEffect",                   0x112700, {}],
            ["MovementVersion",                0x112800, {
                schema: {
                    fields: [
                        { name: "version",       type: "uint8" }
                    ]
                }
            }],
            ["ManagedMovementVersion",         0x112900, {
                schema: {
                    fields: [
                        { name: "unknown1",       type: "uint8" },
                        { name: "unknown2",       type: "uint8" }
                    ]
                }
            }],
            ["UpdateWeaponAddClips",           0x112A00, {}],
            ["SpotProbation",                  0x112B00, {}],
            ["DailyRibbonCount",               0x112C00, {}],
            ["DespawnNpcUpdate",               0x112D00, {}],
            ["LoyaltyPoints",                  0x112E00, {}],
            ["Membership",                     0x112F00, {}],
            ["ResetMissionRespawnTimer",       0x113000, {}],
            ["ResetSquadDeployTimer",          0x113100, {}],
            ["Freeze",                         0x113200, {}],
            ["InGamePurchaseResult",           0x113300, {}],
            ["QuizComplete",                   0x113400, {}],
            ["AutoMountComplete",              0x113500, []]
        ]
    }],
    ["MiniGame",                                 0x12, {}],
    ["Group",                                    0x13, {}],
    ["Encounter",                                0x14, {}],
    ["Inventory",                                0x15, {}],
    ["SendZoneDetails",                              0x16, {
        schema: {
            fields: [
                { name: "zoneName",     type: "string" },
                { name: "zoneId",       type: "uint32" },
                { name: "unknown1",     type: "uint32" },
                { name: "unknown2",     type: "uint8" },
                { name: "unknown3",     type: "uint8" },
                { name: "unknown4",     type: "uint32" },
                { name: "unknown5",     type: "uint32" },
                { name: "nameId",       type: "uint32" },
                { name: "unknown7",     type: "boolean" }
            ]
        }
    }],
    ["ReferenceData",                                0x17, {
        subPackets: [
            ["ItemClassDefinitions",       0x1701, {}],
            ["ItemCategoryDefinitions",    0x1702, {}],
            ["ClientProfileData",          0x1703, {}],
            ["WeaponDefinitions",          0x1704, {
                schema: {
                    fields: [
                        { name: "data",     type: "byteswithlength" }
                    ]
                }
            }],
            ["ProjectileDefinitions",      0x1705, {}]
        ]
    }],
    ["Objective",                               0x18, {}],
    ["Debug",                                   0x19, {}],
    ["Ui",                                      0x1A, {
        subPackets: [
            ["TaskAdd",                                     0x1A01, {}],
            ["TaskUpdate",                                  0x1A02, {}],
            ["TaskComplete",                                0x1A03, {}],
            ["TaskFail",                                    0x1A04, {}],
            ["Unknown",                                     0x1A05, {}],
            ["ExecuteScript",                               0x1A07, {}],
            ["StartTimer",                                  0x1A09, {}],
            ["ResetTimer",                                  0x1A0A, {}],
            ["ObjectiveTargetUpdate",                       0x1A0D, {}],
            ["Message",                                     0x1A0E, {}],
            ["CinematicStartLookAt",                        0x1A0F, {}],
            ["WeaponHitFeedback",                           0x1A10, {}],
            ["HeadShotFeedback",                            0x1A11, {}],
            ["WaypointCooldown",                            0x1A14, {}],
            ["ZoneWaypoint",                                0x1A15, {}],
            ["WaypointNotify",                              0x1A16, {}],
            ["ContinentDominationNotification",             0x1A17, {}],
            ["InteractStart",                               0x1A18, {}],
            ["SomeInteractionThing",                        0x1A19, {}],
            ["RewardNotification",                          0x1A1A, {}],
            ["WarpgateRotateWarning",                       0x1A1B, {}],
            ["SystemBroadcast",                             0x1A1C, {}]
        ]
    }],
    ["Quest",                                    0x1B, {}],
    ["Reward",                                   0x1C, {}],
    ["GameTimeSync",                                 0x1D, {
        schema: {
            fields: [
                { name: "time",     type: "uint32" }
            ]
        }
    }],
    ["Pet",                                      0x1E, {}],
    ["PointOfInterestDefinitionRequest",             0x1F, {}],
    ["PointOfInterestDefinitionReply",               0x20, {}],
    ["WorldTeleportRequest",                         0x21, {}],
    ["Trade",                                    0x22, {}],
    ["EscrowGivePackage",                        0x23, {}],
    ["EscrowGotPackage",                         0x24, {}],
    ["UpdateEncounterDataCommon",                    0x25, {}],
    ["Recipe",                                   0x26, {}],
    ["InGamePurchase",                           0x27, {
        subPackets: [
            ["PreviewOrderRequest",                0x270100, {}],
            ["PreviewOrderResponse",               0x270200, {}],
            ["PlaceOrderRequest",                  0x270300, {}],
            ["PlaceOrderResponse",                 0x270400, {}],
            ["StoreBundles",                       0x270500, {}],
            ["StoreBundleStoreUpdate",             0x270501, {}],
            ["StoreBundleStoreBundleUpdate",       0x270502, {}],
            ["StoreBundleCategoryGroups",          0x270600, {}],
            ["StoreBundleCategories",              0x270700, {
                schema: {
                    fields: [
                        {
                            name: "categories", type: "array", elementSchema : {
                                fields: [
                                    { name: "id",           type: "uint32" },
                                    { name: "index",        type: "uint32" },
                                    { name: "unknown1",     type: "uint32" },
                                    { name: "name",         type: "string" },
                                    { name: "unknown1",     type: "uint32" },
                                    { name: "unknown2",     type: "uint32" },
                                    { name: "unknown3",     type: "uint32" },
                                    { name: "unknown4",     type: "boolean" },
                                    { name: "unknown5",     type: "uint32" }
                                ]
                            }
                        }
                    ]
                }
            }],
            ["ExclusivePartnerStoreBundles",       0x270800, {}],
            ["StoreBundleGroups",                  0x270900, {}],
            ["WalletInfoRequest",                  0x270A00, {}],
            ["WalletInfoResponse",                 0x270B00, {}],
            ["ServerStatusRequest",                0x270C00, {}],
            ["ServerStatusResponse",               0x270D00, {}],
            ["StationCashProductsRequest",         0x270E00, {}],
            ["StationCashProductsResponse",        0x270F00, {}],
            ["CurrencyCodesRequest",               0x271000, {}],
            ["CurrencyCodesResponse",              0x271100, {}],
            ["StateCodesRequest",                  0x271200, {}],
            ["StateCodesResponse",                 0x271300, {}],
            ["CountryCodesRequest",                0x271400, {}],
            ["CountryCodesResponse",               0x271500, {}],
            ["SubscriptionProductsRequest",        0x271600, {}],
            ["SubscriptionProductsResponse",       0x271700, {}],
            ["EnableMarketplace",                  0x271800, {
                schema: {
                    fields: [
                        { name: "unknown1",     type: "uint8" },
                        { name: "unknown2",     type: "uint8" }
                    ]
                }
            }],
            ["AcccountInfoRequest",                0x271900, {}],
            ["AcccountInfoResponse",               0x271A00, {}],
            ["StoreBundleContentRequest",          0x271B00, {}],
            ["StoreBundleContentResponse",         0x271C00, {}],
            ["ClientStatistics",                   0x271D00, {}],
            ["SendMannequinStoreBundlesToClient",  0x271E00, {}],
            ["DisplayMannequinStoreBundles",       0x271F00, {}],
            ["ItemOfTheDay",                       0x272000, {
                schema: {
                    fields: [
                        { name: "bundleId",     type: "uint32" }
                    ]
                }
            }],
            ["EnablePaymentSources",               0x272100, {}],
            ["SetMembershipFreeItemInfo",          0x272200, {}],
            ["WishListAddBundle",                  0x272300, {}],
            ["WishListRemoveBundle",               0x272400, {}],
            ["PlaceOrderRequestClientTicket",      0x272500, {}],
            ["GiftOrderNotification",              0x272600, {}],
            ["ActiveSchedules",                    0x272700, {
                schema: {
                    fields: [
                        { name: "unknown1",         type: "array", 
                            elementSchema : {
                                fields: [
                                    { name: "id",           type: "uint32" }
                                ]
                            }
                        },
                        { name: "unknown2",         type: "uint32" },
                        { name: "unknown3",         type: "array", 
                            elementSchema : {
                                fields: [
                                    { name: "scheduleId",         type: "uint32" },
                                    { name: "time",               type: "uint32" },
                                    { name: "unknown1",           type: "uint32" },
                                    { name: "unknown2",           type: "uint8" },
                                    { name: "unknown3",           type: "uint8" },
                                    { name: "unknown4",           type: "uint8" },
                                    { name: "unknown5",           type: "uint8" }
                                ]
                            }
                        }
                    ]
                }
            }],
            ["LoyaltyInfoAndStoreRequest",         0x272800, {}],
            ["NudgeOfferNotification",             0x272900, {}],
            ["NudgeRequestStationCashProducts",    0x272A00, {}],
            ["SpiceWebAuthUrlRequest",             0x272B00, {}],
            ["SpiceWebAuthUrlResponse",            0x272C00, {}],
            ["BundlePriceUpdate",                  0x272D00, {}],
            ["WalletBalanceUpdate",                0x272E00, {}],
            ["MemberFreeItemCount",                0x272F00, {}]
        ]
    }],
    ["QuickChat",                               0x28, {
        subPackets: [
            ["SendData",                                     0x280100, {
                schema: {
                    fields: [
                        { name: "commands",         type: "array",
                            elementSchema: {
                                fields: [
                                    { name: "index",                type: "uint32" },
                                    { name: "commandId",            type: "uint32" },
                                    { name: "unknown1",             type: "uint32" },
                                    { name: "stringId",             type: "uint32" },
                                    { name: "unknown3",             type: "uint32" },
                                    { name: "unknown4",             type: "uint32" },
                                    { name: "unknown5",             type: "uint32" },
                                    { name: "unknown6",             type: "uint32" },
                                    { name: "unknown7",             type: "uint32" },
                                    { name: "unknown8",             type: "uint32" },
                                    { name: "unknown9",             type: "uint32" }
                                ]
                            }
                        }
                    ]
                }
            }],
            ["SendTell",                                     0x2802, {}],
            ["SendChatToChannel",                            0x2803, {}]
        ]
    }],
    ["Report",                                   0x29, {}],
    ["LiveGamer",                                0x2A, {}],
    ["Acquaintance",                             0x2B, {}],
    ["ClientServerShuttingDown",                     0x2C, {}],
    ["Friend",                                   0x2D, {
        subPackets: [
            ["List",                                        0x2D01, {
                schema: {
                    fields: [
                        { name: "friends",         type: "array",
                            elementSchema: {
                                fields: [
                                    { name: "unknown1",                type: "uint32" },
                                    { name: "unknown2",                type: "uint32" },
                                    { name: "unknown3",                type: "uint32" },
                                    { name: "characterName",           type: "string" },
                                    { name: "unknown4",                type: "uint32" },
                                    { name: "characterId",             type: "uint64" },
                                    { name: "unknown5",                type: "uint32" },
                                    { name: "unknown6",                type: "uint32" },
                                    { name: "unknown7",                type: "uint8" }
                                ]
                            }
                        }
                    ]
                }
            } ],
            ["Online",                                      0x2D02, {} ],
            ["Offline",                                     0x2D03, {} ],
            ["UpdateProfileInfo",                           0x2D04, {} ],
            ["UpdatePositions",                             0x2D05, {} ],
            ["Add",                                         0x2D06, {} ],
            ["Remove",                                      0x2D07, {} ],
            ["Message",                                     0x2D08, {} ],
            ["Status",                                      0x2D09, {} ],
            ["Rename",                                      0x2D0A, {} ]
        ]
    }],
    ["Broadcast",                                0x2E, {}],
    ["ClientKickedFromServer",                       0x2F, {}],
    ["UpdateClientSessionData",                      0x30, {
        schema: {
            fields: [
                { name: "sessionId",        type: "string" },
                { name: "stationName",      type: "string" },
                { name: "unknown",          type: "bytes", length: 9 },
                { name: "stationCode",      type: "string" },
            ]
        }
    }],
    ["BugSubmission",                            0x31, {}],
    ["WorldDisplayInfo",                             0x32, {
        schema: {
            fields: [
                { name: "worldId",        type: "uint32" }
            ]
        }
    }],
    ["MOTD",                                         0x33, {}],
    ["SetLocale",                                    0x34, {
        schema: {
            fields: [
                { name: "locale",        type: "string" }
            ]
        }
    }],
    ["SetClientArea",                                0x35, {}],
    ["ZoneTeleportRequest",                          0x36, {}],
    ["TradingCard",                              0x37, {}],
    ["WorldShutdownNotice",                          0x38, {}],
    ["LoadWelcomeScreen",                            0x39, {}],
    ["ShipCombat",                               0x3A, {}],
    ["AdminMiniGame",                            0x3B, {}],
    ["KeepAlive",                                    0x3C, {
        schema: {
            fields: [
                { name: "gameTime",        type: "uint32" }
            ]
        }
    }],
    ["ClientExitLaunchUrl",                          0x3D, {}],
    ["ClientPath",                               0x3E, {}],
    ["ClientPendingKickFromServer",                  0x3F, {}],
    ["MembershipActivation",                         0x40, {
        schema: {
            fields: [
                { name: "unknown",        type: "uint32" }
            ]
        }
    }],
    ["Lobby",                                    0x41, {
        subPackets: [
            ["JoinLobbyGame",                           0x4101, {}],
            ["LeaveLobbyGame",                          0x4102, {}],
            ["StartLobbyGame",                          0x4103, {}],
            ["UpdateLobbyGame",                         0x4104, {}],
            ["SendLobbyToClient",                       0x4106, {}],
            ["SendLeaveLobbyToClient",                  0x4107, {}],
            ["RemoveLobbyGame",                         0x4108, {}],
            ["LobbyErrorMessage",                       0x410B, {}],
            ["ShowLobbyUi",                             0x410C, {}]
        ]
    }],
    ["LobbyGameDefinition",                      0x42, {
        subPackets: [
            ["LobbyGameUnknown1",                      0x4201, {
                schema: {
                    fields: [
                        { name: "unknown1",        type: "uint8" }
                    ]
                }
            }],
            ["LobbyGameUnknown2",                      0x4202, {}]
        ]
    }],
    ["ShowSystemMessage",                            0x43, {}],
    ["POIChangeMessage",                             0x44, {}],
    ["ClientMetrics",                                0x45, {}],
    ["FirstTimeEvent",                           0x46, {}],
    ["Claim",                                    0x47, {}],
    ["ClientLog",                                    0x48, {
        schema: {
            fields: [
                { name: "file",        type: "string" },
                { name: "message",        type: "string" }
            ]
        }
    }],
    ["Ignore",                                   0x49, {}],
    ["SnoopedPlayer",                            0x4A, {}],
    ["Promotional",                              0x4B, {}],
    ["AddClientPortraitCrc",                         0x4C, {}],
    ["ObjectiveTarget",                          0x4D, {}],
    ["CommerceSessionRequest",                       0x4E, {}],
    ["CommerceSessionResponse",                      0x4F, {}],
    ["TrackedEvent",                                 0x50, {}],
    ["LoginFailed",                                  0x51, {}],
    ["LoginToUChat",                                 0x52, {}],
    ["ZoneSafeTeleportRequest",                      0x53, {}],
    ["RemoteInteractionRequest",                     0x54, {}],
    ["UpdateCamera",                                 0x55, {}],
    ["Housing",                                  0x56, {}],
    ["Guild",                                    0x57, {
        subPackets: [
            ["Disband",                                     0x5702, {}],
            ["Rename",                                      0x5703, {}],
            ["ChangeMemberRank",                            0x570A, {}],
            ["MotdUpdate",                                  0x570B, {}],
            ["UpdateRank",                                  0x570E, {}],
            ["DataFull",                                    0x570F, {}],
            ["Data",                                        0x5710, {}],
            ["Invitations",                                 0x5711, {}],
            ["AddMember",                                   0x5712, {}],
            ["RemoveMember",                                0x5713, {}],
            ["UpdateInvitation",                            0x5714, {}],
            ["MemberOnlineStatus",                          0x5715, {}],
            ["TagsUpdated",                                 0x5716, {}],
            ["Notification",                                0x5717, {}],
            ["UpdateAppData",                               0x5720, {}],
            ["RecruitingGuildsForBrowserReply",             0x5726, {}]

        ]
    }],
    ["Broker",                                   0x58, {}],
    ["GuildAdmin",                               0x59, {}],
    ["AdminBroker",                              0x5A, {}],
    ["BattleMages",                              0x5B, {}],
    ["WorldToWorld",                             0x5C, {
        
    }],
    ["PerformAction",                                0x5D, {}],
    ["EncounterMatchmaking",                     0x5E, {}],
    ["ClientLuaMetrics",                             0x5F, {}],
    ["RepeatingActivity",                        0x60, {}],
    ["ClientGameSettings",                           0x61, {
        schema: {
            fields: [
                { name: "unknown1",     type: "uint32" },
                { name: "unknown2",     type: "uint32" },
                { name: "unknown3",     type: "boolean" },
                { name: "unknown4",     type: "float" },
                { name: "unknown5",     type: "uint32" },
                { name: "unknown6",     type: "uint32" },
                { name: "unknown7",     type: "uint32" },
                { name: "unknown8",     type: "float" },
                { name: "unknown9",     type: "float" }
            ]
        }
    }],
    ["ClientTrialProfileUpsell",                     0x62, {}],
    ["ActivityManager",                          0x63, {
        subPackets: [
            ["ProfileList",                             0x6301, {}],
            ["JoinError",                               0x6302, {}]
        ]
    }],
    ["RequestSendItemDefinitionsToClient",           0x64, {}],
    ["Inspect",                                  0x65, {}],
    ["Achievement",                              0x66, {
        subPackets: [
            ["Add",                                     0x6602, {}],
            ["Initialize",                              0x6603000000, {
                schema: {
                    fields: [
                        { name: "achievements",         type: "array",
                            elementSchema: {
                                fields: [
                                    { name: "unknown1",        type: "uint32" },
                                    { name: "unknown2",        type: "uint32" },
                                    { name: "unknown3",        type: "uint32" },
                                    { name: "unknown4",        type: "uint8" },
                                    { name: "unknown5",        type: "uint32" },
                                    { name: "unknown6",        type: "uint32" },
                                    { name: "unknown7",        type: "uint32" },
                                    { name: "unknown8",        type: "float" },
                                    { name: "unknown9",        type: "float" },
                                    { name: "unknown10",        type: "array",
                                        elementSchema: {
                                            fields: [
                                                { name: "unknown1",        type: "bytes", length: 113 }
                                            ]
                                        }
                                    },
                                    { name: "unknown11",        type: "uint32" },
                                    { name: "unknown12",        type: "uint32" },
                                    { name: "unknown13",        type: "uint32" },
                                    { name: "unknown14",        type: "uint32" },
                                    { name: "unknown15",        type: "uint32" },
                                    { name: "unknown16",        type: "uint8" },
                                    { name: "unknown17",        type: "uint8" },
                                    { name: "unknown18",        type: "uint32" },
                                    { name: "unknown22",        type: "uint8" }
                                ]
                            }
                        },
                        { name: "achievementData",      type: "byteswithlength",
                            schema: {
                                fields: [
                                    { name: "achievements",     type: "array", 
                                        elementSchema: {
                                            fields: [
                                                { name: "achievementId",        type: "uint32" },
                                                { name: "nameId",               type: "uint32" },
                                                { name: "descriptionId",        type: "uint32" },
                                                { name: "unknown3",             type: "uint32" },
                                                { name: "unknown4",             type: "uint32" },
                                                { name: "unknown5",             type: "uint32" },
                                                { name: "unknown6",             type: "uint32" },
                                                { name: "unknown7",             type: "uint32" },
                                                { name: "unknown8",             type: "uint32" },
                                                { name: "unknown9",             type: "uint8" },
                                                { name: "unknown10",            type: "uint32" },
                                                { name: "unknown11",            type: "uint32" },
                                                { name: "unknown12",            type: "uint32" },
                                                { name: "unknown13",            type: "uint32" },
                                                { name: "unknown14",            type: "uint32" },
                                                { name: "unknown15",            type: "uint8" },
                                                { name: "unknown16",            type: "uint32" },
                                                { name: "unknown17",            type: "uint8" },
                                                { name: "unknown18",            type: "uint8" }
                                            ]
                                        }
                                    },
                                ]
                            }
                        },
                    ]
                }
            }],
            ["Complete",                                0x6604, {}],
            ["ObjectiveAdded",                          0x6605, {}],
            ["ObjectiveActivated",                      0x6606, {}],
            ["ObjectiveUpdate",                         0x6607, {}],
            ["ObjectiveComplete",                       0x6608, {}]
        ]
    }],
    ["PlayerTitle",                              0x67, {}],
    ["Fotomat",                                  0x68, {}],
    ["UpdateUserAge",                                0x69, {}],
    ["Loot",                                     0x6A, {}],
    ["ActionBarManager",                         0x6B, {}],
    ["ClientTrialProfileUpsellRequest",              0x6C, {}],
    ["AdminSocialProfile",                       0x6D, {}],
    ["SocialProfile",                            0x6E, {}],
    ["PlayerUpdateJump",                             0x6F, {}],
    ["CoinStore",                                0x70, {
        subPackets: [
            ["ItemList",                                        0x700100, {
                schema: {
                    fields: [
                        { name: "items",     type: "array", 
                            elementSchema: {
                                fields: [
                                    { name: "itemId",       type: "uint32" },
                                    { name: "itemId2",      type: "uint32" },
                                    { name: "unknown1",     type: "uint32" },
                                    { name: "unknown2",     type: "uint16" }
                                ]
                            }
                        },
                        { name: "unknown1",        type: "uint32" }
                    ]
                }
            }],
            ["ItemDefinitionsRequest",                          0x700200, {}],
            ["ItemDefinitionsResponse",                         0x700300, {}],
            ["SellToClientRequest",                             0x700400, {
                schema: {
                    fields: [
                        { name: "unknown1",         type: "uint32" },
                        { name: "unknown2",         type: "uint32" },
                        { name: "itemId",           type: "uint32" },
                        { name: "unknown4",         type: "uint32" },
                        { name: "quantity",         type: "uint32" },
                        { name: "unknown6",         type: "uint32" }
                    ]
                }
            }],
            ["BuyFromClientRequest",                            0x700500, {}],
            ["TransactionComplete",                             0x700600, {
                schema: {
                    fields: [
                        { name: "unknown1",         type: "uint32" },
                        { name: "unknown2",         type: "uint32" },
                        { name: "unknown3",         type: "uint32" },
                        { name: "unknown4",         type: "uint32" },
                        { name: "unknown5",         type: "uint32" },
                        { name: "unknown6",         type: "uint32" },
                        { name: "unknown7",         type: "uint32" },
                        { name: "unknown8",         type: "uint32" },
                        { name: "timestamp",        type: "uint32" },
                        { name: "unknown9",         type: "uint32" },
                        { name: "itemId",           type: "uint32" },
                        { name: "unknown10",        type: "uint32" },
                        { name: "quantity",         type: "uint32" },
                        { name: "unknown11",        type: "uint32" },
                        { name: "unknown12",        type: "uint8" }
                    ]
                }
            }],
            ["Open",                                            0x700700, {}],
            ["ItemDynamicListUpdateRequest",                    0x700800, {}],
            ["ItemDynamicListUpdateResponse",                   0x700900, {}],
            ["MerchantList",                                    0x700A00, {}],
            ["ClearTransactionHistory",                         0x700B00, {}],
            ["BuyBackRequest",                                  0x700C00, {}],
            ["BuyBackResponse",                                 0x700D00, {}],
            ["SellToClientAndGiftRequest",                      0x700E00, {}],
            ["ReceiveGiftItem",                                 0x701100, {}],
            ["GiftTransactionComplete",                         0x701200, {}]
        ]
    }],
    ["InitializationParameters",                     0x71, {
        schema: {
            fields: [
                { name: "environment",     type: "string" },
                { name: "serverId",        type: "uint32" }
            ]
        }
    }],
    ["ActivityService",                          0x72, {
        subPackets: [
            ["Activity",                                0x7201, {
                subPackets: [
                    ["ListOfActivities",                            0x720101, {}],
                    ["UpdateActivityFeaturedStatus",                0x720105, {}]
                ]
            }],
            ["ScheduledActivity",                       0x7202, {
                subPackets: [
                    ["ListOfActivities",                            0x720201, {}]
                ]                
            }]
        ]        
    }],
    ["Mount",                                    0x73, {
        subPackets: [
            ["MountRequest",                                0x7301, {}],
            ["MountResponse",                               0x7302, {}],
            ["DismountRequest",                             0x7303, {}],
            ["DismountResponse",                            0x7304, {}],
            ["MountList",                                   0x7305, {}],
            ["MountSpawn",                                  0x7306, {}],
            ["MountDespawn",                                0x7307, {}],
            ["MountSpawnByItemDefinitionId",                0x7308, {}],
            ["MountOfferUpsell",                            0x7309, {}],
            ["SeatChangeRequest",                           0x730A, {}],
            ["SeatChangeResponse",                          0x730B, {}],
            ["SeatSwapRequest",                             0x730C, {}],
            ["SeatSwapResponse",                            0x730D, {}],
            ["MountPacketTypeCount",                        0x730E, {}]
        ]
    }],
    ["ClientInitializationDetails",                  0x74, {
        schema: {
            fields: [
                { name: "unknown",        type: "uint32" }
            ]
        }
    }],
    ["ClientAreaTimer",                              0x75, {}],
    ["LoyaltyReward",                            0x76, {}],
    ["Rating",                                   0x77, {}],
    ["ClientActivityLaunch",                     0x78, {}],
    ["ServerActivityLaunch",                     0x79, {}],
    ["ClientFlashTimer",                             0x7A, {}],
    ["InviteAndStartMiniGame",                       0x7B, {}],
    ["PlayerUpdateUpdatePositionZoneToClient",       0x7C, {
        schema: {
            fields: [
                { name: "unknown1",         type: "uint32" }
            ]
        }
    }],
    ["PlayerUpdateFlourish",                         0x7D, {}],
    ["Quiz",                                     0x7E, {}],
    ["PlayerUpdatePositionOnPlatform",               0x7F, {}],
    ["ClientMembershipVipInfo",                      0x80, {}],
    ["Target",                                   0x81, {}],
    ["GuideStone",                               0x82, {}],
    ["Raid",                                     0x83, {}],
    ["Voice",                                    0x84, {
        subPackets: [
            ["Login",                                       0x8400, {
                schema: {
                    fields: [
                        { name: "clientName",           type: "string" },
                        { name: "sessionId",            type: "string" },
                        { name: "url",                  type: "string" },
                        { name: "characterName",        type: "string" }
                    ]
                }
            }],
            ["JoinChannel",                                 0x8401, {
                schema: {
                    fields: [
                        { name: "roomType",             type: "uint8" },
                        { name: "uri",                  type: "string" },
                        { name: "unknown1",             type: "uint32" }
                    ]
                }
            }],
            ["LeaveChannel",                                0x8402, {}]
        ]
    }],
    ["Weapon",                                   0x85, {
        subPackets: [
            ["Weapon",                           0x8500, {}],
            ["FireStateUpdate",                      0x8501, {}],
            ["FireStateTargetedUpdate",              0x8502, {}],
            ["Fire",                                 0x8503, {}],
            ["FireWithDefinitionMapping",            0x8504, {}],
            ["FireNoProjectile",                     0x8505, {}],
            ["ProjectileHitReport",                  0x8506, {}],
            ["ReloadRequest",                        0x8507, {}],
            ["Reload",                               0x8508, {}],
            ["ReloadInterrupt",                      0x8509, {}],
            ["ReloadComplete",                       0x850A, {}],
            ["AddAmmo",                              0x850B, {}],
            ["SetAmmo",                              0x850C, {}],
            ["SwitchFireModeRequest",                0x850D, {}],
            ["LockOnGuidUpdate",                     0x850E, {}],
            ["LockOnLocationUpdate",                 0x850F, {}],
            ["MeleeSlash",                           0x8510, {}],
            ["MeleeStabStart",                       0x8511, {}],
            ["MeleeStabFinish",                      0x8512, {}],
            ["StatUpdate",                           0x8513, {}],
            ["DebugProjectile",                      0x8514, {}],
            ["AddFireGroup",                         0x8515, {}],
            ["RemoveFireGroup",                      0x8516, {}],
            ["ReplaceFireGroup",                     0x8517, {}],
            ["GuidedUpdate",                         0x8518, {}],
            ["RemoteWeapon",                     0x8519, {
                subPackets: [
                    ["Reset",                           0x851901, {}],
                    ["AddWeapon",                       0x851902, {}],
                    ["RemoveWeapon",                    0x851903, {}],
                    ["Update",                      0x851904, {
                        subPackets: [
                            ["FireState",                   0x85190401, {}],
                            ["Empty",                       0x85190402, {}],
                            ["Reload",                      0x85190403, {}],
                            ["ReloadLoopEnd",               0x85190404, {}],
                            ["ReloadInterrupt",             0x85190405, {}],
                            ["SwitchFireMode",              0x85190406, {}],
                            ["StatUpdate",                  0x85190407, {}],
                            ["AddFireGroup",                0x85190408, {}],
                            ["RemoveFireGroup",             0x85190409, {}],
                            ["ReplaceFireGroup",            0x8519040A, {}],
                            ["ProjectileLaunch",            0x8519040B, {}],
                            ["Chamber",                     0x8519040C, {}],
                            ["Throw",                       0x8519040D, {}],
                            ["Trigger",                     0x8519040E, {}],
                            ["ChamberInterrupt",            0x8519040F, {}],
                            ["RemoteSetAmmo",               0x85190410, {}]
                        ]
                    }],
                    ["MeleeSlash",                      0x851905, {}],
                    ["MeleeStabStart",                  0x851906, {}],
                    ["MeleeStabFinish",                 0x851907, {}],
                    ["QuickUse",                        0x851908, {}],
                    ["ProjectileLaunchHint",            0x851909, {}],
                    ["ProjectileDetonateHint",          0x85190A, {}],
                    ["ProjectileRemoteContactReport",   0x85190B, {}]
                ]
            }],
            ["ChamberRound",                         0x851A, {}],
            ["QuickUse",                             0x851B, {}],
            ["GuidedSetNonSeeking",                  0x851C, {}],
            ["ChamberInterrupt",                     0x851D, {}],
            ["GuidedExplode",                        0x851E, {}],
            ["DestroyNpcProjectile",                 0x851F, {}],
            ["WeaponToggleEffects",                  0x8520, {}],
            ["Reset",                                0x8521, {}],
            ["ProjectileSpawnNpc",                   0x8522, {}],
            ["FireRejected",                         0x8523, {}],
            ["MultiWeapon",                          0x8524, {}],
            ["WeaponFireHint",                       0x8525, {}],
            ["ProjectileContactReport",              0x8526, {}]
        ]
    }],
    ["Facility",                                 0x87, {
        subPackets: [
            ["ReferenceData",                                       0x8701, {
                schema: {
                    fields: [
                        { name: "data",               type: "byteswithlength" }
                    ]
                }
            }],
            ["FacilityData",                                        0x8702, {
                schema: {
                    fields: [
                        { name: "unknown1_uint32",          type: "uint32" },
                        { name: "facilities",               type: "array", 
                            elementSchema: {
                                fields: [
                                    { name: "facilityId",               type: "uint32" },
                                    { name: "facilityType",             type: "uint8" },
                                    { name: "unknown2_uint8",           type: "uint8" },
                                    { name: "regionId",                 type: "uint32" },
                                    { name: "nameId",                   type: "uint32" },
                                    { name: "locationX",                type: "float" },
                                    { name: "locationY",                type: "float" },
                                    { name: "locationZ",                type: "float" },
                                    { name: "unknown3_float",           type: "float" },
                                    { name: "imageSetId",               type: "uint32" },
                                    { name: "unknown5_uint32",          type: "uint32" },
                                    { name: "unknown6_uint8",           type: "uint8" },
                                    { name: "unknown7_uint8",           type: "uint8" }
                                ]
                            }
                        },
                    ]
                }
            }],
            ["CurrentFacilityUpdate",                               0x8703, {}],
            ["SpawnDataRequest",                                    0x8704, {}],
            ["FacilitySpawnData",                                   0x8705, {}],
            ["FacilityUpdate",                                      0x8706, {
                fn: function(data, offset) {
                    var result = {},
                        startOffset = offset,
                        n, i, values, flags;

                    result["facilityId"] = data.readUInt32LE(offset);
                    flags = data.readUInt16LE(offset+4);
                    result["flags"] = flags;
                    offset += 6;
                    if (flags & 1) {
                        result["unknown1"] = data.readUInt8(offset);
                        offset += 1;
                    }
                    if ((flags >> 1) & 1) {
                        n = data.readUInt32LE(offset);
                        values = [];
                        for (i=0;i<n;i++) {
                            values[i] = data.readUInt8(offset + 4 + i);
                        }
                        result["unknown2"] = values;
                        offset += 4 + n;
                    }
                    if ((flags >> 2) & 1) {
                        result["unknown3"] = data.readUInt8(offset);
                        offset += 1;
                    }
                    if ((flags >> 3) & 1) {
                        n = data.readUInt32LE(offset);
                        values = [];
                        for (i=0;i<n;i++) {
                            values[i] = data.readUInt8(offset + 4 + i);
                        }
                        result["unknown4"] = values;
                        offset += 4 + n;
                    }
                    if ((flags >> 4) & 1) {
                        n = data.readUInt32LE(offset);
                        values = [];
                        for (i=0;i<n;i++) {
                            values[i] = data.readUInt8(offset + 4 + i);
                        }
                        result["unknown5"] = values;
                        offset += 4 + n;
                    }
                    if ((flags >> 5) & 1) {
                        values = [];
                        for (i=0;i<4;i++) {
                            values[i] = data.readUInt8(offset + i);
                        }
                        result["unknown6"] = values;
                        offset += 4;
                    }
                    if ((flags >> 6) & 1) {
                        result["unknown7"] = data.readUInt8(offset);
                        offset += 1;
                    }
                    if ((flags >> 8) & 1) {
                        result["unknown8"] = data.readUInt8(offset);
                        offset += 1;
                    }
                    if ((flags >> 10) & 1) {
                        result["unknown9"] = data.readUInt8(offset);
                        offset += 1;
                    }
                    if ((flags >> 11) & 1) {
                        result["unknown10"] = [
                            data.readUInt32LE(offset),
                            data.readUInt32LE(offset+4)
                        ];
                        offset += 8;
                    }
                    if ((flags >> 12) & 1) {
                        result["unknown11"] = data.readUInt8(offset);
                        offset += 1;
                    }
                    if ((flags >> 13) & 1) {
                        result["unknown12"] = data.readUInt32LE(offset);
                        offset += 4;
                    }
                    return {
                        result: result,
                        length: offset - startOffset
                    };
                }
            }],
            ["FacilitySpawnStatus",                                 0x8707, {}],
            ["FacilitySpawnStatusTracked",                          0x8708, {}],
            ["NotificationFacilityCaptured",                        0x8709, {}],
            ["NotificationFacilitySignificantCaptureProgress",      0x870A, {}],
            ["NotificationFacilityCloseToCapture",                  0x870B, {}],
            ["NotificationFacilitySpawnBeginCapture",               0x870C, {}],
            ["NotificationFacilitySpawnFinishCapture",              0x870D, {}],
            ["NotificationLeavingFacilityDuringContention",         0x870E, {}],
            ["ProximitySpawnCaptureUpdate",                         0x870F, {}],
            ["ClearProximitySpawn",                                 0x8710, {}],
            ["GridStabilizeTimerUpdated",                           0x8711, {}],
            ["SpawnCollisionChanged",                               0x8712, {}],
            ["NotificationFacilitySecondaryObjectiveEventPacket",   0x8713, {}],
            ["PenetrateShieldEffect",                               0x8714, {}],
            ["SpawnUpdateGuid",                                     0x8715, {}],
            ["FacilityUpdateRequest",                               0x8716, {}],
            ["EmpireScoreValueUpdate",                              0x8717, {}],
            ["FacilityTypePropertyUpdate",                          0x8718, {}]
        ]
    }],
    ["Skill",                                    0x88, {
        subPackets: [
            ["Echo",                                        0x8801, {}],
            ["SelectSkillSet",                              0x8802, {}],
            ["SelectSkill",                                 0x8803, {}],
            ["GetSkillPointManager",                        0x8804, {}],
            ["SetLoyaltyPoints",                            0x8805, {}],
            ["LoadSkillDefinitionManager",                  0x8806, {}],
            ["SetSkillPointManager",                        0x8807, {}],
            ["SetSkillPointProgress",                       0x8808, {
                schema: {
                    fields: [
                        { name: "unknown1",                 type: "uint32" },
                        { name: "unknown2",                 type: "float" },
                        { name: "unknown3",                 type: "float" }
                    ]
                }
            }],
            ["AddSkill",                                    0x8809, {}],
            ["ReportSkillGrant",                            0x880A, {}],
            ["ReportOfflineEarnedSkillPoints",              0x880B, {}],
            ["ReportDeprecatedSkillLine",                   0x880C, {}]
        ]
    }],
    ["Loadout",                                  0x89, {
        subPackets: [
            ["LoadLoadoutDefinitionManager",                0x8901, {}],
            ["SelectLoadout",                               0x8902, {}],
            ["SetCurrentLoadout",                           0x8903, {
                schema: {
                    fields: [
                        { name: "type",                     type: "uint8" },
                        { name: "unknown1",                 type: "uint8" },
                        { name: "loadoutId",                type: "uint32" },
                        { name: "tabId",                    type: "uint32" },
                        { name: "unknown2",                 type: "uint32" }
                    ]
                }
            }],
            ["SelectSlot",                                  0x8904, {}],
            ["SelectClientSlot",                            0x8905, {}],
            ["SetCurrentSlot",                              0x8906, {}],
            ["ActivateLoadoutTerminal",                     0x8919, {}],
            ["ActivateVehicleLoadoutTerminal",              0x891A, {
                schema: {
                    fields: [
                        { name: "type",                     type: "uint8" },
                        { name: "guid",                 type: "uint64" },
                    ]
                }
            }],
            ["SetLoadouts",                                 0x891B, {}],
            ["AddLoadout",                                  0x891C, {}],
            ["UpdateCurrentLoadout",                        0x891D, {}],
            ["UpdateLoadoutSlot",                           0x891E, {}],
            ["SetVehicleLoadouts",                          0x891F, {}],
            ["AddVehicleLoadout",                           0x8920, {}],
            ["ClearCurrentVehicleLoadout",                  0x8921, {}],
            ["UpdateVehicleLoadoutSlot",                    0x8922, {}],
            ["SetSlotTintItem",                             0x8923, {}],
            ["UnsetSlotTintItem",                           0x8924, {}],
            ["SetBodyTintItem",                             0x8925, {}],
            ["UnsetBodyTintItem",                           0x8926, {}],
            ["SetGuildTintItem",                            0x8927, {}],
            ["UnsetGuildTintItem",                          0x8928, {}],
            ["SetDecalItem",                                0x8929, {}],
            ["UnsetDecalItem",                              0x892A, {}],
            ["SetCustomName",                               0x892B, {}],
            ["UnsetCustomName",                             0x892C, {}],
            ["UpdateLoadoutSlotItemLineConfig",             0x892D, {}]
            
        ]
    }],
    ["Experience",                               0x8A, {
        subPackets: [
            ["SetExperience",                                   0x8A01, {}],
            ["SetExperienceRanks",                              0x8A02, {}],
            ["SetExperienceRateTier",                           0x8A03, {}]
        ]
    }],
    ["Vehicle",                                  0x8B, {
        subPackets: [
            ["Owner",                                   0x8B01, {}],
            ["Occupy",                                  0x8B02, {}],
            ["StateData",                               0x8B03, {
                schema: {
                    fields: [
                        { name: "guid",                 type: "uint64" },
                        { name: "unknown3",                 type: "float" },
                        { name: "unknown4",                 type: "array", 
                            elementSchema: {
                                fields: [
                                    { name: "unknown1",                 type: "uint32" },
                                    { name: "unknown2",                 type: "uint8" },
                                ]
                            }
                        },
                        { name: "unknown5",                 type: "array",
                            elementSchema: {
                                fields: [
                                    { name: "unknown1",                 type: "uint32" },
                                    { name: "unknown2",                 type: "uint8" },
                                ]
                            }
                        }
                    ]
                }
            }],
            ["StateDamage",                            0x8B04, {}],
            ["PlayerManager",                          0x8B05, {}],
            ["Spawn",                                  0x8B06, {}],
            ["Tint",                                   0x8B07, {}],
            ["LoadVehicleTerminalDefinitionManager",   0x8B08, {}],
            ["ActiveWeapon",                           0x8B09, {}],
            ["Stats",                                  0x8B0A, {}],
            ["DamageInfo",                             0x8B0B, {}],
            ["StatUpdate",                             0x8B0C, {}],
            ["UpdateWeapon",                           0x8B0D, {}],
            ["RemovedFromQueue",                       0x8B0E, {}],
            ["UpdateQueuePosition",                    0x8B0F, {
                schema: {
                    fields: [
                        { name: "queuePosition",                type: "uint32" }
                    ]
                }
            }],
            ["PadDestroyNotify",                       0x8B10, {}],
            ["SetAutoDrive",                           0x8B11, {}],
            ["LockOnInfo",                             0x8B12, {}],
            ["LockOnState",                            0x8B13, {}],
            ["TrackingState",                          0x8B14, {}],
            ["CounterMeasureState",                    0x8B15, {}],
            ["LoadVehicleDefinitionManager",           0x8B16, {
                schema: {
                    fields: [
                        { name: "vehicleDefinitions",         type: "array",     elementSchema: {
                            fields: [
                                { name: "vehicleId",                 type: "uint32" },
                                { name: "modelId",                   type: "uint32" }
                            ]
                        }},
                    ]
                }
            }],
            ["AcquireState",                           0x8B17, {}],
            ["Dismiss",                                0x8B18, {}],
            ["AutoMount",                              0x8B19, {}],
            ["WeaponSlots",                            0x8B1A, {}],
            ["Deploy",                                 0x8B1B, {}],
            ["HeadLight",                              0x8B1C, {}],
            ["AccessType",                             0x8B1D, {}],
            ["KickPlayer",                             0x8B1E, {}],
            ["HealthUpdateOwner",                      0x8B1F, {}],
            ["OwnerPassengerList",                     0x8B20, {}],
            ["Kick",                                   0x8B21, {}],
            ["NoAccess",                               0x8B22, {}],
            ["Expiration",                             0x8B23, {}],
            ["Group",                                  0x8B24, {}],
            ["DeployResponse",                         0x8B25, {}],
            ["ExitPoints",                             0x8B26, {}],
            ["ControllerLogOut",                       0x8B27, {}],
            ["CurrentMoveMode",                        0x8B28, {}],
            ["ItemDefinitionRequest",                  0x8B29, {}],
            ["ItemDefinitionReply",                    0x8B2A, {}],
            ["AirToAirRadar",                          0x8B2B, {}]
        ]
    }],
    ["Grief",                                    0x8C, {}],
    ["SpotPlayer",                                   0x8D, {}],
    ["Faction",                                  0x8E, {}],
    ["Synchronization",                              0x8F, {
        schema: {
            fields: [
                { name: "unknown1",                       type: "uint32" },
                { name: "unknown2",                       type: "uint32" },
                { name: "unknown3",                       type: "uint32" },
                { name: "unknown4",                       type: "uint32" },
                { name: "gameTime1",                      type: "uint32" },
                { name: "unknown5",                       type: "uint32" },
                { name: "unknown6",                       type: "uint32" },
                { name: "unknown7",                       type: "uint32" },
                { name: "unknown8",                       type: "uint32" },
                { name: "unknown9",                       type: "uint32" },
                { name: "gameTime2",                      type: "uint32" },
                { name: "unknown10",                      type: "uint32" }
            ]
        }
    }],
    ["ResourceEvent",                            0x90, {
        subPackets: [
            ["ResourceEvent",                           0x9000, {
                schema: {
                    fields: [
                        { name: "gameTime",                       type: "uint32" },
                        { name: "unknown2",                       type: "uint8" },
                        { name: "guid",                       type: "uint64" },
                        { name: "unknown5",                       type: "uint32" },
                        { name: "unknown6",                       type: "uint32" },
                        { name: "unknown7",                       type: "uint32" },
                        { name: "unknown8",                       type: "uint32" },
                        { name: "unknown9",                       type: "uint32" },
                        { name: "unknown10",                       type: "uint32" },
                        { name: "unknown11",                       type: "uint32" },
                        { name: "unknown12",                       type: "uint32" },
                        { name: "unknown13",                       type: "uint32" },
                        { name: "unknown14",                       type: "uint32" },
                        { name: "unknown15",                       type: "uint32" },
                        { name: "unknown16",                       type: "uint32" },
                        { name: "unknown17",                       type: "uint32" },
                        { name: "unknown18",                       type: "uint32" },
                        { name: "unknown19",                       type: "uint32" },
                        { name: "unknown20",                       type: "uint32" },
                        { name: "unknown21",                       type: "uint8" },
                        { name: "unknown22",                       type: "uint8" },
                        { name: "unknown23",                       type: "uint8" }
                    ]
                }
            }],
            ["SetCharacterResources",                       0x9001, {}],
            ["SetCharacterResource",                        0x9002, {}],
            ["UpdateCharacterResource",                     0x9003, {}],
            ["RemoveCharacterResource",                     0x9004, {}]
        ]
    }],
    ["Collision",                                0x91, {
        subPackets: [
            ["Damage",                       0x9101, {}]
        ]
    }],
    ["Leaderboard",                              0x92, {}],
    ["PlayerUpdateManagedPosition",                  0x93, {}],
    ["PlayerUpdateNetworkObjectComponents",          0x94, {}],
    ["PlayerUpdateUpdateVehicleWeapon",              0x95, {}],
    ["ProfileStats",                             0x96, {
        subPackets: [
            ["GetPlayerProfileStats",                       0x960000, {
                schema: {
                    fields: [
                        { name: "characterId",         type: "uint64" }
                    ]
                }
            }],
            ["GetZonePlayerProfileStats",                   0x960100, {}],
            ["PlayerProfileStats",                          0x960200, {}],
            ["ZonePlayerProfileStats",                      0x960300, {}],
            ["UpdatePlayerLeaderboards",                    0x960400, {}],
            ["UpdatePlayerLeaderboardsReply",               0x960500, {}],
            ["GetLeaderboard",                              0x960600, {}],
            ["Leaderboard",                                 0x960700, {}],
            ["GetZoneCharacterStats",                       0x960800, {}],
            ["ZoneCharacterStats",                          0x960900, {}]
        ]
    }],
    ["Equipment",                                0x97, {
        subPackets: [
            ["SetCharacterEquipment",                       0x9701, {}],
            ["SetCharacterEquipmentSlot",                   0x9702, {}],
            ["UnsetCharacterEquipmentSlot",                 0x9703, {}],
            ["SetCharacterEquipmentSlots",                  0x9704, {
                schema: {
                    fields: [
                        { name: "profileId",         type: "uint32" },
                        { name: "characterId",         type: "uint64" },
                        { name: "gameTime",         type: "uint32" },
                        { name: "slots",         type: "array",     elementSchema: {
                            fields: [
                                { name: "index",                    type: "uint32" },
                                { name: "slotId",                   type: "uint32" },
                            ]
                        }},
                        { name: "unknown1",         type: "uint32" },
                        { name: "unknown2",         type: "uint32" },
                        { name: "unknown3",         type: "uint32" },
                        { name: "textures",         type: "array",     elementSchema: {
                            fields: [
                                { name: "index",                    type: "uint32" },
                                { name: "slotId",                   type: "uint32" },
                                { name: "itemId",                   type: "uint32" },
                                { name: "unknown1",                 type: "uint32" },
                                { name: "textureAlias",             type: "string" },
                                { name: "unknown2",             type: "string" }
                            ]
                        }},
                        { name: "models",         type: "array",     elementSchema: {
                            fields: [
                                { name: "modelName",             type: "string" },
                                { name: "unknown1",             type: "string" },
                                { name: "textureAlias",             type: "string" },
                                { name: "unknown3",             type: "string" },
                                { name: "unknown4",             type: "uint32" },
                                { name: "unknown5",             type: "uint32" },
                                { name: "slotId",             type: "uint32" }
                            ]
                        }}
                    ]
                }
            }]
        ]
    }],
    ["DefinitionFilter",                         0x98, {
        subPackets: [
            ["ListDefinitionVariables",                         0x9801, {}],
            ["SetDefinitionVariable",                           0x9802, {}],
            ["SetDefinitionIntSet",                             0x9803, {}],
            ["UnknownWithVariable1",                            0x9804, {}],
            ["UnknownWithVariable2",                            0x9805, {}]
        ]        
    }],
    ["ContinentBattleInfo",                          0x99, {
        schema: {
            fields: [
                { name: "zones",         type: "array",     elementSchema: {
                    fields: [
                        { name: "id",                       type: "uint32" },
                        { name: "nameId",                   type: "uint32" },
                        { name: "descriptionId",            type: "uint32" },
                        { name: "population",               type: "array", elementType: "uint8" },
                        { name: "regionPercent",            type: "array", elementType: "uint8" },
                        { name: "populationBuff",           type: "array", elementType: "uint8" },
                        { name: "populationTargetPercent",  type: "array", elementType: "uint8" },
                        { name: "name",                     type: "string" },
                        { name: "hexSize",                  type: "float" },
                        { name: "isProductionZone",         type: "uint8" }
                    ]
                }}
            ]
        }
    }],
    ["GetContinentBattleInfo",                       0x9A, {
        schema: {}
    }],
    ["GetRespawnLocations",                          0x9B, {
        schema: {}
    }],
    ["WallOfData",                               0x9C, {
        subPackets: [
            ["PlayerKeyboard",             0x9C03, {}],
            ["UIEvent",                    0x9C05, {
                schema: {
                    fields: [
                        { name: "object",         type: "string" },
                        { name: "function",         type: "string" },
                        { name: "argument",        type: "string" }
                    ]
                }
            }],
            ["ClientSystemInfo",           0x9C06, {}],
            ["VoiceChatEvent",             0x9C07, {}],
            ["NudgeEvent",                 0x9C09, {}],
            ["LaunchPadFingerprint",       0x9C0A, {}],
            ["VideoCapture",               0x9C0B, {}],
            ["ClientTransition",           0x9C0C, {
                schema: {
                    fields: [
                        { name: "oldState",         type: "uint32" },
                        { name: "newState",         type: "uint32" },
                        { name: "msElapsed",        type: "uint32" }
                    ]
                }
            }]
        ]
    }],
    ["ThrustPad",                                0x9D, {
        subPackets: [
            ["Data",                                    0x9D01, {}],
            ["Update",                                  0x9D02, {}],
            ["PlayerEntered",                           0x9D03, {}]
        ]
    }],
    ["Implant",                                  0x9E, {}],
    ["ClientInGamePurchase",                         0x9F, {}],
    ["Mission",                                  0xA0, {
        subPackets: [
            ["ListMissions",                            0xA001, {}],
            ["ConquerZone",                             0xA002, {}],
            ["SelectMission",                           0xA003, {}],
            ["UnselectMission",                         0xA004, {}],
            ["SetMissionInstanceManager",               0xA005, {}],
            ["SetMissionManager",                       0xA006, {}],
            ["AddGlobalAvailableMission",               0xA007, {}],
            ["RemoveGlobalAvailableMission",            0xA008, {}],
            ["AddAvailableMission",                     0xA009, {}],
            ["RemoveAvailableMission",                  0xA00A, {}],
            ["AddActiveMission",                        0xA00B, {}],
            ["RemoveActiveMission",                     0xA00C, {}],
            ["ReportCompletedMission",                  0xA00D, {}],
            ["AddAvailableMissions",                    0xA00E, {}],
            ["SetMissionChangeList",                    0xA00F, {}],
            ["SetConqueredZone",                        0xA010, {}],
            ["UnsetConqueredZone",                      0xA011, {}],
            ["SetConqueredZones",                       0xA012, {}]
        ]
    }],
    ["Effect",                                      0xA1, {
        subPackets: [
            ["AddEffect",                                       0xA101, {}],
            ["UpdateEffect",                                    0xA102, {}],
            ["RemoveEffect",                                    0xA103, {}],
            ["AddEffectTag",                                    0xA104, {}],
            ["RemoveEffectTag",                                 0xA105, {}],
            ["TargetBlockedEffect",                             0xA106, {}]
        ]
    }],
    ["RewardBuffs",                              0xA2, {
        subPackets: [
            ["RewardBuffs",                             0xA201, {}],
            ["WorldToZoneRewardBuffs",                  0xA202, {}],
            ["ReceivedBundlePacket",                    0xA203, {}],
            ["NonBundledItem",                          0xA204, {}],
            ["AddBonus",                                0xA205, {}],
            ["RemoveBonus",                             0xA206, {}],
            ["GiveRewardToPlayer",                      0xA207, {}],
            ["GiveLoyaltyReward",                       0xA208, {}]
        ]        
    }],
    ["Abilities",                                0xA3, {
        subPackets: [
            ["InitAbility",                             0xA301, {}],
            ["UpdateAbility",                           0xA302, {}],
            ["UninitAbility",                           0xA303, {}],
            ["SetAbilityActivationManager",             0xA304, {}],
            ["SetActivatableAbilityManager",            0xA305, {}],
            ["SetVehicleActivatableAbilityManager",     0xA306, {}],
            ["SetAbilityTimerManager",                  0xA307, {}],
            ["AddAbilityTimer",                         0xA308, {}],
            ["RemoveAbilityTimer",                      0xA309, {}],
            ["UpdateAbilityTimer",                      0xA30A, {}],
            ["SetAbilityLockTimer",                     0xA30B, {}],
            ["ActivateAbility",                         0xA30C, {}],
            ["VehicleActivateAbility",                  0xA30D, {}],
            ["DeactivateAbility",                       0xA30E, {}],
            ["VehicleDeactivateAbility",                0xA30F, {}],
            ["ActivateAbilityFailed",                   0xA310, {}],
            ["VehicleActivateAbilityFailed",            0xA311, {}],
            ["ClearAbilityLineManager",                 0xA312, {}],
            ["SetAbilityLineManager",                   0xA313, {}],
            ["SetProfileAbilityLineMembers",            0xA314, {}],
            ["SetProfileAbilityLineMember",             0xA315, {}],
            ["RemoveProfileAbilityLineMember",          0xA316, {}],
            ["SetVehicleAbilityLineMembers",            0xA317, {}],
            ["SetVehicleAbilityLineMember",             0xA318, {}],
            ["RemoveVehicleAbilityLineMember",          0xA319, {}],
            ["SetFacilityAbilityLineMembers",           0xA31A, {}],
            ["SetFacilityAbilityLineMember",            0xA31B, {}],
            ["RemoveFacilityAbilityLineMember",         0xA31C, {}],
            ["SetEmpireAbilityLineMembers",             0xA31D, {}],
            ["SetEmpireAbilityLineMember",              0xA31E, {}],
            ["RemoveEmpireAbilityLineMember",           0xA31F, {}],
            ["SetLoadoutAbilities",                     0xA320, {}],
            ["AddLoadoutAbility",                       0xA321, {}],
            ["RemoveLoadoutAbility",                    0xA322, {}],
            ["SetImplantAbilities",                     0xA323, {}],
            ["AddImplantAbility",                       0xA324, {}],
            ["RemoveImplantAbility",                    0xA325, {}],
            ["SetPersistentAbilities",                  0xA326, {}],
            ["AddPersistentAbility",                    0xA327, {}],
            ["RemovePersistentAbility",                 0xA328, {}]
        ]
    }],
    ["Deployable",                               0xA4, {
        subPackets: [
            ["Place",                                   0xA401, {}],
            ["Remove",                                  0xA402, {}],
            ["Pickup",                                  0xA403, {}],
            ["ActionResponse",                          0xA404, {}]
        ]
    }],
    ["Security",                                     0xA5, {}],
    ["MapRegion",                                0xA6, {
        subPackets: [
            ["GlobalData",                              0xA601, {
                schema: {
                    fields: [
                        { name: "unknown1",         type: "float" },
                        { name: "unknown2",         type: "float" }
                    ]
                }
            }],
            ["Data",                                    0xA602, {
                schema: {
                    fields: [
                        { name: "unknown1",         type: "float" },
                        { name: "unknown2",         type: "uint32" },
                        { name: "regions",          type: "array",
                            elementSchema: {
                                fields: [
                                    { name: "regionId",                     type: "uint32" },
                                    { name: "regionId2",                    type: "uint32" },
                                    { name: "nameId",                       type: "uint32" },
                                    { name: "facilityId",                   type: "uint32" },
                                    { name: "facilityType",                 type: "uint8" },
                                    { name: "currencyId",                   type: "uint8" },
                                    { name: "ownerFactionId",               type: "uint8" },
                                    { name: "hexes",                        type: "array",
                                        elementSchema: {
                                            fields: [
                                                { name: "x",                    type: "int32" },
                                                { name: "y",                    type: "int32" },
                                                { name: "type",                 type: "uint32" }
                                            ]
                                        }
                                    },
                                    { name: "flags",                        type: "uint8" },
                                    { name: "unknown4",                     type: "array", elementType: "uint8" },
                                    { name: "unknown5",                     type: "array", elementType: "uint8" },
                                    { name: "unknown6",                     type: "array", elementType: "uint8" },
                                    { name: "connectionFacilityId",         type: "uint32" }
                                ]
                            }
                        }
                    ]
                }
            }],
            ["ExternalData",                            0xA603, {}],
            ["Update",                                  0xA604, {}],
            ["UpdateAll",                               0xA605, {}],
            ["MapOutOfBounds",                          0xA606, {
                schema: {
                    fields: [
                        { name: "characterId",                  type: "uint64" },
                        { name: "unknown1",                     type: "uint8" },
                        { name: "unknown2",                     type: "uint32" }
                    ]
                }
            }],
            ["Population",                              0xA607, {}],
            ["RequestContinentData",                    0xA608, {}],
            ["InfoRequest",                             0xA609, {}],
            ["InfoReply",                               0xA60A, {}],
            ["ExternalFacilityData",                    0xA60B, {}],
            ["ExternalFacilityUpdate",                  0xA60C, {}],
            ["ExternalFacilityUpdateAll",               0xA60D, {}],
            ["ExternalFacilityEmpireScoreUpdate",       0xA60E, {}],
            ["NextTick",                                0xA60F, {}],
            ["HexActivityUpdate",                       0xA610, {}],
            ["ConquerFactionUpdate",                    0xA611, {}]
        ]
    }],
    ["Hud",                                      0xA7, {}],
    ["ClientPcData",                             0xA8, {
        subPackets: [
            ["SetSpeechPack",                               0xA801, {}],
            ["SpeechPackList",                              0xA803, {
                schema: {
                    fields: [
                        { name: "speechPacks",          type: "array",
                            elementSchema: {
                                fields: [
                                    { name: "speechPackId",                     type: "uint32" }
                                ]
                            }
                        }
                    ]
                }
            }]
        ]
    }],
    ["AcquireTimer",                             0xA9, {}],
    ["PlayerUpdateGuildTag",                         0xAA, {}],
    ["Warpgate",                                 0xAB, {
        subPackets: [
            ["ActivateTerminal",                        0xAB01, {}],
            ["ZoneRequest",                             0xAB02, {}],
            ["PostQueueNotify",                         0xAB03, {}],
            ["QueueForZone",                            0xAB04, {}],
            ["CancelQueue",                             0xAB05, {}],
            ["WarpToQueuedZone",                        0xAB06, {}],
            ["WarpToSocialZone",                        0xAB07, {}]
        ]
    }],
    ["LoginQueueStatus",                             0xAC, {}],
    ["ServerPopulationInfo",                         0xAD, {
        schema: {
            fields: [
                { name: "population",           type: "array", elementType: "uint16" },
                { name: "populationPercent",    type: "array", elementType: "uint8" },
                { name: "populationBuff",       type: "array", elementType: "uint8" }
            ]
        }
    }],
    ["GetServerPopulationInfo",                      0xAE, {
        schema: {}
    }],
    ["PlayerUpdateVehicleCollision",                 0xAF, {}],
    ["PlayerUpdateStop",                             0xB0, {
        schema: {
            fields: [
                { name: "unknown1",             type: "uint8" },
                { name: "unknown2",             type: "uint8" }
            ]
        }
    }],
    ["Currency",                                 0xB1, {
        subPackets: [
            ["SetCurrencyDiscount",                     0xB101, {
                schema: {
                    fields: [
                        { name: "currencyId",           type: "uint32" },
                        { name: "discount",             type: "float" }
                    ]
                }
            }],
            ["SetCurrencyRateTier",                     0xB102, {}],
            ["ListCurrencyDiscounts",                   0xB103, {}],
            ["RequestSetCurrencyDiscount",              0xB104, {}]
        ]
    }],
    ["Items",                                    0xB2, {
        subPackets: [
            ["LoadItemRentalDefinitionManager",         0xB201, {}],
            ["SetItemTimerManager",         0xB201, {}],
            ["SetItemLockTimer",         0xB201, {}],
            ["SetItemLineTimers",         0xB201, {}],
            ["SetItemTrialLockTimer",         0xB201, {}],
            ["SetItemLineTrialTimers",         0xB201, {}],
            ["AddItemLineTrialTimer",         0xB201, {}],
            ["RemoveItemLineTrialTimer",         0xB201, {}],
            ["ExpireItemLineTrialTimer",         0xB201, {}],
            ["UpdateItemLineTrialTimer",         0xB201, {}],
            ["SetItemLineRentalTimers",         0xB201, {}],
            ["AddItemLineRentalTimer",         0xB201, {}],
            ["RemoveItemLineRentalTimer",         0xB201, {}],
            ["ExpireItemLineRentalTimer",         0xB201, {}],
            ["SetImplantTimers",         0xB201, {}],
            ["AddImplantTimer",         0xB201, {}],
            ["RemoveImplantTimer",         0xB201, {}],
            ["UpdateImplantTimer",         0xB201, {}],
            ["ExpireImplantTimer",         0xB201, {}],
            ["RequestAddItemLineTimer",         0xB201, {}],
            ["RequestTrialItemLine",         0xB201, {}],
            ["RequestRentalItemLine",         0xB201, {}],
            ["ListItemRentalTerms",         0xB201, {}],
            ["ListItemLineTimers",         0xB201, {}],
            ["ExpireItemLineTrialTimers",         0xB201, {}],
            ["ExpireItemLineRentalTimers",         0xB201, {}],
            ["ExpireImplantTimers",         0xB201, {}],
            ["ClearItemLineTrialTimers",         0xB201, {}],
            ["ClearItemLineRentalTimers",         0xB201, {}],
            ["ClearImplantTimers",         0xB201, {}],
            ["LoadItemRentalDefinitionManager",         0xB201, {}],
        ]
    }],
    ["PlayerUpdateAttachObject",                     0xB3, {}],
    ["PlayerUpdateDetachObject",                     0xB4, {}],
    ["ClientSettings",                               0xB5, {
        schema: {
            fields: [
                { name: "helpUrl",         type: "string" },
                { name: "shopUrl",         type: "string" },
                { name: "shop2Url",        type: "string" }
            ]
        }
    }],
    ["RewardBuffInfo",                               0xB6, {
        schema: {
            fields: [
                { name: "unknown1",         type: "float" },
                { name: "unknown2",         type: "bytes",  length: 28 },
                { name: "unknown3",         type: "float" },
                { name: "unknown4",         type: "bytes",  length: 12 }
            ]
        }
    }],
    ["GetRewardBuffInfo",                            0xB7, {
        schema: {}
    }],
    ["Cais",                                     0xB8, {}],
    ["ZoneSetting",                              0xB9, {
        subPackets: [
            ["Data",                      0xB901, {
                schema: {
                    fields: [
                        { name: "settings",     type: "array",  elementSchema: {
                            fields: [
                                { name: "hash",         type: "uint32" },
                                { name: "unknown1",     type: "uint32" },
                                { name: "unknown2",     type: "uint32" },
                                { name: "unknown3",     type: "uint32" },
                                { name: "unknown4",     type: "uint32" }
                            ]
                        }}
                    ]
                }
            }]
        ]
    }],
    ["RequestPromoEligibilityUpdate",                0xBA, {}],
    ["PromoEligibilityReply",                        0xBB, {}],
    ["MetaGameEvent",                            0xBC, {
        subPackets: [
            ["EventStartWarning",                       0xBC01, {}],
            ["EventStart",                              0xBC02, {}],
            ["EventUpdate",                             0xBC03, {}],
            ["EventCompleteDominating",                 0xBC04, {}],
            ["EventCompleteStandard",                   0xBC05, {}],
            ["EventCompleteCancel",                     0xBC06, {}],
            ["EventExperienceBonusUpdate",              0xBC07, {}],
            ["EventClearExperienceBonus",               0xBC08, {}]
        ]
    }],
    ["RequestWalletTopupUpdate",                     0xBD, {}],
    ["RequestStationCashActivePromoUpdate",          0xBE, {}],
    ["CharacterSlot",                            0xBF, {}],
    ["Operation",                                0xC0, {
        subPackets: [
            ["RequestCreate",                           0xC001, {}],
            ["RequestDestroy",                          0xC002, {}],
            ["RequestJoin",                             0xC003, {}],
            ["RequestJoinByName",                       0xC004, {}],
            ["RequestLeave",                            0xC005, {}],
            ["ClientJoined",                            0xC006, {}],
            ["ClientLeft",                              0xC007, {}],
            ["BecomeListener",                          0xC008, {}],
            ["AvailableData",                           0xC009, {}],
            ["Created",                                 0xC00A, {}],
            ["Destroyed",                               0xC00B, {}],
            ["ClientClearMissions",                     0xC00C, {
                schema: {}
            }],
            ["InstanceAreaUpdate",                      0xC00D, {}],
            ["ClientInArea",                            0xC00E, {}],
            ["InstanceLocationUpdate",                  0xC00F, {}],
            ["GroupOperationListRequest",               0xC010, {}],
            ["GroupOperationListReply",                 0xC011, {}],
            ["GroupOperationSelect",                    0xC012, {}],
            ["InstanceLockUpdate",                      0xC013, {}]
        ]
    }],
    ["WordFilter",                               0xC1, {
        subPackets: [
            ["Data",                                        0xC101, {
                schema: {
                    fields: [
                        { name: "wordFilterData",     type: "byteswithlength" }
                    ]
                }
            }],
        ]        
    }],
    ["StaticFacilityInfo",                       0xC2, {
        subPackets: [
            ["InfoRequest",                          0xC201, {}],
            ["InfoReply",                            0xC202, {}],
            ["InfoAllZones",                         0xC203, {
                schema: {
                    fields: [
                        { name: "facilities",     type: "array",  elementSchema: {
                            fields: [
                                { name: "zoneId",           type: "uint32" },
                                { name: "facilityId",       type: "uint32" },
                                { name: "nameId",           type: "uint32" },
                                { name: "facilityType",     type: "uint8" },
                                { name: "locationX",        type: "float" },
                                { name: "locationY",        type: "float" },
                                { name: "locationZ",        type: "float" }
                            ]
                        }}
                    ]
                }
            }],
            ["InfoReplyWarpgate",                    0xC204, {}],
            ["InfoAllWarpgateRespawns",              0xC205, {}],
        ]
    }],
    ["ProxiedPlayer",                            0xC3, {}],
    ["Resist",                                   0xC4, {}],
    ["InGamePurchasing",                         0xC5, {}],
    ["BusinessEnvironments",                         0xC6, {}],
    ["EmpireScore",                              0xC7, {}],
    ["CharacterSelectSessionRequest",                0xC8, {}],
    ["CharacterSelectSessionResponse",               0xC9, {}],
    ["Stats",                                    0xCA, {}],
    ["DeathReport",                                  0xCB, {}],
    ["Crafting",                                 0xCC, {}],
    ["ExperienceScheduledEvent",                 0xCD, {}],
    ["NudgeNotification",                            0xCE, {}],
    ["Resource",                                 0xCF, {}]
];


var packetTypes = {},
    packetDescriptors = {};

PacketTable.build(packets, packetTypes, packetDescriptors);

exports.PacketTypes = packetTypes;
exports.Packets = packetDescriptors;