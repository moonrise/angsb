'use strict';

eventsApp.controller("CompileCtrl", function($scope, $compile, $parse, $log) {
    $scope.doCompile = function(markup) {
        var fn = $parse('1+2');
        $log.info("parameter-less fn: ", fn());

        var context1 = { event: { name: 'x'}};
        var context2 = { event: { name: 'y'}};

        var getter = $parse('event.name');
        $log.info("scoped getter 1: ", getter(context1));
        $log.info("scoped getter 2: ", getter(context2));
        $log.info("scoped getter local: ", getter(context2, context1));

        var setter = getter.assign;
        setter(context1, "z");
        $log.info("scoped setter: ", context1.event.name);

        $compile(markup)($scope).appendTo(angular.element("#insertPoint"));
    };
});