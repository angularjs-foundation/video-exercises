angular.module('MyApp', [])

  .controller('Other2Ctrl', ['$scope', function($scope) {
    $scope.title = 'Other Slide 2...';
  }])

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
      for(var i=1; i <= 25;i++) {
        ages.push(i);
      }
      return ages;
    };

    $scope.groupAge = function(age) {
      return age < 18 ? 'under aged' : 'adult';
    };

    $scope.submit = function() {
      if($scope.myForm.$valid) {
        alert('submitted');
      } else {
        alert('invalid');
      }
    };
  }]);
