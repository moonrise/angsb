(function() {

    var appModule = angular.module("appModule");

    var mainCtrl = function ($scope, $log, $interval, $location) {
        $scope.username = "angular";
        $scope.countdown = 5;

        var intervalTask = null;

        var onEachTick = function () {
            $scope.countdown -= 1;
            $log.debug("ng-log: counting down: " + $scope.countdown);

            if ($scope.countdown < 1 && intervalTask) {
                $log.debug("ng-log: searching user: " + $scope.username);
                $scope.search($scope.username);
            }
        }

        $scope.search = function (username) {
            if (intervalTask) {
                $log.debug("ng-log: canceling interval task at countdown " + $scope.countdown);
                $interval.cancel(intervalTask);
                intervalTask = null;
            }

            // todo: url not found error is not caught by the error function!
            $log.debug("ng-log: navigate to user view of : " + $scope.username);
            $location.path("/user/" + $scope.username);
        }

        // auto countdown
        intervalTask = $interval(onEachTick, 1000, $scope.countdown);
    }

    // register controller
    appModule.controller("mainCtrl", mainCtrl);

}());