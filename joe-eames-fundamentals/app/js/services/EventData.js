'use strict';

eventsApp.factory("eventData", function () {
    return {
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