(function() {

    var appModule = angular.module("appModule");

    var userCtrl = function ($scope, $log, $routeParams, github) {
        $scope.username = $routeParams.username;
        $scope.error = "no";
        $scope.orderby = "name";

        var onGetUserOk = function (data) {
            $scope.user = data;
            github.getRepos($scope.user).then(onGetReposOk, onGetError);
        };

        var onGetReposOk = function (data) {
            $scope.repos = data;
        };

        var onGetError = function (reason) {
            $scope.error = "yes";
            $scope.user = null;
        };

        github.getUser($scope.username).then(onGetUserOk, onGetError);
    }

    // register controller
    appModule.controller("userCtrl", userCtrl);

}());