var nunjucks = require('nunjucks');

exports.tmplConfig = function(app,viewsUrl) {
    nunjucks.configure(viewsUrl, {
        autoescape: true,
        express: app,
        watch: true,
        //noCache:true,
        tags: {
          variableStart: '{$',//避免跟angularjs语法冲突
          variableEnd: '$}'
        }
    });
  };