var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var package = require("./package.json");
var log=require('./config/logConfig');
var index = require('./routes/index');
var login = require('./routes/login');

var app = express();
app.locals.appname = package.name;//项目名称
app.locals.version = package.version;//项目版本号

nunjucks.configure(path.join(__dirname, 'src/views'), {
    autoescape: true,
    express: app,
    watch: true
});

app.use(favicon(path.join(__dirname, 'src/img', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(log.morgan);
app.use(log.log4js);
app.use("/src",express.static(path.join(__dirname, 'src')));

app.use('/login', login);
app.use('/', index);

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
});

module.exports = app;