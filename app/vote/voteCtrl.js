app.controller("voteCtrl", function ($scope, user, $location, messages) {

    $scope.sumAgree = 0;
    $scope.sumAgainst = 0;

   


    $scope.getAllMessagesForVote =function(){
        messages.getActiveUserMessages(false).then(function(messages){
           
            $scope.messages = messages;
        }, function (error) {

        })
    }
    $scope.getAllMessagesForVote();



    $scope.isUserLoggedIn = function () {
        return user.isLoggedIn();
    }
    $scope.logout = function () {
        user.logout();
        $location.path("/");
    }
    $scope.showChart = function(){
        $location.path("/graph/"+messages.id)   
    }
})