var express = require('express');
var http = require('http');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var package = require("./package.json");
var portConfig=require('./lib/config/portConfig');
var log=require('./lib/config/logConfig');
var routes = require('./lib/routes/routes');
var config = require('./config.js');


var app = express();
var server = http.createServer(app);
app.locals.appname = package.name;//项目名称
app.locals.version = package.version;//项目版本号

var port =portConfig.normalizePort(process.env.PORT || config.server.listenPort);
app.set('port', port);

require('./lib/config/tmplConfig').tmplConfig(app, config.server.tmplUrl);//nunjucks模板

app.use(favicon(config.server.faviconUrl));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(config.server.cookieSecret));
app.use(log.morgan);
app.use(log.log4js);
app.use('/src', express.static(config.server.staticUrl));
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
  res.render('error.html');

  next(err);
});

server.listen(port);