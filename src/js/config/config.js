'use strict';

app.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', '$mdIconProvider','$interpolateProvider', function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider,$interpolateProvider) {
    //$urlRouterProvider.when('index', '/src/views/index.html');
    $urlRouterProvider.otherwise('');

    $stateProvider
        .state('index', {
            url: '',
            templateUrl: '/src/views/index.html',
            controller: 'UserController'
        })
        .state('login', {
            url: '/login',
            templateUrl: '/src/views/login.html',
            controller: 'LoginCtrl'
        })
        .state('error', {
            url: '/error',
            templateUrl: 'error.html'
        });

    $mdIconProvider
        .defaultIconSet("src/img/svg/avatars.svg", 128)
        .icon("menu", "src/img/svg/menu.svg", 24)
        .icon("share", "src/img/svg/share.svg", 24)
        .icon("google_plus", "src/img/svg/google_plus.svg", 512)
        .icon("hangouts", "src/img/svg/hangouts.svg", 512)
        .icon("twitter", "src/img/svg/twitter.svg", 512)
        .icon("phone", "src/img/svg/phone.svg", 512);

    $mdThemingProvider.theme('default')
        .primaryPalette('cyan',{'default': '500'})
        .accentPalette('red');

    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');

}]);