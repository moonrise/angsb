'use strict';

describe('EventListCtrl', function() {
    var $controllerConstructor, scope, mockEventData;

    beforeEach(module("eventsApp"));

    beforeEach(inject(function($controller, $rootScope) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockEventData = sinon.stub({getAllEvents: function() {}});
    }));

    it('should set the scope events to the result of getAllEvents call', function() {
        var mockEvents = {};
        mockEventData.getAllEvents.returns(mockEvents);

        /*var ctrl = */$controllerConstructor("EventListCtrl", {'$scope':scope, eventData:mockEventData});

        expect(scope.events).toBe(mockEvents);
    })
});