function home() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "home.html",
        scope: {
            
        },
        controllerAs: "home",
        controller: function($scope) {
            $scope.g = function() {
                this.check = !this.check;
            }
            $scope.check = true;
        }
    };
}
//---------------------------------------------
function auth() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "auth.html",
        scope: {
            
        },
        controllerAs: "authRes",
        controller: AuthController,
        link: function(scope, elem, attr) {
            scope.isFormShown = false;
            scope.nameWasEntered = true;
        }
    };
}
//---------------------------------------------
function regist() {
    return {
        restrict: "E",
        replace: "true",
        templateUrl: "regist.html",
        scope: {
            
        },
        controllerAs: "registRes",
        controller: RegistController
    }
}
//---------------------------------------------
function user() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "user.html",
        controllerAs: "user",
        controller: 'UserController'
    }
}
//---------------------------------------------
function profile() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "profile.html"
    }
}
//---------------------------------------------
function letter() {
    return {
        restrict: "E",
        templateUrl: "letter.html",
        scope: {
            letter: "=letter",
            num: "@"
        }
    };
}
//---------------------------------------------
function welcome() {
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            element.on("click", function() {
                alert(attrs.welcome);
            });
        }
    }
}
//-------------- U4et zatrat ------------------
function accountOfExpenses() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "accountOfExpenses.html"
    }
}
//---------------------------------------------
function expense() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "expense.html"
    }
}
//---------------------------------------------
function buying() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "buying.html",
        controllerAs: "buyings",
        controller: 'BuyingsController'
    }
}
//---------------------------------------------
function addBuying() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "addBuying.html"
    }
}
//---------------------------------------------
function profits() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "profits.html"
    }
}
//---------------------------------------------
function widgets() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "widgets.html",
    }
}
//---------------------------------------------
function currencyConverter(convertIntoRubles, Restangular) {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "currencyConverter.html",
        scope: {
            
        },
        link: function($scope, elem, attr) {
            $scope.currency = "100EUR";
            $scope.rubles = "0";
            $scope.$watch("currency", function(value) {
                convertIntoRubles(value, $scope);
            });
        }
    }
}