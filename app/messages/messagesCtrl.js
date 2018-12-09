app.controller("messagesCtrl", function ($scope, messages,user, $location) {
    user.getActiveUser().fname;
    alert(1+$scope.fname);
    $scope.fname = user.getActiveUser().fname;
    alert(2+$scope.fname);
    alert("user"+user.getActiveUser().fname);
    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }
  
    messages.getActiveUserMessages().then(function (messages) {
        $scope.messages = messages;
        // $location.path("/newMessages")
    }, function (error) {

    })
  
}) 


      
        

// נקודה למחשבה
// $scope.myname= user.getActiveUser().fname;

