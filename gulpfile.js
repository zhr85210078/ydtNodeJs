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

//定义目录路径
var app = {
    //源代码，文件目录
    srcPath: 'src/',
    //项目生成目录
    buildPath:'build/',
    //项目发布目录
    prdPath: 'dist/'
};

gulp.task('clean',function (){
    return gulp.src(app.srcPath +'lib/*', {read: false})
        .pipe(clean());
});

gulp.task('clean-prod', function () {
    return gulp.src(app.buildPath+"*", {read: false})
        .pipe(clean());
});

gulp.task('lib', function () {
    return gulp.src([
            'bower_components/jquery/dist/jquery.js',
            'bower_components/bootstrap/dist/**/*',
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
        ],{base: 'bower_components'}) //base 复制文件及目录
        .pipe(gulp.dest(app.srcPath + 'lib'))
        .pipe(reload({ stream: true }));
});

gulp.task('prod', function () {
    return gulp.src([
            'bin*/**/*',
            'config*/**/*',
            'logs*/**/*',
            'src*/**/*',
            'views*/**/*',
            'app.js',
            'package.json'
        ])
        .pipe(gulp.dest(app.buildPath))
        .pipe(reload({ stream: true }));
});

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

gulp.task('zip', () => {
    var zipName='ydtnodejs_'+moment().format('YYYYMMDDHHmmss')+'.zip';
   return gulp.src('build/**/*')
        .pipe(zip(zipName))
        .pipe(gulp.dest('dist'));
});

gulp.task('ftp', function () {
    return gulp.src(['dist/**/*'])
        .pipe(ftp({
            host: '121.41.60.226',
            port:'21',
            user: 'ydt',
            pass: '85210078',
            remotePath: "ydtNodeJs/"
        }))
        .pipe(gutil.noop());
});

gulp.task('compile',['lib']);

gulp.task('serve', ['nodemon'], function () {
    browserSync.init({
        files: ["src/**/*", "views/**/*","app.js"],
        proxy: 'http://localhost:4000',
        browser: 'chrome',
        port: 7000
    });

    gulp.watch('bower_components/**/*', ['lib']);
    // gulp.watch("src/**/*").on("change", reload);
    // gulp.watch("views/**/*").on("change", reload);
    // gulp.watch("app.js").on("change", reload);
});

gulp.task('default', gulpSequence('clean','compile', 'serve'));