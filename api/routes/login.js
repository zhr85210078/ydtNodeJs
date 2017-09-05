'use strict';

var joi = require('joi');

var tologin={
    method: 'POST',
    path: '/tologin',
    config: {
        description: '登录', 
        notes: '登录api',
        tags: ['api'],
        validate: {
            query: {
                username:joi.string().required().description('用户名'),
                password:joi.number().integer().required().description('密码')
            }
            //payload,path params
        }
        //response: {schema: responseModel},//responseModel 是joi.object()构造出来的
    },
    handler: function(request, reply){
        reply('Hello,tologin');
    }
};

module.exports=[tologin];