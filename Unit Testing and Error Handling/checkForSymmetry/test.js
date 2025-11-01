import { expect } from "chai";
import { isSymmetric } from "./checkForSymmetry.js";

describe('Tests for isSymmetric', function () {

    it('input is not an array', () => {
        expect(isSymmetric("string")).to.be.false;
    });

    it('symmetric single element array', () => {
        expect(isSymmetric([1])).to.be.true;
    });

    it('empty array', () => {
        expect(isSymmetric([])).to.be.true;
    });

    it('array is symmetric', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('array is not symmetric', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('similar but not symmetrical array', () => {
        expect(isSymmetric(['1', 1])).to.be.false;
    });

});