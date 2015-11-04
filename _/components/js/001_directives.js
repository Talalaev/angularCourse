function letter() {
    return {
        restrict: "E",
        templateUrl: "_/templates/letter.html",
        scope: {
            letter: "=letter"
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