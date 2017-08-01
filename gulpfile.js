var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var clean = require('gulp-clean');
var gulpSequence = require('gulp-sequence').use(gulp);
var gutil = require('gulp-util');
var ftp = require('gulp-ftp');
var zip = require('gulp-zip');
var moment = require('moment');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-minify-css');
var cssver = require('gulp-make-css-url-version');
var htmlmin = require('gulp-htmlmin');

//定义目录路径
var app = {
    //源代码，文件目录
    srcPath: 'src/',
    //项目编译目录
    buildPath:'build/',
    //项目发布目录
    prdPath: 'dist/'
};

//清空lib目录
gulp.task('clean-lib',function (){
    return gulp.src(app.srcPath +'lib/*', {read: false})
        .pipe(clean());
});

//清空build目录
gulp.task('clean-build', function () {
    return gulp.src(app.buildPath+"*", {read: false})
        .pipe(clean());
});

//将bower下载的插件复制到lib目录
gulp.task('lib', function () {
    return gulp.src([
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/jquery/dist/jquery.min.map',

            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'bower_components/bootstrap/dist/css/bootstrap.min.css.map',
            'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
            'bower_components/bootstrap/dist/css/bootstrap-theme.min.css.map',
            'bower_components/bootstrap/dist/fonts/*',
            'bower_components/bootstrap/dist/js/bootstrap.min.js',

            'bower_components/angular/angular.min.js',
            'bower_components/angular/angular.min.js.map',

            'bower_components/angular-route/angular-route.min.js',
            'bower_components/angular-route/angular-route.min.js.map',

            'bower_components/animate.css/animate.min.css',
            'bower_components/material-design-iconic-font/dist/css/material-design-iconic-font.min.css',
            'bower_components/material-design-iconic-font/dist/fonts/*',
        ],{base: 'bower_components'}) //base:复制文件及目录
        .pipe(gulp.dest(app.srcPath + 'lib'))
        .pipe(reload({ stream: true }));
});

//压缩src/js目录下的js文件
gulp.task('jsmin', function () {
    return gulp.src([app.srcPath+'js/*.js'])
            .pipe(uglify())
            .pipe(gulp.dest(app.buildPath+'src/js'));
});

//压缩src/css目录下的css文件
gulp.task('cssmin', function () {
    return gulp.src('src/css/*.css')
            .pipe(cssver()) //给css文件里引用文件加版本号（文件MD5）
            .pipe(cssmin())
            .pipe(gulp.dest(app.buildPath+'src/css'));
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
    return gulp.src('views*/**/*.html')
            .pipe(htmlmin(options))
            .pipe(gulp.dest(app.buildPath));
});

//将开发环境代码复制到build目录
gulp.task('build', ['jsmin','cssmin','htmlmin'], function () {
        return gulp.src([
            'bin*/**/*',
            'launch*/*',//iisnode执行目录,目录必须有读写创建文件的权限
            'config*/**/*',
            'logs*/**/*',
            'src*/img/*',
            'src*/lib/**/*',
            'app.js',
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
        script: 'bin/www'
    }).on('start', function () {
        if (!started) {
            cb();
            started = true;
        }
    });
});

//将build目录的代码压缩到dist目录
gulp.task('zip', () => {
    var zipName='ydtnodejs_'+moment().format('YYYYMMDDHHmmss')+'.zip';
   return gulp.src(app.buildPath+'**/*')
        .pipe(zip(zipName))
        .pipe(gulp.dest('dist'));
});

//将dist目录的压缩包上传到服务器ftp端
gulp.task('ftp', function () {
    return gulp.src([app.prdPath+'**/*'])
        .pipe(ftp({
            host: '121.41.60.226',
            port:'21',
            user: 'ydt',
            pass: '85210078',
            remotePath: "ydtNodeJs/"
        }))
        .pipe(gutil.noop());
});

//编译整理
gulp.task('compile',['lib']);

//自动监控src、views、app.js，设置本地代理调试程序
gulp.task('serve', ['nodemon'], function () {
    browserSync.init({
        files: ["src/**/*", "views/**/*","app.js"],
        proxy: 'http://localhost:4000',
        browser: 'chrome',
        port: 7000
    });

    //监控bower下载插件
    gulp.watch('bower_components/**/*', ['lib']);
    // gulp.watch("src/**/*").on("change", reload);
    // gulp.watch("views/**/*").on("change", reload);
    // gulp.watch("app.js").on("change", reload);
});

//默认启动
gulp.task('default', gulpSequence('clean-lib','compile', 'serve'));