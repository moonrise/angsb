'use strict';

eventsApp.controller("CacheCtrl", function($scope, myCache) {
    $scope.addToCache = function(key, value) {
        myCache.put(key, value);
    };

    $scope.getFromCache = function(key) {
        return myCache.get(key);
    };

    $scope.getCacheStats = function() {
        return myCache.info();
    };
});