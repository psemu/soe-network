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
        me.emit("data", null, client, packet);
    });
}
util.inherits(ZoneServer, EventEmitter);

ZoneServer.prototype.start = function(callback) {
    log.info("[ZoneServer]", "Starting server");
    this._gatewayServer.start();
};

ZoneServer.prototype.sendData = function(client, packetName, obj) {
    this._gatewayServer.sendTunnelData(
        client, 
        this._protocol.pack(packetName, obj)
    );
};


ZoneServer.prototype.sendRawData = function(client, data) {
    this._gatewayServer.sendTunnelData(client, data);
};

ZoneServer.prototype.stop = function() {
    log.info("[ZoneServer]", "Shutting down");
};

exports.ZoneServer = ZoneServer;