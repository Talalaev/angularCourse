'use strict'
function AuthController($scope, authorizeUser, $location) {
    $scope.onEnterClick = enter;
    
    function enter() {
        if ( !$scope.isFormShown )
            return $scope.isFormShown = true;
        
        // esli v peremennoi true to ne pokazivaem owibku ina4e pokazivaem. "" == false
        $scope.nameWasEntered = $scope.userName;
        
        if (!$scope.userName) return;
        
        authorizeUser({username: $scope.userName, password: $scope.userPass})
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
            // obrabotka isklu4eni9
        });
    };
}
//--------------------------------------------------
function UserController() {
    this.name = "Mike";
}
//--------------------------------------------------
function BuyingsController(BuyingService) {
    BuyingService.getAll().then(buying => {
        this.buying = buying;
    });
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