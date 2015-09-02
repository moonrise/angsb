'use strict';

eventsApp.controller("EventCtrl", function($scope, eventData) {
    $scope.event = eventData.event;


    $scope.upVote = function(session) {
        session.upVoteCount++;
    };

    $scope.downVote = function(session) {
        session.upVoteCount--;
    };

    $scope.snippet = "<span style='color:red'>hi there</span>";

    $scope.mystyle = {'color': 'blue'};

});