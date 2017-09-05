'use strict';

const fs = require('fs');
const path = require('path');
const Hapi = require('hapi');
const joi = require('joi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const HapiError = require('hapi-error');
const Handlebars = require('handlebars');

const HapiAsyncHandler = require('hapi-async-handler');
const Promise = require('bluebird');
const readFile = Promise.promisify(fs.readFile);
const Pack = require('./package');

const server = new Hapi.Server();
server.connection({
        host: 'localhost',
        port: 3333
    });

const options = {
    info: {
            'title': 'ydtnodejs API Documentation',
            'version': Pack.version,
        }
    };

const handler = function (request, reply) {
    return reply({ status: 'ok' });
};

const config = {
    statusCodes: {
      401: { message: 'Please Login to view that page' },
      400: { message: 'Sorry, we do not have that page.' },
      404: { message: 'Sorry, that page is not available.' }
    }
};

server.register([
    Inert,
    Vision,
    //HapiError,
    HapiAsyncHandler,
    {
        'register': HapiSwagger,
        'options': options
    }], (err) => {
        server.start( (err) => {
           if (err) {
                console.log(err);
            } else {
                console.log('Server running at:', server.info.uri);
            }
        });

        // server.views({
        //     engines: {
        //         html: Handlebars
        //     },
        //     //path: Path.resolve(__dirname, '/your/view/directory')
        // });
    });

//server.route(Routes);

// server.route({
//     method: 'GET',
//     path: '/',
//     handler: function (request, reply) {
//         reply('Hello, world!');
//     }
// });

server.route({
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
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.username) + '!');
    }
});

server.route({
    method: 'GET',
    path: '/booklist',
    config: {
        description: '获取图书列表', 
        notes: '图书列表api',
        tags: ['api'],
        validate: {
            query: {
                // offset: joi.number().integer().min(0).default(0).description('query offset'),
                // limit: joi.number().integer().default(10).description('query limit'),
                keyword:joi.string().description('关键词'),
                order: joi.string().default('-created_at').description('排序'),
                page:joi.number().integer().default(1).description('页数'),
                pagesize:joi.number().integer().default(10).description('显示数量')
            }
            //payload,path params
        }
        //response: {schema: responseModel},//responseModel 是joi.object()构造出来的
    },
    handler:handler
    // handler: {
    //     async: async function (req, reply) {
    //         const text = await readFile(path.join(__dirname, './test.txt'), 'utf-8');
    //         reply(text);
    //     }
    // }
});

// const preResponse = function (request, reply) {   
//     const response = request.response;
//     if (!response.isBoom) {
//         return reply.continue();
//     }
    
//     // Replace error with friendly HTML
//     const error = response;
//     const ctx = {
//         message: (error.output.statusCode === 404 ? 'page not found' : 'something went wrong')
//     };
    
//     return reply.view('error.html', ctx).code(error.output.statusCode);
// };
    
// server.ext('onPreResponse', preResponse);