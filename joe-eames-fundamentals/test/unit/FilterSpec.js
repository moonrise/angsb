'use strict';

describe("Duration Filter", function () {
    beforeEach(module("eventsApp"));

    //
    // notice "Filter" suffix added to the filter name
    //
    it('return "Half Hour" for 1', inject(function (durationFilter) {
        expect(durationFilter(1)).toBe("half hour");
    }));
});