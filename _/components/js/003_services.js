function convertIntoRubles(Restangular) {
    return function(value, range, url) {
        
        var typeCurrency = null,
            sum = +value.replace(/[^0-9|.]+/, ""),
            defaultUSDRate = 64,
            rate;
            url = url || "https://query.yahooapis.com/v1/public/yql?q=select+*+from+yahoo.finance.xchange+where+pair+=+%22USDRUB,EURRUB%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        
        if (typeof value == "string" && value.length > 3) {
            typeCurrency = value.slice(-3);
            typeCurrency = typeCurrency || "USD";
            typeCurrency += "RUB";
        }
        
        Restangular
        .oneUrl('coureses', url).get()
        .then( response => {
            rate = response.query.results.rate;
            
            for (var i = rate.length; i--;) {
                var r = rate[i];
                
                if (r.id === "USDRUB") defaultUSDRate = parseFloat(r.Rate);
                if (r.id === typeCurrency) {
                    range.rubles = (sum * parseFloat(r.Rate)).toFixed(2);
                    return;
                }
            }
            range.rubles = (sum * defaultUSDRate).toFixed(2);
        });
    }
}
function BuyingService(Restangular) {
    
    this.getOne = function(id) {
        return Restangular
            .one('getBuyings', id).get();
    }
    
    this.getAll = function() {
        return Restangular
            .all('getBuyings').getList();
    }
    
    this.add = function() {
        
    }
    
    this.update = function() {
        
    }
    
    this.deleteOne = function() {
        
    }
    
    this.deleteAll = function() {
        
    }
    return this;
}

function authorizeUser($location, Restangular) {
    return function( data ) {
        return Restangular
            .all("login").post(data);
    };
}