app.controller("messagesCtrl", function ($scope, messages,user, $location) {
    // user.getActiveUser().fname;  
      
    // alert(2+$scope.fname);
    // alert("user"+user.getActiveUser().fname);
    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }
  
    messages.getActiveUserMessages(true).then(function (messages) {
        $scope.messages = messages;
        $scope.fname = user.getActiveUser();
        // $location.path("/newMessages")
    }, function (error) {

    })
  
}) 

    
        

// נקודה למחשבה
// $scope.myname= user.getActiveUser().fname;

