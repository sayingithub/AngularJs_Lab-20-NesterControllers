// MODULE - ng-app
 var angularApp = angular.module('angularApp', []);


// CONTROLLERS - ng-controller - $scope is object injected by AnjularJS (dependency injection) $ is nothing but the variable like _ or something else
angularApp.controller('parent1Controller', ['$scope', function ($scope) {
    $scope.message = "Parent 1 Controller";

    // we can use different way to avoid the confusion of var message being used in multiple controller as below
    $scope.parent1vm = {}; //define empty javascript object
    $scope.parent1vm.message1 = "Parent 1 Controller - message1";

}]);

angularApp.controller('child1Controller', ['$scope', function ($scope) {
    $scope.message = "Child 1 Controller";

    // we can use different way to avoid the confusion of var message being used in multiple controller as below
    $scope.child1vm = {}; //define empty javascript object
    $scope.child1vm.message1 = "Child 1 Controller  - message1";


}]);


// another way ot using the Nested controller without using $scope - called "Controller as"
angularApp.controller('parent2Controller', [function () {
    this.message = "Parent 2 Controller";
}]);

angularApp.controller('child2Controller', [function () {
    this.message = "Child 2 Controller";
}]);
