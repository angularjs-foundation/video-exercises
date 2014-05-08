angular.module('MyApp', ['ngRoute'])

  .constant('VERSION', '1.1')

  .config(['$routeProvider', '$locationProvider',
   function($routeProvider,   $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/',{
      controller : 'HomeCtrl',
      templateUrl : './home.html'
    });
    $routeProvider.when('/info',{
      controller : 'InfoCtrl',
      templateUrl : './info.html'
    });
  }])

  .controller('HomeCtrl', ['$scope', function($scope) {
    $scope.title = 'welcome to the Home Page'; 
    $scope.description = function() {
      return 'this is the home page';
    };
  }])

  .controller('InfoCtrl', ['$scope', function($scope) {
    $scope.title = 'welcome to the Info Page'; 
  }]);
