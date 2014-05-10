$(function() {
  var readme = $('.readme');
  var converter = new Showdown.converter();
  for(var i=0;i<readme.length;i++) {
    var readmeElm = $(readme[i]);
    var module = readmeElm.data('module');
    var path = 'hands-on-exercises/M' + module;
    $.ajax({
      url: '/' + path + '/README.md'
    }).success(function(content) {
      content = "## Where to find the code\n\n" +
                "All code for this module can be found under `" + path + "`.\n\n" +
                "Please visit the directory by running the command `cd "+path+"`.\n\n----\n\n" + content;
      content = content.replace('# Module ' + module, '');
      var html = converter.makeHtml(content);

      readmeElm.html(html);
    }).error(function() {
      var content = "## Installation Required\n\n" +
                    'Please install the demo-app by running `./scripts/install.sh` and then refresh this page';
      var html = converter.makeHtml(content);
      readmeElm.html(html);
    });
  }
});
