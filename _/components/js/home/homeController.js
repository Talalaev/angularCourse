function homeController($scope) {
    $scope.g = function() {
        this.check = !this.check;
    }
    $scope.check = true;
}

module.exports = homeController;