angular.module('HelloWorldApp', [])
   .controller('HelloWorldController', function($scope, $http) {
     $http.get('/greeting').
         then(function(response) {
             $scope.greeting = response.data;
         });
});
