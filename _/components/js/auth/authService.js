function AuthService(Restangular) {
    
    return function( data ) {
        return Restangular
            .all("login").post(data);
    }
    
}

module.exports = AuthService;