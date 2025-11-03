import { expect } from 'chai';

import { subSum } from './1. subSum.js';

describe('Common test', function () {
    it('sample assertions', () => {
        expect([1, 2, 3]).deep.equal([1, 2, 3]);
    });
    
    it('works with array of numbers and valid indexes', () => {
        const arr = [1, 2, 3, 4, 5] ;

        expect(subSum(arr, 1, 3)).to.equals(9);
    });

    it('works with end index out of bounds', () => {
        const arr = [10, 20, 30, 40, 50, 60];

        expect(subSum(arr, 3, 300)).to.equals(150);
    });
});