function authDirective() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "auth.html",
        scope: {
            
        },
        controllerAs: "authRes",
        controller: "AuthController",
        link: function(scope, elem, attr) {
            scope.isFormShown = false;
            scope.nameWasEntered = true;
        }
    };
}

module.exports = authDirective;