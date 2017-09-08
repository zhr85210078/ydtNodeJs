'use strict';

var Pack = require('../package.json');
var logger  = require('./logger.js');//日志配置

var SwaggerOptions = {//swagger文档配置
    info: {
        'title': 'ydtnodejs API Documentation',
        'version': Pack.version
    }
};

var dbOptions = {//mongodb配置
    url: 'mongodb://localhost:29031/ydtDB',
    settings: {
        poolSize: 10
    },
    decorate: true
};

module.exports = [
    {
        register: require('inert')
    },
    {
        'register': require('hapi-swagger'),
        'options': SwaggerOptions
    },
    {
        register: require('vision')
    },
    {
        'register': require('hapi-mongodb'),
        'options': dbOptions
    },
    {
        'register': require('hapi-winston'),
        'options': { logger }
    }
];
