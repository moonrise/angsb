(function() {

    var appModule = angular.module("appModule");

    var repoCtrl = function ($scope, $log, $routeParams, github) {
        $scope.username = $routeParams.username;
        $scope.reponame = $routeParams.reponame;
        $scope.error = "no";

        var onRepoDetailsOk = function (data) {
            $scope.data = data;
        };

        var onError = function (reason) {
            $scope.error = "yes";
            $scope.user = null;
        };

        github.getRepoDetails($scope.username, $scope.reponame)
            .then(onRepoDetailsOk, onError);
    }

    // register controller
    appModule.controller("repoCtrl", repoCtrl);

}());