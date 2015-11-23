function configs($stateProvider, $locationProvider) {
    
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    
    $stateProvider
    .state("home", {
        url: "/",
        template: "<home></home>"
    })
    .state("users", {
        url: "/users",
        templateUrl: "users.html"
    })
    .state("user", {
        url: "/users/:user",
        templateUrl: "user.html",
        controllerAs: "userData",
        controller: 'UserController'
    })
    .state("user.buyings", {
        url: "/buyings",
        template: "<buying></buying>"
    });
}