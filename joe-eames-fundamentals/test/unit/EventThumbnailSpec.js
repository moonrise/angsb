'use strict';

describe("EventThumbnail Directive", function () {
    var el;

    beforeEach(module("eventsApp"));

    // load external template if used
    beforeEach(module("../templates/directives/eventThumbnail.html"));

    beforeEach(inject(function ($compile, $rootScope) {
        var scope = $rootScope.$new();
        scope.event = {
            id: 1, name: 'Expo', date: '1/1/2015', time: '10:30'
        };

        el = angular.element('<event-thumbnail my-event="event"/>');
        $compile(el)(scope);
        scope.$digest();        // trigger binding cycle

        // debug only
        console.log(el[0].outerHTML);
    }));

    it('should bind data', function() {
        expect(el.text()).toContain("Expo");
        expect(el.text()).toContain("10:30");
    });
});