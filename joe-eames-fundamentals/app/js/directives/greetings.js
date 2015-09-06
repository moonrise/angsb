'use strict';

eventsApp.directive("greetings", function () {
    return {
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
        /*
        controller: function($scope) {
            $scope.sayHello = function() {
                //window.alert("Hello");
                alert("Hello");
            }
        },
        */
        //controller: 'greetings',
        controller: '@',
        name: 'ctrl'        // controller name attribute to be specified in the directive
    };
});

eventsApp.controller('greetings', function($scope) {
    $scope.sayHello = function() {
        //window.alert("Hello");
        alert("Hello3");
    }
});