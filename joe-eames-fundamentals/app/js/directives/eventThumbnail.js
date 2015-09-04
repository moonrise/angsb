'use strict';

eventsApp.directive("eventThumbnail", function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl:'../templates/directives/eventThumbnail.html',
        scope: {
            event: "=myEvent"
            //event: "=event"
            //event: "="
        }
    };
});
