'use strict';

var winston = require('winston');
var RotateFile = require('winston-daily-rotate-file');
var moment = require('moment');

winston.setLevels({
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
});

winston.addColors({
    debug: 'blue',
    info: 'cyan',
    warn: 'yellow',
    error: 'red',
});

var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            level: 'debug',
            prettyPrint: true,
            colorize: true,
            silent: false,
            timestamp: () => moment(new Date()).format('YYYY-MM-DD hh:mm:ss'),
        }),
        new (RotateFile)({
            level: 'info',
            prettyPrint: true,
            silent: false,
            colorize: false,
            filename: 'logs/ydt',
            timestamp: () => moment(new Date()).format('YYYY-MM-DD hh:mm:ss'),
            json: false,
            maxFiles: 10,
            datePattern: '-yyyy-MM-dd.log',
        }),
    ],
});

module.exports=logger;