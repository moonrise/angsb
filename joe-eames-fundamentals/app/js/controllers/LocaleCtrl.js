'use strict';

eventsApp.controller("LocaleCtrl", function($scope, $locale) {
    console.log("$scope: ", $locale);
    $scope.myDate = Date.now();
    $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;
});