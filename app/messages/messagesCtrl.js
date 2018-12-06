app.controller("messagesCtrl", function ($scope, messages) {
    messages.getActiveUserMessages().then(function (messages) {
        $scope.messages = messages;
    }, function (error) {

    })
  
}) 