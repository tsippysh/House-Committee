// app.controller("graphCtrl", function ($scope, user, $location, $routeparams, messages) {
app.controller("graphCtrl", function ($scope, user, $location, messages) {
    debugger;
    // $scope.id = $routeparams.id;
    // $scope.msgName = $routeparams.name;
    // alert("$scope.id:(graph) " + $scope.id);
    debugger;
    alert("$scope.msgName" + $scope.msgName);
    $scope.isWith = 0;
    $scope.notIsWith = 0;
    alert("graphCtrl");
    // $scope.updateChart = function () {
    //     alert("graphCtrl");

    //     return [isWith, notIsWith];
    // }
    $scope.goHome = function () {
        alert("goHome");
        $location.path("/allmessages")
    };


    // Chart
    $scope.options = {
        legend: {
            display: true
        }
    };
    $scope.labels = ["Agree", "Disagree"];
    //$scope.data = [];

    $scope.updateChart = function () {
        //alert("updateChart");
        debugger;
        var Agree = 1;
        var Disagree = 2;
        Agree = Agree + $scope.isWith;
        Disagree = Disagree + $scope.isWith;
        return [Agree, Disagree];
    }

})