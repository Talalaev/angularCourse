var buying = angular.module("buying", []);
// accountOfExpensesApp

buying
    .directive("buying", require('./buyingDirective'))
    .directive("addBuying", require('./addBuyingDirective'))
    .controller("BuyingsController", require('./buyingController'))
    .factory("BuyingService", require('./buyingService.js'));

module.exports = buying;