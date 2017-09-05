'use strict';

var Pack = require('../package.json');

var SwaggerOptions = {
    info: {
        'title': 'ydtnodejs API Documentation',
        'version': Pack.version
    }
};

module.exports = [
    {
        register:require('inert')
    },
    {
        'register': require('hapi-swagger'),
        'options': SwaggerOptions
    },
    {
        register:require('vision')
    }
];
