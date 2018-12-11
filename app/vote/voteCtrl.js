app.controller("voteCtrl", function ($scope, user, $location, messages) {

    $scope.sumAgree = 0;
    $scope.sumAgainst = 0;

    for (var i = 0; i < messages.length; i++) {
        // $scope.agree

    }
    $scope.getAllMessagesForVote =function(){
        messages.getActiveUserMessages(false).then(function(messages){
            
            $scope.messages = messages;
            {{alert("from voteCtrl: "+messages)}}
        }, function (error) {

        })
    }
    $scope.getAllMessagesForVote();

    // messages.getAllMessagesForVote().then(function (messages) {
    //     $scope.messages = messages;
    //     // $location.path("/newMessages")
    // }, function (error) {

    // })



    $scope.isUserLoggedIn = function () {
        return user.isLoggedIn();
    }
    $scope.logout = function () {
        user.logout();
        $location.path("/");
    }
// alert("agree: "+agree);
})