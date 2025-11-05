import { expect } from 'chai';
import { findNewApartment } from '../findApartment.js';

describe('Main test suite', function() {
    
    describe('isGoodLocation', () => {
        
        it('to return success for Sofia, Plovdiv, Varna', () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
        });
    
        it('to fail for aaa', () => {
            expect(findNewApartment.isGoodLocation('aaa', true)).to.equal('This location is not suitable for you.');
        });

        it('to fail for false', () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal('There is no public transport in area.');
        });

        it('to throw for non-string', () => {
            expect(() => findNewApartment.isGoodLocation(5, true)).to.throw();
        });

        it('to throw for non-boolean', () => {
            expect(() => findNewApartment.isGoodLocation('Sofia', 5)).to.throw();
        });
    });

    describe('isLargeEnough', () => {
        it('returns larger or equals', () => {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 50)).to.equal('50, 60');
        });

        it('to throw for non-array', () => {
            expect(() => findNewApartment.isLargeEnough(5, 50)).to.throw();
        });

        it('to throw for empty array', () => {
            expect(() => findNewApartment.isLargeEnough([], 50)).to.throw();
        });

        it('to throw for string', () => {
            expect(() => findNewApartment.isLargeEnough('50, 60', 50)).to.throw();
        });

        it('to throw non-number', () => {
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], '50')).to.throw();
        });
    });

    describe('isItAffordable', () => {
        it('returns fail for price > budget', () => {
            expect(findNewApartment.isItAffordable(60, 50)).to.equal('You don\'t have enough money for this house!');
        });

        it('returns success for price < budget', () => {
            expect(findNewApartment.isItAffordable(40, 50)).to.equal("You can afford this home!");
        });

        it('returns success for price = budget', () => {
            expect(findNewApartment.isItAffordable(50, 50)).to.equal("You can afford this home!");
        });

        it('throws for non-number', () => {
            expect(() => findNewApartment.isLargeEnough('50', 50)).to.throw();
            expect(() => findNewApartment.isLargeEnough(50, '50')).to.throw();
        });

        it('throws for negative', () => {
            expect(() => findNewApartment.isLargeEnough(-1, 50)).to.throw();
            expect(() => findNewApartment.isLargeEnough(50, -1)).to.throw();
        });

        it('throws for zero', () => {
            expect(() => findNewApartment.isLargeEnough(0, 50)).to.throw();
            expect(() => findNewApartment.isLargeEnough(50, 0)).to.throw();
        });
    });
});