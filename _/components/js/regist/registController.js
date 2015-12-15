'use strict'

function RegistController($scope, RegistService, $location) {
    $scope.onRegistClick = regist;
    
    function regist() {
        console.log($scope.name);
        if ( !$scope.name ) return;
        if ( !$scope.login ) return;
        if ( !$scope.email ) return;
        if ( !$scope.password ) return;
            
        RegistService(
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

module.exports = RegistController;