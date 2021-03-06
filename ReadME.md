# 一套Nodejs框架(express+angularjs+gulp+mongodb+karma+mocha+protractor)

[![ydt-logo]](http://ydtnodejs.yidt.cn/) :cn:
### Author:horan :point_right: :six::six::six:
### E-mail:zhr85210078@163.com :trollface:
### 前期准备
如果您之前没有使用过nodejs,需要做以下准备操作来使用nodejs编写项目。

&ensp;&ensp;&ensp;&ensp;1.安装nodejs

&ensp;&ensp;&ensp;&ensp;去[nodejs官网](http://nodejs.cn/download/ "nodejs官网下载地址")下载对应的版本(我这里下载的是windows 64位版本)

&ensp;&ensp;&ensp;&ensp;2.安装npm (打开控制台程序`cmd.exe`,输入以下指令)

&ensp;&ensp;&ensp;&ensp;`yum install npm`

&ensp;&ensp;&ensp;&ensp;3.全局安装express

&ensp;&ensp;&ensp;&ensp;`npm install express -g`

&ensp;&ensp;&ensp;&ensp;4.全局安装express-generator模板

&ensp;&ensp;&ensp;&ensp;`npm install -g express-generator`

&ensp;&ensp;&ensp;&ensp;5.全局安装gulp-cli

&ensp;&ensp;&ensp;&ensp;`npm install gulp-cli -g`

以上安装完毕即可进行下面的项目搭建,不需要重复安装。
### 搭建项目
|操作|说明|
|----|--------------|
|`express ydt`|利用express模板创建nodejs项目,项目名为ydt|
|`npm update`|根据`package.json`安装nodejs项目所需的插件,并将插件安装到目录node_modules下|
|`npm uninstall jade --save`|删除jade模板|
|`npm install nunjucks --save`|安装nunjucks模板|
|`npm install log4js --save`|安装打印log插件|
|`npm install jquery --save`|下载jquery|    
|`npm install bootstrap --save`|下载bootstrap|
|`npm install angular --save`|下载angular|    
|`npm install angular-bootstrap --save`|下载bootstrap|
|`npm install angular-animate --save`|下载angular-animate|
|`npm install angular-cookies --save`|下载angular-cookies|
|`npm install angular-resource --save`|下载angular-resource|
|`npm install angular-sanitize --save`|下载angular-sanitize|
|`npm install angular-touch --save`|下载angular-touch|
|`npm install angular-ui-router --save`|下载angular-ui-router|
|`npm install ngstorage --save`|下载ngstorage|
|`npm install angular-translate --save`|下载angular-translate|
|`npm install oclazyload --save`|下载oclazyload|
|`npm install animate.css --save`|安装animate.css预设css3动画库| 
|`npm install material-design-iconic-font --save`|安装material-design-iconic-font字体库| 
|`npm install roboto-npm-webfont --save`|安装roboto-webfont字体库|
|`npm install angular-material --save`|安装angular-material模板| 
|`npm install angular-aria --save`|安装angular-aria| 
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
|`npm install gulp-replace --save-dev`|安装gulp-replace替换html字符串插件|
|`npm install gulp-rename --save-dev`|安装gulp-rename修改文件名称插件|

[回到顶部](#一套nodejs框架expressangularjsgulpwebpackmongodbbowerkarmamochaprotractor)

[ydt-logo]:https://github.com/zhr85210078/ydtNodeJs/blob/master/src/img/logo.png "一点通nodejs项目框架"