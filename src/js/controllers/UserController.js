(function () {
  'use strict';

  app.controller('UserController', [
    'userService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
    UserController
  ]);

  function UserController(userService, $mdSidenav, $mdBottomSheet, $timeout, $log) {
    var self = this;

    self.selected = userService.selected;
    self.users = userService.users;
    self.selectUser = userService.selectUser;
    self.toggleList = userService.toggleUsersList;
    self.makeContact =userService.makeContact;

    userService
      .loadAllUsers()
      .then(function (users) {
        self.users = [].concat(users);
        self.selected = users[0];
      });
  }

})();
