'use strict';

eventsApp.directive("dateKeys", function () {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, controller) {
            angular.element(element).on('keydown', function(event) {
                return isNumericKeyCode(event.keyCode) ||
                        isForwardSlashKeyCode(event.keyCode) ||
                        isNavigationKeyCode(event.keyCode);
            })
        }
    };

    function isNumericKeyCode(keyCode) {
        return (keyCode >= 48 && keyCode <=57) || (keyCode >= 96 && keyCode <= 105);
    }

    function isForwardSlashKeyCode(keyCode) {
        return keyCode === 191;
    }

    function isNavigationKeyCode(keyCode) {
        switch (keyCode) {
            case 8:  // backspace
            case 35: // end
            case 36: // home
            case 37: // left
            case 38: // up
            case 39: // right
            case 40: // down
            case 45: // ins
            case 46: // del
                // need tab, enter, esc keys?
                return true;
            default:
                return false;
        }
    }
});