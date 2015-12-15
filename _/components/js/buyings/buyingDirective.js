function buyingDirective() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "buying.html",
        controllerAs: "buyings",
        controller: 'BuyingsController'
    }
}

module.exports = buyingDirective;