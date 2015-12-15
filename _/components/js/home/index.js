var home = angular.module("home", []);
// accountOfExpensesApp

home
    .config( require('./homeConfig.js') )
    .directive("home", require('./homeDirective') )
    .controller("HomeController", require('./homeController.js'));

module.exports = home;