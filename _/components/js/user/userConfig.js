function configs($stateProvider, $locationProvider) {
    
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    
    $stateProvider
    
    .state("users", {
        url: "/users",
        templateUrl: "users.html",
        resolve: {
            users: function( UserService ) {
                // получим всех пользователей тут
                // UserService.getAll().then();
                return UserService.getAll();
            }
        },
        controllerAs: "usersData",
        controller: function (users) {
            this.users = users;
        }
    })
    
    .state("user", {
        url: "/users/:user",
        template: "<user></user>"
    })
    
    .state("user.profile", {
        url: "/profile",
        template: "<profile></profile>"
    })
    
    .state("user.buyings", {
        url: "/buyings",
        template: "<buying></buying>"
    });
    
}

module.exports = configs;