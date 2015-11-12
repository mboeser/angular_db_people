var myApp = angular.module("myApp", []);

myApp.controller("MyController", ["$scope", "$http", function($scope, $http){

    $scope.info = {};
    $scope.nameArray = [];

    $scope.clickButton = function(kittyFooFoo){
        console.log(kittyFooFoo);
        $http.post('/people', kittyFooFoo).then(function(response){
            $scope.getPeople();
            $scope.info = {};
        });
    };

    $scope.getPeople = function(){
        $http.get('/people').then(function(response){
            $scope.nameArray = response.data;
            $scope.peopleOrder = 'name';
            console.log(response.data);
        });
    };

    $scope.deletePeople = function(zoom){
        console.log(zoom);
        $http.delete('/people', {params:{id: zoom.foo}}).then(function(response){
            $scope.getPeople();
        });
    };



$scope.getPeople();
//controller end
}]);
