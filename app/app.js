var app = angular.module("houseApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/", {
      templateUrl: "app/home/main.html"
    }) .when("/login", {
        templateUrl: "app/login/login.html",
        controller: "loginCtrl"
        
    }).when("/messages", {
      templateUrl: "app/messages/allmessages.html",
      controller: "messagesCtrl"
    })
    .when("/newMessage", {
        templateUrl: "newMessage.html",
        controller: "newMessageCtrl"
  }) 
  
         .when("/signup", {
        })
  // .otherwise({
  //   templateUrl:"404.html"
  // })
});