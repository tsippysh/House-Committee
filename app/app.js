var app = angular.module("houseApp", ["ngRoute", "chart.js"]);

app.config(function ($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "app/home/main.html"
  }).when("/login", {
    templateUrl: "app/login/login.html",
    controller: "loginCtrl",
  }).when("/allmessages", {
    templateUrl: "app/messages/allmessages.html",
    controller: "messagesCtrl"
  }).when("/newMessage", {
    templateUrl: "app/messages/newMessage.html",
    controller: "newMessageCtrl"
  }).when("/vote", {
    templateUrl: "app/vote/vote.html",
    controller: "voteCtrl"
  }).when("/graph/:id", {
    templateUrl: "app/graph/graph.html",
    controller: "graphCtrl/"
  })
  .when("/signup", {
    })
  
});


