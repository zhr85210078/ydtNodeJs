var nunjucks = require('nunjucks');

exports.tmplConfig = function(app,tmplUrl) {
    nunjucks.configure(tmplUrl, {
        autoescape: true,
        express: app,
        watch: true,
        //noCache:true,
        tags: {
          variableStart: '{$',//避免跟angularjs语法冲突,将“{{”和“}}”改成“{$”和“$}”
          variableEnd: '$}'
        }
    });
  };