function profileDirective() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "profile.html"
    }
}

module.exports = profileDirective;