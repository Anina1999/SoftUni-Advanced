import { assert } from "chai";
import { lookupChar } from "../charLookup.js";

describe("Tests for charLookup function", () => {

    describe("Test if type of inputs are correct", () => {
        it("return undefined if first input is incorrect", () => {
            assert.isUndefined(lookupChar(5, 0), "input must be string");
            assert.isUndefined(lookupChar([], 0), "input must be string");
        });

        it("return undefined if second input is incorrect", () => {
            assert.isUndefined(lookupChar("5", "1"), "input must be number");
            assert.isUndefined(lookupChar("5", 1.23), "input must be integer");
        });

        it("return undefined if both elements in input are incorrect", () => {
            assert.isUndefined(lookupChar([], {}), "input elements must be string and a number");
        });
    });

    describe("If correct types, test if value of index is correct", () => {
        it("returns 'Incorrect index' if index is negative", () => {
            assert.equal(lookupChar("abc", -1), "Incorrect index");
        });

        it("returns 'Incorrect index' if index is equal to string length", () => {
            assert.equal(lookupChar("abc", 3), "Incorrect index");
        });

        it("returns 'Incorrect index' if index is greater than string length", () => {
            assert.equal(lookupChar("abc", 5), "Incorrect index");
        });
    });

    describe("If correct input, return character at index", () => {
        it("returns correct character at index 0", () => {
            assert.equal(lookupChar("abc", 0), "a");
        });

        it("returns correct character at middle index", () => {
            assert.equal(lookupChar("abc", 1), "b");
        });

        it("returns correct character at last index", () => {
            assert.equal(lookupChar("abc", 2), "c");
        });
    });
});