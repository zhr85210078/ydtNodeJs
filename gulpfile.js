var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    clean = require('gulp-clean'),
    gulpSequence = require('gulp-sequence').use(gulp),
    gutil = require('gulp-util'),
    ftp = require('gulp-ftp'),
    zip = require('gulp-zip'),
    moment = require('moment'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-minify-css'),
    cssver = require('gulp-make-css-url-version'),
    htmlmin = require('gulp-htmlmin'),
    replace = require('gulp-replace'),
    rename = require("gulp-rename");

//定义目录路径
var app = {
    //源代码，文件目录
    srcPath: 'src/',
    //项目编译目录
    buildPath: 'build/',
    //项目发布目录
    prdPath: 'dist/'
};

//清空src/vendor目录
gulp.task('clean-vendor', function () {
    return gulp.src(app.srcPath + 'vendor/*', { read: false })
        .pipe(clean());
});

//清空build目录
gulp.task('clean-build', function () {
    return gulp.src(app.buildPath + "*", { read: false })
        .pipe(clean());
});

//将bower下载的插件复制到src/vendor目录
gulp.task('vendor', function () {
    return gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/jquery/dist/jquery.min.map',

        'bower_components/bootstrap/dist/css/bootstrap.css',
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/bootstrap/dist/css/bootstrap.css.map',
        'bower_components/bootstrap/dist/css/bootstrap-theme.css',
        'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
        'bower_components/bootstrap/dist/css/bootstrap-theme.css.map',
        'bower_components/bootstrap/dist/fonts/*',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',

        'bower_components/angular/angular.js',
        'bower_components/angular/angular.min.js',

        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-animate/angular-animate.min.js',
        'bower_components/angular-animate/angular-animate.min.js.map',

        'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',

        'bower_components/angular-cookies/angular-cookies.js',
        'bower_components/angular-cookies/angular-cookies.min.js',
        'bower_components/angular-cookies/angular-cookies.min.js.map',

        'bower_components/angular-resource/angular-resource.js',
        'bower_components/angular-resource/angular-resource.min.js',
        'bower_components/angular-resource/angular-resource.min.js.map',

        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/angular-sanitize/angular-sanitize.min.js',
        'bower_components/angular-sanitize/angular-sanitize.min.js.map',

        'bower_components/angular-touch/angular-touch.js',
        'bower_components/angular-touch/angular-touch.min.js',
        'bower_components/angular-touch/angular-touch.min.js.map',

        'bower_components/angular-translate/angular-translate.js',
        'bower_components/angular-translate/angular-translate.min.js',

        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js.map', 
        'bower_components/angular-ui-router/release/angular-ui-router.min.js.map',        

        'bower_components/ngstorage/ngstorage.js',
        'bower_components/ngstorage/ngstorage.min.js',

        'bower_components/oclazyload/dist/ocLazyLoad.js',
        'bower_components/oclazyload/dist/ocLazyLoad.min.js',

        'bower_components/animate.css/animate.css',
        'bower_components/animate.css/animate.min.css',        

        'bower_components/material-design-iconic-font/dist/css/material-design-iconic-font.css',
        'bower_components/material-design-iconic-font/dist/css/material-design-iconic-font.min.css',
        'bower_components/material-design-iconic-font/dist/fonts/*',

        'bower_components/roboto-webfont-bower/fonts/*',

        'bower_components/angular-material/angular-material.css',
        'bower_components/angular-material/angular-material.min.css',
        'bower_components/angular-material/angular-material.js',
        'bower_components/angular-material/angular-material.min.js',

        'bower_components/angular-aria/angular-aria.js',
        'bower_components/angular-aria/angular-aria.min.js',
        'bower_components/angular-aria/angular-aria.min.js.map'

    ], { base: 'bower_components' }) //base:复制文件及目录
        .pipe(gulp.dest(app.srcPath + 'vendor'))
        .pipe(reload({ stream: true }));
});

//压缩src/js目录下的js文件
gulp.task('jsmin', function () {
    return gulp.src([app.srcPath + 'js/**/*.js'])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(app.buildPath + app.srcPath + 'js'));
});

//压缩src/css目录下的css文件
gulp.task('cssmin', function () {
    return gulp.src([app.srcPath + 'css/**/*.css'])
        .pipe(cssver()) //给css文件里引用文件加版本号（文件MD5）
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(app.buildPath + app.srcPath + 'css'));
});

//压缩views目录下的html文件
gulp.task('htmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    return gulp.src(app.srcPath + 'views/**/*.html')
        // .pipe(replace('.min.css','.css'))
        // .pipe(replace('.min.js','.js'))
        .pipe(replace('.css', '.min.css'))
        .pipe(replace('.js', '.min.js'))
        .pipe(htmlmin(options))
        .pipe(gulp.dest(app.buildPath + app.srcPath + 'views'));
});

//将开发环境代码复制到build目录
gulp.task('build', ['jsmin', 'cssmin', 'htmlmin'], function () {
    return gulp.src([
        'logs*',
        'lib*/**/*',
        'src*/img/**/*',
        'src*/vendor/**/*',
        'app.js',
        'config.js',
        'package.json',
        'web.config'//iisnode配置文件
    ])
        .pipe(gulp.dest(app.buildPath))
        .pipe(reload({ stream: true }));
});

//设置开发环境本地启动项目
gulp.task('nodemon', function (cb) {
    var started = false;
    return nodemon({
        script: 'app.js'
    }).on('start', function () {
        if (!started) {
            cb();
            started = true;
        }
    });
});

//将build目录的代码压缩到dist目录
gulp.task('zip', () => {
    var zipName = 'ydtnodejs_' + moment().format('YYYYMMDDHHmmss') + '.zip';
    return gulp.src(app.buildPath + '**/*')
        .pipe(zip(zipName))
        .pipe(gulp.dest('dist'));
});

//将dist目录的压缩包上传到服务器ftp端
gulp.task('ftp', function () {
    return gulp.src([app.prdPath + '**/*'])
        .pipe(ftp({
            host: '***',//服务器IP
            port: '21',//端口号
            user: 'ydt',//用户名
            pass: '***',//密码
            remotePath: "ydtNodeJs/"//服务器目录
        }))
        .pipe(gutil.noop());
});

//编译整理
gulp.task('compile', ['vendor']);

//自动监控src目录所有文件及app.js，设置本地代理调试程序
gulp.task('serve', ['nodemon'], function () {
    browserSync.init({
        files: ["src/**/*", "app.js"],
        proxy: 'http://localhost:4000',
        browser: 'chrome',
        port: 7000
    });

    //监控bower下载插件
    gulp.watch('bower_components/**/*', ['vendor']);
});

//默认启动
gulp.task('default', gulpSequence('clean-vendor', 'compile', 'serve'));