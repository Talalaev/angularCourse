'use strict'

function BuyingsController(BuyingService, $location) {
    BuyingService.getAll().then(buying => {
        this.buying = buying;
    });
    
    this.add = ( data ) => {
        for ( var key in data ) {
            if ( !data[key] ) return alert('не все поля заполнены');
        }
        
        if ( data.prodType.products ) {
            data.products = data.name;
            data.manufacturedGoods = "";
            data.utilities = "";
        }
        
        if ( data.prodType.manufacturedGoods ) {
            data.products = "";
            data.manufacturedGoods = data.name;
            data.utilities = "";
        }
        
        if ( data.prodType.utilities ) {
            data.products = "";
            data.manufacturedGoods = "";
            data.utilities = data.name;
        }
        delete data.name;
        delete data.prodType;
        
        BuyingService.add( data )
        .then( (res) => {
            console.log(res);
        },
        (res) => {
           console.log("error: " + res); 
        });
    }
    
    this.delete = function( id ) {
        if ( confirm("Вы уверены?") ) {
            BuyingService.deleteOne({id: id})
            .then( (res) => {
                console.log(res);
                $location.reload();
            });
        }
        return false;
    }
}

module.exports = BuyingsController;