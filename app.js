angular.module('starter', ['ngRoute', 'starter.controllers'])
.config(['$routeProvider',
   function($routeProvider) {
     $routeProvider.
       when('/', {
         templateUrl: 'templates/todos.html',
         controller: 'TodoCtrl'
       }).
       otherwise({
         redirectTo: '/'
       });
   }]);





