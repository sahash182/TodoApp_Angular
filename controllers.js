angular.module('starter.controllers', [])
.controller("MainCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.term = "cellar door";
    $scope.showAlert = function() {
   alert($scope.term);
  } 
}])


.controller("TodoCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {

  $scope.todos = [{title:"Clean car"}, {title:"Do homework"}]
  $scope.addNew = function() {
   $scope.todos.push({title:$scope.newTodo})
   $scope.newTodo = " ";
  }

   $scope.delete = function(todo){
    var index = $scope.todos.indexOf(todo);
    $scope.todos.splice(index,1);

  }
  }])
