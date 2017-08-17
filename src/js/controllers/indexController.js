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
