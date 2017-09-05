'use strict';

var server = require('./server.js');//hapi服务
var route = require('./routes.js');//hapi所有路由
var plugins = require('./config/plugin_config');//hapi插件配置

server.register(plugins, (err) => {
    server.start((err) => {//项目启动
        if (err) {
            console.log(err);
        }
        else {
            console.log('Server running at:', server.info.uri);
        }
    });


});

route.forEach(function (api) {
    server.route(api);//加载所有路由
});