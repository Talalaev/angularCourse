var regist = angular.module("regist", []);
// accountOfExpensesApp

regist
    .directive("regist", require('./registDirective'))
    .controller("RegistController", require('./registController'))
    .factory("RegistService", require('./registService.js'));

module.exports = regist;