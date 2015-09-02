'use strict';

eventsApp.controller("EventCtrl", function($scope, $log, eventData) {
    // in memory version
    //$scope.event = eventData.event;

    // over the wire version - callback version
    eventData.getEvent(function(event) {
        $scope.event = event;
    });

    // over the wire version - promise version
    eventData.getEvent2()
        .success(function(event) {
            $scope.event = event;
        })
        .error(function(data, status, headers, config) {
            // notice headers is treated as function ?!
            $log.warn(data, status, headers(), config);
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