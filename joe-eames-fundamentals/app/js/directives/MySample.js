'use strict';

eventsApp.directive("mySample", function ($compile) {
    return {
        restrict: 'E',
        link: function(scope, element, attrs, controller) {
            var markup = "<input type='text' ng-model='mySampleData'/> {{mySampleData}}<br/>";
            angular.element(element).html($compile(markup)(scope));
        },
        template: "<input type='text' ng-model='mySampleData'/> {{mySampleData}}<br/>"
    };
});