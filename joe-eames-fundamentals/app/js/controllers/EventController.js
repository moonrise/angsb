'use strict';

eventsApp.controller("EventCtrl", function($scope, $log, eventData) {
    // in memory version
    var foo0 = function() {
        $scope.event = eventData.event;
    }

    // over the wire version - callback version
    var foo1 = function() {
        eventData.getEvent(function (event) {
            $scope.event = event;
        });
    }

    // promise version
    var foo2 = function() {
        eventData.getEvent2()
            .success(function (event) {
                $scope.event = event;
            })
            .error(function (data, status, headers, config) {
                // notice headers is treated as function ?!
                $log.warn(data, status, headers(), config);
            });
    }

    // RestAPI version - direct binding
    var foo3 = function() {
        $scope.event = eventData.getEvent3();
    }

    // RestAPI version - $promise
    var foo4 = function() {
        var resource = eventData.getEvent3();
        $log.info("immediate:");
        $log.info(resource);

        resource.$promise.then(
            function (event) {
                $log.info("promise-then: ");
                $log.info(resource);  // resource is the same as event
                $log.info(event);
                $scope.event = event;
            },
            function (response) {
                $log.warn(response);
            });
    }

    // RestAPI version - $promise (catch variation)
    var foo5 = function() {
        var resource = eventData.getEvent3();
        $log.info("immediate:");
        $log.info(resource);

        resource.$promise
            .then (function (event) {
                $scope.event = event;
            })
            .catch (function (response) {
                $log.warn(response);
            });
    }

    // get event data
    foo5();

    $scope.doTest = function() {
        eventData.save($scope.event);
    }

    $scope.upVote = function(session) {
        session.upVoteCount++;
    };

    $scope.downVote = function(session) {
        session.upVoteCount--;
    };

    $scope.snippet = "<span style='color:red'>hi there</span>";

    $scope.mystyle = {'color': 'blue'};

});