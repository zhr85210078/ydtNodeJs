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
            payload: {
                username:joi.string().required().description('用户名'),
                password:joi.string().required().description('密码')
            }
          }
    },
    handler: function(request, reply){
        var userInfo=request.payload.userInfo;
        reply('Hello,'+request.payload.username);
    }
};

module.exports=[tologin];