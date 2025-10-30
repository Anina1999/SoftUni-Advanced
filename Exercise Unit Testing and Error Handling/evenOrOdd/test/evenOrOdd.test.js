import { assert } from "chai";
import  { isOddOrEven } from "../evenOrOdd.js";

describe("Tests for evenOrOdd function", function() {
    it("return undefined if input is not a string", ()=>{
        assert.equal(isOddOrEven(12345677), undefined, "input is must string");
    });

    it("returns even if input is correct and string length is even", ()=>{
        assert.equal(isOddOrEven("abc"), "odd", "input must be odd");
    });

    it("returns odd if input is correct and string length is odd", ()=>{
        assert.equal(isOddOrEven("abcd"), "even", "input must be odd");
    });
})