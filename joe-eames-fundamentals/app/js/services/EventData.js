'use strict';

eventsApp.factory("eventData", function ($http, $resource, $log) {
    var resource = $resource("/data/event/:id", {id:"@id"});

    return {
        // option1: use call back
        getEvent: function (successcb) {
            //$http({method:"GET", url:"/data/event/1"})
            $http({method:"GET", url:"http://localhost:8000/data/event/1"})
                .success(function(data, status, headers, config) {
                    successcb(data);

                })
                .error(function(data, status, headers, config) {
                    $log.warn(data, status, headers, config);
                });
        },

        // option2: return promise
        getEvent2: function () {
            return $http({method:"GET", url:"/data/event/2"})
            //return $http({method:"GET", url:"http://localhost:8000/data/event/1"});
        },

        // option3: RestAPI
        getEvent3: function () {
            return resource.get({id:2});
        },

        save: function (event) {
            event.id = 9;
            $log.debug("event to save: ", event);
            return resource.save(event);
        },

        /* in memory data */
        event: {
            name: 'Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: "211 Tasman",
                city: "San Jose",
                province: "Bay"
            },
            imageUrl: "./img/angularjs-logo.png",
            sessions: [
                {
                    name: "Directives",
                    duration: 1,
                    upVoteCount: 0
                },
                {
                    name: "Services",
                    duration: 2,
                    upVoteCount: 112
                },
                {
                    name: "Scope",
                    duration: 3,
                    upVoteCount: 0
                }
            ]
        }
    }
});