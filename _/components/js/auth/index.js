var auth = angular.module("auth", []);
// accountOfExpensesApp

auth
    .directive("auth", require('./authDirective'))
    .controller("AuthController", require('./authController'))
    .factory("AuthService", require('./authService.js'));

module.exports = auth;