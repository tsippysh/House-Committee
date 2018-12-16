app.controller("graphCtrl", function ($scope, user, $location, messages) {
    $scope.message = {};

    $scope.isWith = 0;
    $scope.notIsWith = 0;

    $scope.goHome = function () {
        $location.path("/allmessages")
    };


    // Chart
    $scope.options = {
        legend: {
            display: true
        }
    };

    $scope.labels = ["Agree", "Disagree"];
    
    $scope.updateChart = function (message) {
        var Agree = 1;
        var Disagree = 2;
        Agree = Agree + $scope.isWith;
        Disagree = Disagree + $scope.isWith;
        return [Agree, Disagree];
    }

    $scope.getMessage = function () {
        debugger;
        $scope.message = messages.getMessageFromVote();
    }
    $scope.getMessage();
})