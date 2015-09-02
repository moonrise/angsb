'use strict';

eventsApp.controller("EventCtrl", function($scope) {
    $scope.event = {
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
    };

    $scope.upVote = function(session) {
        session.upVoteCount++;
    };

    $scope.downVote = function(session) {
        session.upVoteCount--;
    };

    $scope.snippet = "<span style='color:red'>hi there</span>";

    $scope.mystyle = {'color': 'blue'};

});