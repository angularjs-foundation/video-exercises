angular.module('MyAppAnimations', [])

  .animation('.switch-animation', function() {
    return {
      enter : function(element, done) {
        var width = $(element.parent()).width();
        $(element).css({
          top:0,
          left:width
        });
        $(element).animate({
          left:0
        }, done);
      }
    }
  });
