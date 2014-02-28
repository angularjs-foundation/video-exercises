angular.module('MyDirectives', [])

  .constant('SOCIAL', {
    'facebook' : 'Facebook',
    'twitter' : 'Twitter',
    'github' : 'Github',
    'skype' : 'Skype',
    'tumblr' : 'Tumblr',
    'linkedin' : 'LinkedIn',
    'google-plus' : 'Google+',
    'youtube' : 'YouTube'
  })

  .factory('faSocialClassName', function() {
    return function(name) {
      return 'fa fa-' + name;
    };
  })

  .controller('SocialCtrl', ['$scope', 'SOCIAL', function($scope, SOCIAL) {
    $scope.services = SOCIAL;
  }])

  .directive('socialItem', ['SOCIAL', 'faSocialClassName',
                    function(SOCIAL, faSocialClassName) {

    //start the directive
    return function(scope, element, attrs) {
      element.html('<span class="' + faSocialClassName(attrs.socialItem) + '"></span> ');
    };
  }]);
