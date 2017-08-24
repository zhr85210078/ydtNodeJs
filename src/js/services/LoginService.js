(function(){
    'use strict';
  
    app.service('loginService', [LoginService]);
  
    function LoginService(){
        this.login = 1;
        this.register = 0;
        this.forgot = 0;
        this.toggled=function(a,b,c){
            this.login = a;
            this.register = b;
            this.forgot = c;
        }
    }
  
  })();
  