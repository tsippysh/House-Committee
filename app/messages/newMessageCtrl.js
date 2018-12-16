app.controller("newMessageCtrl", function ($scope, messages, $location, user) {
    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.createMessage = function () {
        messages.createMessage($scope.name, $scope.description).then(function (messages) {
        //   alert($scope.name);
            $scope.messages = messages;
            $location.path("/allmessages")
        }, function (err) {
            console.log(err);
        })

    }
})




