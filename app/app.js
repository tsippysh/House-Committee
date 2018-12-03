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
         }).when("/signup", {
        })
  .otherwise({
    templateUrl:"404.html"
  })
})

// var app = angular.module("recipeBookApp", ["ngRoute"]);
//  app.config(function($routeProvider) {
//     $routeProvider
//     .when("/", {
//         templateUrl: "app/home/home.html"
//     }).when("/login", {
//      }).when("/signup", {
//      }).when("/recipes", {
//      }).when("/new" , {
//      }).when("/recipe/:id" , {
//      })
// }) 