'use strict';

eventsApp.controller('greetings', function($scope) {
    var stuff = [];

    $scope.sayHi = function() {
        //window.alert("Hello");
        alert(stuff.join());
    };

    this.add = function(add) {
        stuff.push(add);
    };

    this.add("hi");
});

eventsApp.directive("greetings", function () {
    return {
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
        scope: {},
        controller: function($scope) {
            var stuff = [];

            $scope.sayHello = function() {
                //window.alert("Hello");
                alert(stuff.join());
            };

            $scope.add = function(add) {
                stuff.push(add);
            };

            $scope.add("hello");

            this.add = function(add) {
                $scope.add(add);
            }
        },
        //controller: 'greetings',
        //controller: '@',
        //name: 'ctrl'        // controller name attribute to be specified in the directive
    };
}).directive("add1", function() {
    return {
        restrict: 'A',
        require: 'greetings',
        link: function(scope, element, attrs, controller) {
            controller.add("1");
        }
    }
}).directive("add2", function() {
    return {
        restrict: 'A',
        require: 'greetings',
        link: function(scope, element, attrs, controller) {
            controller.add("2");
        }
    }
}).directive("greetings2", function() {
    return {
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayHi()'>Say Hi</button>",
        scope: {},
        controller: 'greetings'
        //controller: '@',      // this construct won't work with controller sharing
        //name: 'ctrl'
    }
}).directive("addx", function() {
    return {
        restrict: 'A',
        require: 'greetings2',
        link: function(scope, element, attrs, controller) {
            controller.add("x");
        }
    }
});
