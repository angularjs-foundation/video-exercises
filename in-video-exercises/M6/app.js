angular.module('MyApp', [])

  .directive('myCircle', function() {
    return {
      templateUrl : './circle.html',
      controller : ['$scope', '$rootScope', function($scope, $rootScope) {
        $scope.afterClick = function() {
          $rootScope.$broadcast('clicked');
        };
      }],
      link : function(scope, element) {
        element.on('click', function() {
          scope.$apply(function() {
            scope.afterClick();
          });
        });
      }
    };
  })

  .directive('myRectangle', function() {
    return {
      templateUrl : './rectangle.html',
      restrict : 'E',
      replace : true,
      controller : ['$scope', function($scope) {
        $scope.$on('clicked', function() {
          $scope.clicked = true;
        });
      }]
    };
  });
