app.controller("loginCtrl", function ($scope, $location, user) {

    $scope.invalidLogin = false;
    $scope.login = function () {
        $scope.invalidLogin = false;

        if ($scope.email === "d@gmail.com" && $scope.pwd === "1") {
            user.login($scope.email, $scope.pwd).then(function () {
                // success login
                $location.path("/allmessages")
            }, function () {
                // failed login
                $scope.invalidLogin = true;

            })
        }
    }
});

