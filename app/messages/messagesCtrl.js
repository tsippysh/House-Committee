app.controller("messagesCtrl", function ($scope, messages,user, $location) {
   
    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }
  
    messages.getActiveUserMessages(true).then(function (messages) {
        $scope.messages = messages;
        $scope.fname = user.getActiveUser();
        $scope.myFname= user.getActiveUser().fname;
        $scope.myLname= user.getActiveUser().lname;
    }, function (error) {

    })
  
}) 

    
        

 

