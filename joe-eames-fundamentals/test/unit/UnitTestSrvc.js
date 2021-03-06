'use strict';

describe('UnitTestSrvc - real data', function () {
    beforeEach(module("eventsApp"));

    it('my real data should work', inject(function (unitTestData) {
        expect(unitTestData.getMyStuff()).toBe("myStuff");
    }));

    it('your real data should work', inject(function (unitTestData) {
        expect(unitTestData.getYourStuff()).toBe("yourStuff");
    }));
});

describe('mock data', function () {
    var mockTestData;

    beforeEach(module("eventsApp"));

    beforeEach(function () {
        mockTestData = sinon.stub({
            getMyStuff: function () {
            },
            getYourStuff: function () {
            },
            echo: function (e) {
            }
        });

        module(function ($provide) {
            // have ng provide mock data in place of the real thing
            $provide.value('unitTestData', mockTestData);
        });
    });

    it('indirect my stuff should work', inject(function (unitTestData) {
        var myStuff = "Me";
        mockTestData.getMyStuff.returns(myStuff);
        expect(unitTestData.getMyStuff()).toBe(myStuff);
    }));

    it('indirect your stuff should work', inject(function (unitTestData) {
        var yourStuff = "You";
        mockTestData.getYourStuff.returns(yourStuff);
        expect(unitTestData.getYourStuff()).toBe(yourStuff);
    }));

    it('mock echo parameter check', inject(function (unitTestData) {
        mockTestData.echo("1");
        mockTestData.echo("2");
        expect(mockTestData.echo.args[0][0]).toEqual("1");
        expect(mockTestData.echo.args[1][0]).toEqual("2");
    }));
});

describe('get mock data indirectly', function () {
    var mockTestData;

    beforeEach(module("eventsApp"));

    beforeEach(function () {
        mockTestData = sinon.stub({
            getMyStuff: function () {
            },
            getYourStuff: function () {
            },
            echo: function (e) {
            }
        });

        module(function ($provide) {
            // have ng provide mock data in place of the real thing
            $provide.value('unitTestData', mockTestData);
        });
    });

    it('indirect my stuff should work', inject(function (unitTestService) {
        var myStuff = "me";
        mockTestData.getMyStuff.returns(myStuff);
        expect(unitTestService.getMyData()).toBe(myStuff);
    }));

    it('indirect your stuff should work', inject(function (unitTestService) {
        var yourStuff = "you";
        mockTestData.getYourStuff.returns(yourStuff);
        expect(unitTestService.getYourData()).toBe(yourStuff);
    }));

    it('echo should work', inject(function (unitTestService) {
        var echoValue = "eheh";
        expect(unitTestService.echo(echoValue)).toBe(echoValue);
    }));
});
