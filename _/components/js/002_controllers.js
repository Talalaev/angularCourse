'use strict'
function AuthController($scope, UserService, $location) {
    $scope.onEnterClick = enter;
    
    function enter() {
        if ( !$scope.isFormShown )
            return $scope.isFormShown = true;
        
        // esli v peremennoi true to ne pokazivaem owibku ina4e pokazivaem. "" == false
        $scope.nameWasEntered = $scope.userName;
        
        if (!$scope.userName) return;
        
        UserService.auth({username: $scope.userName, password: $scope.userPass})
        .then(
            (res) => {
                var user = res.user;
                
                if (user) {
                    $location.path("/users/" + user.toLowerCase());
                } else {
                    $location.path("/");
                }
                
                console.log(res.user);
            }, 
            (res) => {
                // owibka avtorizacii
                $location.path("/");
                console.log(res.user);
            })
        .catch((err) => {
            console.log("Some error:" + err);
        });
    };
}

function RegistController($scope, UserService, $location) {
    $scope.onRegistClick = regist;
    
    function regist() {
        console.log($scope.name);
        if ( !$scope.name ) return;
        if ( !$scope.login ) return;
        if ( !$scope.email ) return;
        if ( !$scope.password ) return;
            
        UserService.regist(
            {
                name: $scope.name,
                login: $scope.login,
                email: $scope.email,
                password: $scope.password
            }
        ).then(
            (res) => {
                alert("Вы зарегистрировались! Выполните вход.");
                // выполнить сразу запрос на авторизацию
                //$location.path("users/" + $scope.name);
                console.log(res);
            },
            (res) => {
                alert("Ошибка!");
            }
        );
    }
}
//--------------------------------------------------
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
//--------------------------------------------------
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
//--------------------------------------------------
function ExpensesController() {
    this.expense = {
        period: "01.11.2015-08.11.2015",
        amount: {
            products: 3,
            manufacturedGoods: 2,
            utilities: 1
        },
        sum: "1000"
    }
}
//--------------------------------------------------
function ProfitsController() {
    this.profits = {
        period: "01.10.2015-01.11.2015",
        type: {
            salary: 20000,
            partTime: 15000,
            else: 2000
        },
        sum: 37000
    }
}
//--------------------------------------------------
function WidgetController(convertIntoRubles) {
    
}