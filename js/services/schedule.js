angular.module('Horun')
.factory('Schedule', ['$routeParams', '$http', function ScheduleFactory($routeParams, $http) {
  return {
    show: function()  {
      return $http({method: 'GET', url: 'https://horun.herokuapp.com/api/v1/schedules?day=' + $routeParams.day });
    }
  };
}]);