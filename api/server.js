'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 3333,
    labels: ['api']
});

module.exports = server;