'use strict';

eventsApp.controller("MainMenuCtrl", function($scope, $log, $location) {

    // $location service show case
    $log.info('absUrl: ', $location.absUrl());
    $log.info('url: ', $location.url());
    $log.info('protocol: ', $location.protocol());
    $log.info('host: ', $location.host());
    $log.info('port: ', $location.port());
    $log.info('path: ', $location.path());
    $log.info('search: ', $location.search());
    $log.info('hash: ', $location.hash());

    $scope.goToNewEvent = function() {
        $location.replace();        // do not add to URL history
        $location.url('/newEvent');
    }
});