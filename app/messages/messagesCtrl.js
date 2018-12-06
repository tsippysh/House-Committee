app.controller("messagesCtrl", function ($scope, messages,user) {
    $scope.fname= user.getActiveUser().fname;
    messages.getActiveUserMessages().then(function (messages) {
        $scope.messages = messages;
    }, function (error) {

    })
  
}) 