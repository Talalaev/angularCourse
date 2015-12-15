function registDirective() {
    return {
        restrict: "E",
        replace: "true",
        templateUrl: "regist.html",
        scope: {
            
        },
        controllerAs: "registRes",
        controller: "RegistController"
    }
}

module.exports = registDirective;