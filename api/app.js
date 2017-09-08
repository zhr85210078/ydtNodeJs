'use strict';

var server = require('./server.js');//hapi服务
var route = require('./routes.js');//hapi所有路由
var plugins = require('./config/plugin_config');//hapi插件配置
var logger  = require('./config/logger.js');//日志配置

server.register(plugins, (err) => {
    if (err) {
        server.log(['error'], err);             // log an 'error' message
    }
    server.start((err) => {//项目启动
        if (err) {
            logger.error(err);
        }
        else {
            logger.info('Server running at:', server.info.uri);
        }
    });

    server.on('response', (request, event, tags) => {
        logger.info(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.url.path + ' --> ' + request.response.statusCode);
    });

});

route.forEach(function (api) {
    server.route(api);//加载所有路由
});