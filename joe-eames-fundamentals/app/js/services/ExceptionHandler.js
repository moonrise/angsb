'use strict';

eventsApp.factory("$exceptionHandler", function() {
    return function(exception) {
        console.log("exception occurred:", exception);
    }
});