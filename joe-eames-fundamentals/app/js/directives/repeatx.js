'use strict';

eventsApp.directive('repeatX', function() {
    return {
        //restrict: "E",        ==> no restriction by not having 'restrict' property!
        //replace: true,        ==> do not replace it; just add more after
        link: function(scope, element, attrs, controllers) {
            for (var i=0; i<Number(attrs.repeatX) - 1; i++) {
                element.after(element.clone().attr('repeat-x', 0));
            }
        }
    }
});