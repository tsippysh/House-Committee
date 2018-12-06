app.controller("loginCtrl", function ($scope, $location, user) {
    // $scope.email = "d@gmail.com";
    // $scope.pwd = "123";
    $scope.invalidLogin = false;
    
    $scope.login = function () {
      
        $scope.invalidLogin = false;

        user.login($scope.email, $scope.pwd).then(function () {
           
                // success login
                alert($scope.email);
                $location.path("/allmessages")
            }, function (error) {
                // failed login
                $scope.invalidLogin = true;
            }
        )

    };

});

