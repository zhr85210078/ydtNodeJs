var morgan = require('morgan');
var log4js = require('log4js');

log4js.configure({
  appenders: {
    cheeseLogs: { type: 'dateFile',category: "log", filename: 'logs/ydt',pattern: "-yyyy-MM-dd.log",alwaysIncludePattern: true },
    console: { type: 'console' }
  },
  categories: {
    default: { appenders: ['console', 'cheeseLogs'], level: 'info' }
  }
});

exports.morgan= morgan('dev');

exports.log4js= log4js.connectLogger(log4js.getLogger('default'), {
        level: log4js.levels.INFO,
        format: ':method :url :status'
    });