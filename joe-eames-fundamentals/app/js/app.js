'use strict';

var eventsApp = angular.module("eventsApp", ["ngRoute", "ngSanitize", "ngResource", "ngCookies"])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/dyno', { template: 'hello dyno' })
            .when('/newEvent', { templateUrl: 'templates/NewEvent.html', controller: 'EditEventCtrl' })
            .when('/events', { templateUrl: 'templates/EventList.html', controller: 'EventListCtrl' })
            .when('/sampleDirective', { templateUrl: 'templates/SampleDirective.html', controller: 'SampleDirectiveCtrl' })
            .when('/event/:eventId', {
                foo: "bar",
                resolve: {
                    event: function($route, eventData) {
                        return eventData.getEvent3($route.current.pathParams.eventId).$promise;
                    }
                },
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventCtrl' })
            .otherwise({redirectTo: '/events'});

        $locationProvider.html5Mode(true);
    })
    .factory("myCache", function($cacheFactory) {       // inline service registration
        return $cacheFactory("myCache", {capacity: 3});
    });