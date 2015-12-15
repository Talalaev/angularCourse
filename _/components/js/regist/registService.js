function RegistService(Restangular) {
    
    return function( data ) {
        return Restangular
            .all("regist").post(data);
    }
    
}


module.exports = RegistService;