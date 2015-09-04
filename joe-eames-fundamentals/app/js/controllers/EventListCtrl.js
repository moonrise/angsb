'use strict';

eventsApp.controller("EventListCtrl", function($scope, eventData) {
    $scope.events = eventData.getAllEvents();
});