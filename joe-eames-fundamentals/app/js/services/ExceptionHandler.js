'use strict';

//
// notice '$' prefix with $exceptionHandler; we're overriding angular $exceptionHandler
//
eventsApp.factory("$exceptionHandler", function() {
    return function(exception) {
        console.log("exception occurred:", exception);
    }
});