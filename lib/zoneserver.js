var EventEmitter = require("events").EventEmitter,
    GatewayServer = require("./gatewayserver").GatewayServer,
    fs = require("fs"),
    util = require("util"),
    Jenkins = require("jenkins-hash"),
    ZoneProtocol = require("./zoneprotocol").ZoneProtocol,
    log = require("loglevel");


function ZoneServer(serverPort, gatewayKey) {
    EventEmitter.call(this);
   
    var gatewayServer = this._gatewayServer = new GatewayServer("ExternalGatewayApi_3", serverPort, gatewayKey);
    var protocol = this._protocol = new ZoneProtocol();
    var me = this;

    gatewayServer.on("login", function(err, client) {
        log.info("[ZoneServer]", "Client logged in from " + client.address + ":" + client.port);

        gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/ReferenceDataWeaponDefinitions.dat"));
        gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/InitializationParameters.dat"));
        gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/SendZoneDetails.dat"));
        gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/ClientUpdateZonePopulation.dat"));
        gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/ClientUpdateRespawnLocations.dat"));
        gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/ClientGameSettings.dat"));
        gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/VehicleBaseLoadVehicleDefinitionManager.dat"));
        gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/SendSelfToClient.dat"));

        me.emit("login", err, client);
    });

    gatewayServer.on("disconnect", function(err, client) {
        log.info("[ZoneServer]", "Client disconnected from " + client.address + ":" + client.port);
        me.emit("disconnect", err, client);
    });

    gatewayServer.on("session", function(err, client) {
        log.info("[ZoneServer]", "Session started for client " + client.address + ":" + client.port);
    });
   
    gatewayServer.on("tunneldata", function(err, client, data, flags) {
        var packet = protocol.parse(data, flags, true),
            result = packet.result;
        switch (packet.name) {
            case "ClientIsReady":
                gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/QuickChatSendData.dat"));
                gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/ClientUpdateDoneSendingPreloadCharacters.dat"));
                gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/ClientUpdateUpdateStat.dat"));
                gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/ActivityManagerProfileList.dat"));
                gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/OperationClientClearMissions.dat"));
                gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/ZoneSettingData.dat"));
                gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/CommandEnableCompositeEffects.dat"));
                gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/ReferenceDataItemClassDefinitions.dat"));
                gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/ReferenceDataItemCategoryDefinitions.dat"));
                gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/ReferenceDataClientProfileData.dat"));
                gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/ReferenceDataProjectileDefinitions.dat"));
                gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/FacilityReferenceData.dat"));
                gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/ItemsLoadItemRentalDefinitionManager.dat"));
                gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/AbilityAddAbilityDefinition.dat"));
                gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/AbilitiesSetAbilityActivationManager.dat"));
                gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/LoadoutSelectSlot.dat"));
                gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/PointOfInterestDefinitionReply.dat"));
                gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/ZoneDoneSendingInitialData.dat"));

                gatewayServer.sendTunnelData(client, protocol.pack(
                    "Command.AddWorldCommand", {
                        command: "hax"
                    }
                ));

                var npcs = JSON.parse(fs.readFileSync("data/zone/npcs.json"));

                for (var a in npcs) {
                    if (npcs.hasOwnProperty(a)) {
                        console.log("SENDING NPC: " + a);
                        gatewayServer.sendTunnelData(client, protocol.pack(
                            "PlayerUpdate.AddLightweightNpc", npcs[a]
                        ));
                    }
                }


                break;
            case "GetRewardBuffInfo":
                gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/RewardBuffInfo.dat"));
                break;
            case "GetContinentBattleInfo":
                gatewayServer.sendTunnelData(client, fs.readFileSync("data/zone/ContinentBattleInfo.dat"));
                break;
            case "Command.ExecuteCommand":
                if (result.commandHash == Jenkins.ooat("HAX")) {

                }
                break;
        }
    });
}
util.inherits(ZoneServer, EventEmitter);

ZoneServer.prototype.start = function(callback) {
    log.info("[ZoneServer]", "Starting server");
    this._gatewayServer.start();
};

ZoneServer.prototype.stop = function() {
    log.info("[ZoneServer]", "Shutting down");
};

exports.ZoneServer = ZoneServer;