'use strict';

eventsApp.controller("EditEventCtrl", function($scope, $log, eventData) {
    $scope.saveEvent = function(event, editEventForm) {
        if (!$scope.hasOwnProperty("event") || !$scope.event.hasOwnProperty("name")) {
            window.alert("event name is not defined");
            return;
        }

        if (editEventForm.$valid) {
            eventData.save(event).$promise
                .then(function(response) { $log.debug("event " + event.name + " saved:", response)})
                .catch(function(response) { $log.debug("event " + event.name + " not saved: ", response)});
        }
    };
    
    $scope.cancelEvent = function () {
        window.alert("TODO: won't work?! window.location('/EventDetails.html')");
        window.location("/EventDetails.html");
        //window.location("EventDetails.html");
        //window.location("./EventDetails.html");
        //window.location("/app/EventDetails.html");
        //window.location("http://localhost:63342/angsb/joe-eames-fundamentals/app/EventDetails.html");
        //window.location("http://google.com");
    };
});
