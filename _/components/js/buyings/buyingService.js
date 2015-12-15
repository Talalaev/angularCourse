function BuyingService(Restangular) {
    
    this.getOne = function(id) {
        return Restangular
            .one('getBuyings', id).get();
    }
    
    this.getAll = function() {
        return Restangular
            .all('getBuyings').getList();
    }
    
    this.add = function( data ) {
        return Restangular
            .all("addBuying").post( data );
    }
    
    this.update = function() {
        
    }
    
    this.deleteOne = function( data ) {
        return Restangular
            .all("deleteBuying").post( data );
    }
    
    this.deleteAll = function() {
        
    }
    return this;
}



module.exports = BuyingService;