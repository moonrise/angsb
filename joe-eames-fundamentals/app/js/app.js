'use strict';

var eventsApp = angular.module("eventsApp", ["ngSanitize", "ngResource"])
    .factory("myCache", function($cacheFactory) {       // inline service registration
        return $cacheFactory("myCache", {capacity: 3});
    });