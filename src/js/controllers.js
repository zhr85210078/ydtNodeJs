'use strict';

app.controller('WelcomeCtrl',['$scope',
    function($scope){
        $scope.username = 'ydt';
    }
]);

app.controller('ExampleCtrl',['$scope',
    function($scope){
        $scope.title="This is example";
    }
])

app.controller('LoginCtrl',['$scope',
    function($scope){
        $scope.title="This is login";
    }
])