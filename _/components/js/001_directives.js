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
function foalder() {
    return {
        restrict: "E",
        templateUrl: "foalder.html"
    }
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
        templateUrl: "buying.html"
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