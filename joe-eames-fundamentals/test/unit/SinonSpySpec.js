'use strict';

describe("Sinon Spy", function() {
    it('should spy on a callback', function() {
            var spy = sinon.spy();
            mySUT.callCallback(spy);
            expect(spy.called).toBe(true);
        });
});