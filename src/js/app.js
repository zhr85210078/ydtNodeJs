'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {templateUrl: '/views/welcome.html', controller: 'WelcomeCtrl'})
        .when('/example', {templateUrl: '/views/example.html', controller: 'ExampleCtrl'})
        .when('/login', {templateUrl: '/views/login.html', controller: 'LoginCtrl'})
        .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
}]);