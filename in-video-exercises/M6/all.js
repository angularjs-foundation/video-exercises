angular.module('MyApp', [])

  .factory('usersService', function() {
    var user;
    return {
      setCurrentUser : function(current) {
        user = current;
      },
      getCurrentUser : function() {
        return user;
      }
    };
  })

  .controller('ListCtrl', ['$scope', '$rootScope', '$http', 'usersService',
                   function($scope, $rootScope, $http, usersService) {
    $http.get('./users.json').success(function(users) {
      $scope.users = users;
    });

    $scope.selectUser = function(user) {
      usersService.setCurrentUser(user);
      $rootScope.$broadcast('userChanged');
    };
  }])

  .controller('DetailCtrl', ['$scope', 'usersService',
                     function($scope, usersService) {
    $scope.$on('userChanged', function(event) {
      $scope.currentUser = usersService.getCurrentUser();
    });
  }])

