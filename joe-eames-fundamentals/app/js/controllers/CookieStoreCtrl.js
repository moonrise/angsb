'use strict';

eventsApp.controller("CookieStoreCtrl", function($scope, $cookieStore) {
    $scope.event = { id: 1, name: "my event"}

    $scope.saveCookie = function(event) {
        $cookieStore.put("event", event);
        $scope.loadCookie();
    }

    $scope.loadCookie = function() {
        $scope.cEvent = $cookieStore.get("event");
    }

    $scope.removeCookie = function() {
        $cookieStore.remove("event");
        $scope.loadCookie();
    }

    $scope.loadCookie();
});