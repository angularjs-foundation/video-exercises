angular.module('MyApp', [])

  .controller('RepeatCtrl', ['$scope', function($scope) {
    $scope.setColors = function() {
      $scope.values = ['cyan','red','green','blue','orange','yellow'];
    };

    $scope.setStates = function() {
      $scope.values = ['MA','NY','AR','NV','CA','WA'];
    };

    $scope.getValues = function() {
      return $scope.values;
    };
  }])

  .controller('FormCtrl', ['$scope', function($scope) {
    $scope.generateAges = function() {
      var ages = [];
      for(var i=18; i <= 60;i++) {
        ages.push(i);
      }
      return ages;
    };

    $scope.submit = function() {
      if($scope.myForm.$valid) {
        alert('submitted');
      } else {
        alert('invalid');
      }
    };
  }]);
