function homeDirective() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: 'home.html',
        scope: {
            
        },
        controllerAs: "home",
        controller: "HomeController"
    };
}

module.exports = homeDirective;