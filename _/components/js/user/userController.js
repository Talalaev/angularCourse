'use strict'

function UserController(UserService, $location) {
    UserService.get()
    .then( userData => {
        for ( var key in userData ) {
            this[key] = userData[key];
        }
    });
    
    this.showOrEdit = true;
    
    this.triggerShowOrEdit = () => { 
        this.showOrEdit = !this.showOrEdit; 
    }
    
    this.logout = function() {
        UserService.logout()
        .then( () => {
            $location.path("/");
        });
    }
    
    this.update = function( data ) {
        for ( var key in data ) {
            if ( !data[key] ) return alert('не все поля заполнены');
        }
        
        if ( data.oldPassword !== data.newPassword) 
            return alert("Новый и старый пароли не совпадают!");
        
        UserService.update( data )
        .then( (res) => {
            console.log(res);
        },
        (res) => {
           console.log("error: " + res); 
        });
        
    }
    
    this.delete = function() {
        if ( confirm("Вы уверены?") ) {
            UserService.delete()
            .then( () => {
                $location.path("/");
            });
        }
        return false;
    }
}

module.exports = UserController;