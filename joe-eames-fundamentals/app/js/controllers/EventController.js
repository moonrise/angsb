'use strict';

eventsApp.controller("EventCtrl", function($scope, eventData) {
    // in memory version
    //$scope.event = eventData.event;

    // over the wire version
    eventData.getEvent(function(event) {
        $scope.event = event;
    });

    $scope.upVote = function(session) {
        session.upVoteCount++;
    };

    $scope.downVote = function(session) {
        session.upVoteCount--;
    };

    $scope.snippet = "<span style='color:red'>hi there</span>";

    $scope.mystyle = {'color': 'blue'};

});