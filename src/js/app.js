'use strict';

var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: '/src/views/index_welcome.html',
            controller: 'WelcomeCtrl'
        })
        .state('example', {
            url: '/example',
            templateUrl: '/src/views/index_example.html',
            controller: 'ExampleCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: '/src/views/login.html',
            controller: 'LoginCtrl'
        })

}]);