'use strict';

eventsApp.controller("FilterCtrl", function($scope, $filter, durationFilter) {
    $scope.data = [];

    var d = $filter('duration');
    $scope.data[0] = d(1);
    $scope.data[1] = d(2);
    $scope.data[2] = d(3);
    $scope.data[3] = d(4);


    // option2
    $scope.data2 = [];

    $scope.data2[0] = durationFilter(1);
    $scope.data2[1] = durationFilter(2);
    $scope.data2[2] = durationFilter(3);
    $scope.data2[3] = durationFilter(4);
});