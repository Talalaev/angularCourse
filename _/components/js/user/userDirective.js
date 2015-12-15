function userDirective() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "user.html",
        controllerAs: "user",
        controller: 'UserController'
    }
}

module.exports = userDirective;