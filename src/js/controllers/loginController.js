'use strict';

app.controller('LoginCtrl', ['$scope',
    function ($scope) {
        $scope.title = "This is login";
        $scope.login = 1;
        $scope.register = 0;
        $scope.forgot = 0;

        $scope._toggled = function (a, b, c) {
            $scope.login = a;
            $scope.register = b;
            $scope.forgot = c;
        }

    }
]);