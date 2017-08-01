# 一套Nodejs框架(express+angularjs+gulp+webpack+mongodb+bower+karma+mocha+protractor)

![][ydt-logo](http://ydtnodejs.yidt.cn/)

### Author:horan
### E-mail:zhr85210078@163.com

### 搭建项目
|操作|说明|
|----|--------------|
|`express ydt`|创建目录|
|`npm update`|初始化npm项目插件|
|`npm uninstall jade --save`|删除jade模板|
|`npm install nunjucks --save`|安装nunjucks模板|
|`npm install log4js --save`|安装打印log插件|
|Create a new file `.bowerrc`|创建.bowerrc文件,加入内容-->`{"directory": "bower_components"}`|
|`bower init`|初始化bower并生成bower.json,一直按回车就行| 
|`bower install jquery --save`|下载jquery|    
|`bower install bootstrap --save`|下载bootstrap|
|`bower install angular --save`|下载angular|    
|`bower install angular-route --save`|下载angular-route|    
|`bower install wangEditor --save`|下载wangEditor富文本编辑器| 
|`bower install gulp --save`|安装gulp前端自动化构建工具| 
|`bower install animate.css --save`|安装animate.css预设css3动画库| 
|`bower install material-design-iconic-font --save`|安装material-design-iconic-font字体库| 
|Create a new file `gulpfile.js`|创建gulpfile.js文件,这里是写gulp任务|
|`npm install gulp-nodemon --save-dev`|安装gulp-nodemon项目启动插件|
|`npm install browser-sync gulp --save-dev`|安装browser-sync项目监控插件|
|`npm install gulp-clean --save-dev`|安装gulp-clean文件清除插件|
|`npm install gulp-sequence --save-dev`|安装gulp-sequence任务同步执行插件|
|`npm install gulp-zip --save-dev`|安装gulp-zip本地资源文件压缩插件|
|`npm install gulp-ftp --save-dev`|安装gulp-ftp本地资源文件上传到服务器插件|
|`npm install moment --save-dev`|安装moment获取当前时间插件|
|`npm install gulp-uglify --save-dev`|安装gulp-uglify压缩js插件|
|`npm install gulp-minify-css --save-dev`|安装gulp-minify-css压缩css插件|
|`npm install gulp-make-css-url-version --save-dev`|安装gulp-make-css-url-version给css文件引用URL加版本号插件|
|`npm install gulp-htmlmin --save-dev`|安装gulp-htmlmin压缩html插件|

[ydt-logo]:https://github.com/zhr85210078/ydtNodeJs/blob/master/src/img/logo.png