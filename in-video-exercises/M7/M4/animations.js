angular.module('MyAppAnimations', [])

  .animation('.switch-animation', function() {
    return {
      enter : function(element, done) {
        var width = $(element.parent()).width();
        $(element).css({
          width:width,
          top:0,
          left:width
        });
        $(element).animate({
          left:0
        }, done);
      },
      leave : function(element, done) {
        var width = $(element.parent()).width();
        $(element).css({
          width:width,
          top:0,
          left:0
        });
        $(element).animate({
          left:-width
        }, done);
      }
    }
  });
