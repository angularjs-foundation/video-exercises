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
      $rootScope.$broadcast('userChanged', user);
    };
  }])

  .controller('DetailCtrl', ['$scope', 'usersService',
                     function($scope, usersService) {
    $scope.$on('userChanged', function(event, user) {
      $scope.currentUser = user;
    });
  }])
