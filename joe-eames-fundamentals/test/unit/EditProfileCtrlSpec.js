'use strict';

describe('EditProfileCtrl', function() {
    var $controllerConstructor, scope, mockGravatarUrlBuilder;

    beforeEach(module("eventsApp"));

    beforeEach(inject(function($controller, $rootScope) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockGravatarUrlBuilder = sinon.stub({buildGravatarUrl: function() {}});
    }));

    it('build gravatar url from the given email', function() {
        $controllerConstructor("EditProfileController", {'$scope':scope, gravatarUrlBuilder:mockGravatarUrlBuilder});

        var email = "bj@bj.com";
        scope.getGravatarUrl(email);

        expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true);
    })
});