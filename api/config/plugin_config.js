'use strict';

var Pack = require('../package.json');
var logger = require('./logger.js');//日志配置

var SwaggeredOptions = {//swaggered文档配置
    tags: {
        'foobar/test': 'Example foobar description'
    },
    info: {
        title: 'YDT API',
        description: 'Powered by node, hapi, joi, hapi-swaggered, hapi-swaggered-ui and swagger-ui',
        version: Pack.version
    }
};

var SwaggerUIOptions = {//swaggerUI文档配置
    title: 'YDT',
    path: '/docs',
    authorization:false,
    // authorization: {
    //     field: 'apiKey',
    //     scope: 'query', // header works as well
    //     // valuePrefix: 'bearer '// prefix incase
    //     defaultValue: 'demoKey',
    //     placeholder: 'Enter your apiKey here'
    // },
    swaggerOptions: {
        validatorUrl: null
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
        register: require('vision')
    },
    {
        'register': require('hapi-swaggered'),
        'options': SwaggeredOptions
    },
    {
        'register': require('hapi-swaggered-ui'),
        'options': SwaggerUIOptions
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
