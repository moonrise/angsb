'use strict';

eventsApp.directive('repeatX', function($compile) {
    return {
        //restrict: "E",        ==> no restriction by not having 'restrict' property!
        //replace: true,        ==> do not replace it; just add more after
        /*
        link: function(scope, element, attrs, controllers) {
            for (var i=0; i<Number(attrs.repeatX) - 1; i++) {
                element.after($compile(element.clone().attr('repeat-x', 0))(scope));
            }
        },
        */
        compile: function(element, attrs) {
            for (var i=0; i<Number(attrs.repeatX) - 1; i++) {
                element.after(element.clone().attr('repeat-x', 0));
            }

            return function(scope, element, attrs, controller) {
                attrs.$observe('text', function(newValue) {
                    if (newValue.length > 3) {
                        element.css('color', 'yellow');
                    }
                    else {
                        element.css('color', 'white');
                    }
                });
            }
        }
    }
});