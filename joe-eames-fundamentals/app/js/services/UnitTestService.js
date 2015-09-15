'use strict';

//
// written to exercise unit test, solely for that purpose
//
eventsApp.factory('unitTestService', ['unitTestData', function(unitTestData) {
    return {
        getMyData: function() {
            return unitTestData.getMyStuff();
        },

        getYourData: function() {
            return unitTestData.getYourStuff();
        },

        echo: function(value) {
            return value;
        }
    }
}]);
