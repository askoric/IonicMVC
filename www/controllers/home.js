angular.module('plain1') //- Module “pour app!
.controller("home", function($scope, Homeservice){
  $scope.message = Homeservice;
})
