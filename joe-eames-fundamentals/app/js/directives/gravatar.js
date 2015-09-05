'use strict';

eventsApp.directive('gravatar', function(gravatarUrlBuilder) {
    return {
        restrict: "E",
        template: "<img/>",
        replace: true,
        link: function(scope, element, attrs, controller) {
            attrs.$observe("email", function(newValue, oldValue) {
                if (newValue != oldValue) {
                    // notice that attrs are referring to the replace <img> tag by now!
                    attrs.$set('src', gravatarUrlBuilder.buildGravatarUrl(newValue));
                }
            });
        }
    }
});