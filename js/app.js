angular.module('Horun', ['ngRoute', 'picardy.fontawesome', 'ui.bootstrap'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/schedules', {
      templateUrl: 'templates/pages/schedules/index.html',
      controller: 'SchedulesIndexController',
      redirectTo: function(){
        var date = new Date();
        var weekday = new Array('D', 'L', 'M', 'I', 'J', 'V', 'S');
        return '/schedules?day=' + weekday[date.getDay()];
      }
    })
    .otherwise({
      redirectTo: '/schedules'
    });
}]);