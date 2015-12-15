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

    
}

module.exports = configs;