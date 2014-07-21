var EventEmitter = require("events").EventEmitter,
    GatewayServer = require("./gatewayserver").GatewayServer,
    fs = require("fs"),
    path = require("path"),
    util = require("util"),
    Jenkins = require("jenkins-hash"),
    ZoneProtocol = require("./zoneprotocol").ZoneProtocol,
    debug = require("debug")("ZoneServer");


function ZoneServer(serverPort, gatewayKey) {
    EventEmitter.call(this);
   
    var gatewayServer = this._gatewayServer = new GatewayServer("ExternalGatewayApi_3", serverPort, gatewayKey);
    var protocol = this._protocol = new ZoneProtocol();
    var me = this;
    var clients = this._clients = {};
    var characters = this._characters = {};

    gatewayServer.on("login", function(err, client, characterId) {
        debug("Client logged in from " + client.address + ":" + client.port + " with character id " + characterId);
        
        clients[client.sessionId] = client;
        client.character = {
            characterId: characterId,
            state: {
                position: [0,0,0,0],
                rotation: [0,0,0,0],
                health: 0,
                shield: 0
            },
            client: client
        };
        characters[characterId] = client.character;

        me.emit("login", err, client);
    });

    gatewayServer.on("disconnect", function(err, client) {
        debug("Client disconnected from " + client.address + ":" + client.port);
        delete clients[client.sessionId];
        me.emit("disconnect", err, client);
    });

    gatewayServer.on("session", function(err, client) {
        debug("Session started for client " + client.address + ":" + client.port);
    });

    var tunnelDataCount = 0;
   
    gatewayServer.on("tunneldata", function(err, client, data, flags) {
        var packet = protocol.parse(data, flags, true, me._referenceData);
        if (me._dumpData) {
            fs.writeFileSync(path.join(me._dumpDataPath, "tunneldata_" + (tunnelDataCount++) + "_" + (packet ? packet.name : "Unknown") + ".dat"), data);
        }
        if (packet) {
            me.emit("data", null, client, packet);
        }
    });
}
util.inherits(ZoneServer, EventEmitter);

ZoneServer.prototype.start = function(callback) {
    debug("Starting server");
    this._gatewayServer.start();
};

ZoneServer.prototype.setReferenceData = function(referenceData) {
    this._referenceData = referenceData;
};

ZoneServer.prototype.sendData = function(client, packetName, obj) {
    this._gatewayServer.sendTunnelData(
        client, 
        this._protocol.pack(packetName, obj, this._referenceData)
    );
};

ZoneServer.prototype.toggleDataDump = function(value, path) {
    this._dumpData = !!value;
    this._dumpDataPath = path || "./";
};


ZoneServer.prototype.sendRawData = function(client, data) {
    this._gatewayServer.sendTunnelData(client, data);
};

ZoneServer.prototype.stop = function() {
    debug("Shutting down");
};

exports.ZoneServer = ZoneServer;