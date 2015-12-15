'use strict'

function AuthController($scope, AuthService, $location) {
    $scope.onEnterClick = enter;
    
    function enter() {
        if ( !$scope.isFormShown )
            return $scope.isFormShown = true;
        
        // esli v peremennoi true to ne pokazivaem owibku ina4e pokazivaem. "" == false
        $scope.nameWasEntered = $scope.userName;
        
        if (!$scope.userName) return;
        
        AuthService({username: $scope.userName, password: $scope.userPass})
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

module.exports = AuthController;