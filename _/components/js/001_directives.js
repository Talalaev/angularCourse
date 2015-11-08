function letter() {
    return {
        restrict: "E",
        templateUrl: "_/templates/letter.html",
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
        templateUrl: "_/templates/foalder.html"
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
        templateUrl: "_/templates/accountOfExpenses.html"
    }
}
//---------------------------------------------
function expense() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "_/templates/expense.html"
    }
}
//---------------------------------------------
function buying() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "_/templates/buying.html"
    }
}
//---------------------------------------------
function profits() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "_/templates/profits.html"
    }
}
//---------------------------------------------
function widgets() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "_/templates/widgets.html",
    }
}
//---------------------------------------------
function currencyConverter(convertIntoRubles) {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "_/templates/currencyConverter.html",
        scope: {
            
        },
        link: function($scope, elem, attr) {
            $scope.currency = "100EUR";
            $scope.rubles = "0";
            $scope.$watch("currency", function(value) {
                var typeCurrency = null;
                if (typeof value == "string" && value.length > 3) {
                    typeCurrency = value.slice(-3);
                }
                
                $scope.rubles = convertIntoRubles($scope.currency, typeCurrency);
            });
        }
    }
}