'use strict';

describe('GravatarUrlBuilderSrvc', function() {
    beforeEach(module("eventsApp"));

    var email = "x@y.com";
    it('should contain image url reference', inject(function(gravatarUrlBuilder) {
        expect(gravatarUrlBuilder.buildGravatarUrl(email)).toContain(".jpg");
    }));
});