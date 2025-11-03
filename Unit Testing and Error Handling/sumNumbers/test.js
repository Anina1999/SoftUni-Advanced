import { expect } from 'chai';
import { sum } from './4. sumOfNumbers.js';

describe('Common tests for sumOfNumbers', function () {

    it('correct sum of numbers', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    });

    it('correct sum of positive and negative numbers', () => {
        expect(sum([1, -2, 3])).to.equal(2);
    });

    it('array is empty', () => {
        expect(sum([])).to.equal(0);
    });

    it('parse input to numbers', () => {
        expect(sum(['1', '2', '3'])).to.equal(6);
    });

    it('parse mixed input', () => {
        expect(sum([1, '2', 3])).to.equal(6);
    });

    it('sum 0', () => {
        expect(sum([0, 0, 0])).to.equal(0);
    });

    it('element is NaN', () => {
        expect(sum([1, 'a', 3])).to.be.NaN;
    });
});