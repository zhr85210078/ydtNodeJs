'use strict';

// var app = angular.module('app', ['ngRoute']);

// app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
//     $routeProvider
//         .when('/', {templateUrl: '/src/views/index_welcome.html', controller: 'WelcomeCtrl'})
//         .when('/example', {templateUrl: '/src/views/index_example.html', controller: 'ExampleCtrl'})
//         .when('/login', {templateUrl: '/src/views/account_login.html', controller: 'LoginCtrl'})
//         .otherwise({redirectTo: '/'});
//     $locationProvider.html5Mode(true);
// }]);

var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,   $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index',{
            url:'/',
            templateUrl:'/src/views/index_welcome.html',
            controller:'WelcomeCtrl'
        })
        .state('example',{
            url:'/example',
            templateUrl:'/src/views/index_example.html',
            controller:'ExampleCtrl'
        })
        .state('login',{
            url:'/login',
            templateUrl:'/src/views/account_login.html',
            controller:'LoginCtrl'
        })

}]);

// angular.module('app', [
//     'ngAnimate',
//     'ngCookies',
//     'ngResource',
//     'ngSanitize',
//     'ngTouch',
//     'ngStorage',
//     'ui.router',
//     'ui.bootstrap',
//     'ui.load',
//     'ui.jq',
//     'ui.validate',
//     'oc.lazyLoad',
//     //'pascalprecht.translate'
// ]);