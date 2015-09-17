'use strict';

describe('event registration app', function() {

    describe('events page', function() {
        beforeEach(function() {
            browser.get('http://localhost:8000/events');
        });

        it('should have correct title and first event', function() {
            var list = element.all(by.repeater('event in events'));
            //console.info("list count ========>", list.count());
            expect(list.count()).toEqual(5);

            var titleElement = element(by.binding('event.name'));
            expect(titleElement.getText()).toEqual('Angular Boot Camp');
        });
    });

    describe('event details page', function() {
        beforeEach(function() {
            browser.get('http://localhost:8000/event/1');
        });

        it('should have correct title', function() {
            var list = element.all(by.repeater('session in event.sessions'));
            var titleElement = list.first().element(by.binding('title'));
            expect(titleElement.getText()).toEqual('Directives Masterclass');
        });

        it('should have correct count', function() {
            var list = element.all(by.repeater('session in event.sessions'));
            expect(list.count()).toEqual(3);
        });

        it('upvote should increment by 1', function() {
            element.all(by.deepCss('div.votingButton')).first().click();
            var firstVoteCount = element.all(by.binding('count')).first();
            expect(firstVoteCount.getText()).toEqual('1');
        });
    });
});