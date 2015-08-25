angular.module('starter', ['ngRoute', 'starter.controllers'])
.config(['$routeProvider',
   function($routeProvider) {
     $routeProvider
       .when('/', {
         templateUrl: 'templates/todos.html',
         controller: 'TodoCtrl'
       })
       .otherwise({
         redirectTo: '/'
       });
      $routeProvider
      .when('/about-us', {
        templateUrl: 'templates/about-us.html'
      })
      .otherwise({
        redirectTo: '/'
      })
      $routeProvider
      .when('/lists', {
        templateUrl: 'templates/lists.html',
        controller: 'ListsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })


   }]);





