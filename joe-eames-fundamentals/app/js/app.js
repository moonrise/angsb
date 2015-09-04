'use strict';

var eventsApp = angular.module("eventsApp", ["ngRoute", "ngSanitize", "ngResource", "ngCookies"])
    .config(function($routeProvider) {
        $routeProvider
            .when('/newEvent', { templateUrl: 'templates/NewEvent.html', controller: 'EditEventCtrl' })
            .when('/events', { templateUrl: 'templates/EventList.html', controller: 'EventListCtrl' })
            .when('/event/:eventId', { templateUrl: 'templates/EventDetails.html', controller: 'EventCtrl' })
            .otherwise({redirectTo: '/events'});
    })
    .factory("myCache", function($cacheFactory) {       // inline service registration
        return $cacheFactory("myCache", {capacity: 3});
    });