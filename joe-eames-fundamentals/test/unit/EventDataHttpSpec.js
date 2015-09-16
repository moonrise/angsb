'use strict';

describe('EventData', function() {
    beforeEach(module("eventsApp"));

    it('should issue a get request to /data/event/11', inject(function(eventData, $httpBackend) {
        $httpBackend.expectGET('/data/event/11');
        $httpBackend.when('GET', '/data/event/11').respond({});

        eventData.getEvent3(11);

        $httpBackend.flush();
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    }));

    it('should return what is expected', inject(function(eventData, $httpBackend) {
        $httpBackend.when('GET', '/data/event/11').respond({name: 'OK Event'});
        var event = eventData.getEvent3(11);
        $httpBackend.flush();

        expect(event.name).toBe("OK Event");
    }));

    it('should return id 9 for save', inject(function(eventData, $httpBackend) {
        $httpBackend.when('POST', '/data/event/9').respond({});
        var event = {name: 'new event'};
        eventData.save(event);
        $httpBackend.flush();

        expect(event.id).toBe(9);
    }));
});