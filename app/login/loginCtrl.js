app.controller("loginCtrl", function($scope, $location) {
    
    $scope.invalidLogin = false;
     $scope.login = function() {
        $scope.invalidLogin = false;
        
        if ($scope.email === "a" && $scope.pwd === "1") {
            // success login
            $location.path("/Messages")
        } else {
            // failed login
            $scope.invalidLogin = true;
        };
    }
});