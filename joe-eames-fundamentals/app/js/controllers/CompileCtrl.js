'use strict';

eventsApp.controller("CompileCtrl", function($scope, $compile) {
    $scope.doCompile = function(markup) {
        $compile(markup)($scope).appendTo(angular.element("#insertPoint"));
    };
});