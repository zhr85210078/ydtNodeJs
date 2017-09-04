(function () {
    'use strict';

    app.controller('LoginController', [
        'loginService', LoginController
    ]);

    function LoginController(loginService) {
        var self = this;
        
        self.login = loginService.login;
        self.register = loginService.register;
        self.forgot = loginService.forgot;
        self.toggled = loginService.toggled;
    }

})();