'use strict';

app.controller('LoginController', [
    LoginController
]);

function LoginController() {
    var self = this;
    self.login = 1;
    self.register = 0;
    self.forgot = 0;
    self.toggled=toggled;

    function toggled(a,b,c){
        self.login = a;
        self.register = b;
        self.forgot = c;
    }
}