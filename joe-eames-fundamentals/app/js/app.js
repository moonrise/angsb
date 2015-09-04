'use strict';

var eventsApp = angular.module("eventsApp", ["ngSanitize", "ngResource", "ngCookies"])
    .factory("myCache", function($cacheFactory) {       // inline service registration
        return $cacheFactory("myCache", {capacity: 3});
    });