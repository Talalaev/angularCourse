var user = angular.module("user", []);
// accountOfExpensesApp

user
    .config(require('./userConfig'))
    .directive("user", require('./userDirective'))
    .directive("profile", require('./profileDirective'))
    .controller("UserController", require('./userController'))
    .factory("UserService", require('./userService.js'));

module.exports = user;