app.controller("newMessageCtrl", function($scope, messages) {
    $scope.createMessage = function () {
        messages.createMessage($scope.name, $scope.description).then(function () {
            $location.path("/messages")
        }, function (err) {
            console.log(err);
        })
    }

}) 