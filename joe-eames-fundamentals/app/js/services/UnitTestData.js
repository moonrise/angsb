'use strict';

//
// written to exercise unit test, solely for that purpose
//
eventsApp.factory('unitTestData', function() {
    return {
        getMyStuff: function() {
            return "myStuff";
        },
        getYourStuff: function() {
            return "yourStuff";
        },
        echo: function(e) {
            return e;
        }
    }
});
