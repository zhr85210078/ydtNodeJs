'use strict';

var joi = require('joi');
var Boom = require('boom');

var getUsers = {
    method: 'GET',
    path: '/User/getUsers',
    config: {
        description: '获取用户列表',
        notes: '获取用户列表api',
        tags: ['api'],
        validate: {
            query: {
                keyword: joi.string().description('关键词'),
                order: joi.string().default('-created_at').description('排序'),
                page: joi.number().integer().default(1).description('页数'),
                pagesize: joi.number().integer().default(10).description('显示数量')
            }
        }
    },
    handler: function (request, reply) {
        var db = request.mongo.db;
        db.collection('users').find({}).toArray(function(err,result){
            if(err){
                return reply(Boom.internal('Internal MongoDB error', err));
            }
            reply(result);
        });
    }
};

var createUser={
    method:'PUT',
    path:'/User/createUser',
    config:{
        description:'创建用户',
        notes:'创建用户api',
        tags:['api'],
        validate:{
            query:{
                uid:joi.number().integer().description('用户id'),
                username:joi.string().description('用户名'),
                password:joi.string().description('密码'),
                nickname:joi.string().description('别名')
            }
        }
    },
    handler:function(request,reply){
        var db=request.mongo.db;
        var users={
            uid:request.query.uid,
            username:request.query.username,
            password:request.query.password,
            nickname:request.query.nickname
        };

        db.collection('users').insert(users,function(err,result){
            if(err){
                return reply(Boom.internal('Internal MongoDB error', err));
            }
            reply(result);
        });
    }
};

var updateUser={
    method:'POST',
    path:'/User/updateUser',
    config:{
        description:'修改用户信息',
        notes:'修改用户信息api',
        tags:['api'],
        validate:{
            query:{
                uid:joi.number().integer().description('用户id'),
                username:joi.string().description('用户名'),
                password:joi.string().description('密码'),
                nickname:joi.string().description('别名'),
                id:joi.string().description('主键id')
            }
        }
    },
    handler:function(request,reply){
        var db=request.mongo.db;
        var users={
            uid:request.query.uid,
            username:request.query.username,
            password:request.query.password,
            nickname:request.query.nickname
        };
        var ObjectID = request.mongo.ObjectID;
        var _id=new ObjectID(request.query.id);

        db.collection('users').update({  _id: _id },{$set:users},function(err,result){
            if(err){
                return reply(Boom.internal('Internal MongoDB error', err));
            }
            reply(result);
        });
    }
};

var deleteUser={
    method:'DELETE',
    path:'/User/deleteUser',
    config:{
        description:'删除用户信息',
        notes:'删除用户信息api',
        tags:['api'],
        validate:{
            query:{
                id:joi.string().description('主键id')
            }
        }
    },
    handler:function(request,reply){
        var db=request.mongo.db;
        var ObjectID = request.mongo.ObjectID;
        var _id=new ObjectID(request.query.id);
        db.collection('users').remove({_id:_id},function(err,result){
            if(err){
                return reply(Boom.internal('Internal MongoDB error', err));
            }
            reply(result);
        });
    }
};

module.exports = [getUsers,createUser,updateUser,deleteUser];