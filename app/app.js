var app = angular.module("houseApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/", {
      templateUrl: "app/home/main.html"
    }).when("/Messages", {
      templateUrl: "messages.html",
      controller: "messagesCtrl"
    })
    .when("/newMessage", {
        templateUrl: "newMessage.html",
        controller: "newMessageCtrl"
  }) 
  .when("/login", {
    templateUrl: "app/login/login.html",
    controller: "loginCtrl"
         })
         .when("/signup", {
        })
  .otherwise({
    templateUrl:"404.html"
  })
});