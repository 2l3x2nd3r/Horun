angular.module('Horun')
.controller('SchedulesIndexController', ['$scope', '$location', 'Schedule', function($scope, $location, Schedule) {
  $scope.isCollapsed = false;

  Schedule.show().success(function(data){
    $scope.isCollapsed = true;
    $scope.matters = data.classes;
  });
}]);