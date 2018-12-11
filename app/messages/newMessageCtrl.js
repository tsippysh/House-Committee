app.controller("newMessageCtrl", function ($scope, messages, $location, user) {
    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.createMessage = function () {
        messages.createMessage($scope.name, $scope.description).then(function (messages) {
            $scope.messages = messages;
            alert("new message: "+ messages.length);
            $location.path("/allmessages")
        }, function (err) {
            console.log(err);
        })

    }
})




