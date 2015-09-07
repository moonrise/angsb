'use strict';

eventsApp.directive('collapsible', function() {
    return {
        restrict: "E",
        replace: true,
        template: "<div><h4 class='well-title' ng-click='toggleVisible()'>{{title}}</h4><div ng-transclude ng-show='visible'></div></div>",
        transclude: true,
        controller: function($scope) {
            $scope.visible = true;
            $scope.toggleVisible = function() {
                $scope.visible = !$scope.visible;
            }
        },
        scope: {
            title: '@'
        }
    }
});