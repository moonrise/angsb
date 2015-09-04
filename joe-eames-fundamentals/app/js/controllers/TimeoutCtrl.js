'use strict';

eventsApp.controller("TimeoutCtrl", function($scope, $timeout) {
    setTimeout(function() {
        $scope.jsTimeoutMessage = "js";
    }, 2000);

    var promise = $timeout(function() {
        $scope.ngTimeoutMessage = "ng";
    }, 3000);

    $scope.cancel = function() {
        $timeout.cancel(promise);
    }
});