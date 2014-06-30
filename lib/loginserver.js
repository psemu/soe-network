var EventEmitter = require("events").EventEmitter,
    SOEServer = require("./soeserver").SOEServer,
    fs = require("fs"),
    util = require("util"),
    LoginProtocol = require("./loginprotocol").LoginProtocol,
    LoginOpCodes = require("./loginprotocol").LoginOpCodes,
    log = require("loglevel");

function LoginError(message) {
    this.name = this.constructor.name;
    this.message = message;
}
util.inherits(LoginError, Error);

function LoginServer(gameId, environment, serverPort, loginKey, backend) {
    EventEmitter.call(this);

   
    this._compression = 0x0100;
    this._crcSeed = 0;
    this._crcLength = 2;
    this._udpLength = 512;

    this._gameId = gameId;
    this._environment = environment;
    
    var soeServer = this._soeServer = new SOEServer("LoginUdp_9", serverPort, loginKey);
    var protocol = this._protocol = new LoginProtocol();
    var me = this;


    soeServer.on("connect", function(err, client) {
        log.info("[LoginServer]", "Client connected from " + client.address + ":" + client.port);
        me.emit("connect", err, client);
    });

    soeServer.on("disconnect", function(err, client) {
        log.info("[LoginServer]", "Client disconnected from " + client.address + ":" + client.port);
        me.emit("disconnect", err, client);
    });

    soeServer.on("session", function(err, client) {
        log.info("[LoginServer]", "Session started for client " + client.address + ":" + client.port);
    });
   
    soeServer.on("appdata", function(err, client, data) {
        var packet = protocol.parse(data),
            result = packet.result;
        switch (packet.name) {
            case "LoginRequest":
                backend.login(result.sessionId, result.fingerprint, function(err, result) {
                    if (err) {
                        me.emit("login", new LoginError("Login failed"));
                    } else {
                        var data = protocol.pack("LoginReply", result);
                        soeServer.sendAppData(client, data, true);
                    }
                })
                break;
            case "ServerListRequest":
                backend.getServerList(function(err, result) {
                    if (err) {
                        me.emit("serverlistrequest", new LoginError("Server list request failed"));
                    } else {
                        var data = protocol.pack("ServerListReply", result);
                        soeServer.sendAppData(client, data, true);
                    }
                });
                break;
            case "CharacterSelectInfoRequest":
                backend.getCharacterInfo(function(err, result) {
                    if (err) {
                        me.emit("characterselectinforequest", new LoginError("Character select info request failed"));
                    } else {
                        var data = protocol.pack("CharacterSelectInfoReply", result);
                        soeServer.sendAppData(client, data, true, true);
                    }
                });
                break;
            case "CharacterLoginRequest":
                backend.characterLogin(null, null, null, function(err, result) {
                    if (err) {
                        me.emit("characterloginrequest", new LoginError("Character login request failed"));
                    } else {
                        result = JSON.parse(fs.readFileSync("data/characterloginreply.json"));
                        var data = protocol.pack("CharacterLoginReply", result);
                        soeServer.sendAppData(client, data, true);
                    }
                });
                break;
        }
    });
}
util.inherits(LoginServer, EventEmitter);

LoginServer.prototype.start = function(callback) {
    log.info("[LoginServer]", "Starting server");
    this._soeServer.start(
        this._compression, 
        this._crcSeed, 
        this._crcLength, 
        this._udpLength
    );
};

LoginServer.prototype.stop = function() {
    log.info("[LoginServer]", "Shutting down");
};

exports.LoginServer = LoginServer;