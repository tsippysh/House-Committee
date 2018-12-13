app.controller("loginCtrl", function ($scope, $location, user, messages) {
    // $scope.email = "d@gmail.com";
    // $scope.pwd = "123";
    $scope.invalidLogin = false;
    
    $scope.login = function () {
        $scope.invalidLogin = false;
        messages.clearWasOverload();
        user.login($scope.email, $scope.pwd).then(function () {
                // success login
                $location.path("/allmessages")
            }, function (error) {
                // failed login
                $scope.invalidLogin = true;
            }
        )

    };

});

