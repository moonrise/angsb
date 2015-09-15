'use strict';

describe('UnitTestSrvc', function () {
    var mockTestData;

    beforeEach(module("eventsApp"));

    describe('real data', function () {
        it('my real data should work', inject(function (unitTestData) {
            expect(unitTestData.getMyStuff()).toBe("myStuff");
        }));

        it('your real data should work', inject(function (unitTestData) {
            expect(unitTestData.getYourStuff()).toBe("yourStuff");
        }));
    });


    describe('mock data', function () {
        beforeEach(function () {
            mockTestData = sinon.stub({
                getMyStuff: function () {},
                getYourStuff: function () {}
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
    });


    describe('get mock data indirectly', function () {
        beforeEach(function () {
            mockTestData = sinon.stub({
                getMyStuff: function () {},
                getYourStuff: function () {}
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
});