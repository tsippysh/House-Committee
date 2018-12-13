app.controller("graphCtrl", function ($scope, user, $location, messages) {
    $scope.isWith = 0;
    $scope.notIsWith = 0;
    $scope.updateChart = function () {
        alert("graphCtrl");

        return [isWith, notIsWith];
    }
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
    //$scope.data = [];
    $scope.updateChart = function() {
        var Agree = 0;
        var Disagree = 2;
        Agree=Agree+isWith;
        Disagree=Disagree+isWith;
        return [Agree, Disagree];
      }
   
    
// window.onload = function () {

// var chart = new CanvasJS.Chart("chartContainer", {
// 	exportEnabled: true,
// 	animationEnabled: true,
// 	title:{
// 		text: "State Operating Funds"
// 	},
// 	legend:{
// 		cursor: "pointer",
// 		itemclick: explodePie
// 	},
// 	data: [{
// 		type: "pie",
// 		showInLegend: true,
// 		toolTipContent: "{name}: <strong>{y}%</strong>",
// 		indexLabel: "{name} - {y}%",
// 		dataPoints: [
// 			{ y: 26, name: "School Aid", exploded: true },
// 			{ y: 20, name: "Medical Aid" },
// 			{ y: 5, name: "Debt/Capital" },
// 			{ y: 3, name: "Elected Officials" },
// 			{ y: 7, name: "University" },
// 			{ y: 17, name: "Executive" },
// 			{ y: 22, name: "Other Local Assistance"}
// 		]
// 	}]
// });
// chart.render();
// }

// function explodePie (e) {
// 	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
// 		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
// 	} else {
// 		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
// 	}
// 	e.chart.render();

// }

})