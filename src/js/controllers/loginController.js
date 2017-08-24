(function () {
    'use strict';

    app.controller('LoginController', [
        'loginService', LoginController
    ]);

    function LoginController(loginService) {
        this.login = loginService.login;
        this.register = loginService.register;
        this.forgot = loginService.forgot;
        this.toggled = loginService.toggled;
    }

})();