import { assert } from "chai";
import { mathEnforcer } from "../mathEnforcer.js";

describe("Add five methods", function(){
    it("test with invalid value", ()=>{
        assert.isUndefined(mathEnforcer.addFive("Pesho"), "result must be undefined");
        assert.isUndefined(mathEnforcer.addFive([5]), "result must be undefined");
        assert.isUndefined(mathEnforcer.addFive({num: 10}), "result must be undefined");
    });

    it("test with valid value", ()=>{
        assert.deepEqual(mathEnforcer.addFive(10), 15, "result is correct (15)");
        assert.deepEqual(mathEnforcer.addFive(-5), 0, "result is correct (0)");
        assert.deepEqual(mathEnforcer.addFive(0), 5, "result is correct (5)");
        assert.deepEqual(mathEnforcer.addFive(-5.5), -0.5, "result is correct (0.5)");
    })
});

describe("Subtract ten method", function(){
    describe("Should return undefined when input is not a number", ()=>{
        it("test with string", ()=>{
            assert.isUndefined(mathEnforcer.subtractTen("5"), "result must be undefined");
            assert.isUndefined(mathEnforcer.subtractTen("Pesho"));
        });

        it("test with object", ()=>{
            assert.isUndefined(mathEnforcer.subtractTen({}), "result must be undefined");
        });

        it("test with array", ()=>{
            assert.isUndefined(mathEnforcer.subtractTen([]))
        });
    });

    describe("should return input minus 10 when input is a number", ()=>{
        it("test with negative value", ()=>{
            assert.equal(mathEnforcer.subtractTen(-10), -20, "result is correct (-20)");
            assert.equal(mathEnforcer.subtractTen(-0.5), -10.5, "result is correct (-10.5)");
        });

        it("test with zero", ()=>{
            assert.equal(mathEnforcer.subtractTen(0), -10, "result is correct (-10)");
            assert.equal(mathEnforcer.subtractTen(10), 0, "result is correct (0)");
        });

        it("test with positive value", ()=>{
            assert.equal(mathEnforcer.subtractTen(10.5), 0.5, "result is correct (0.5)");
            assert.equal(mathEnforcer.subtractTen(20), 10, "result is correct (10)");
        })
    });
});

describe("Sum method", ()=>{
    describe("Should return undefined when input is not a number (only one parameter)", ()=>{
        it("test with string", ()=>{
            assert.isUndefined(mathEnforcer.sum("5", 5));
            assert.isUndefined(mathEnforcer.sum(5, "5"));
        });

        it("test with object", ()=>{
            assert.isUndefined(mathEnforcer.sum({}, 5));
            assert.isUndefined(mathEnforcer.sum(5, {}));
        });

        it("test is array", ()=>{
            assert.isUndefined(mathEnforcer.sum([], 5));
            assert.isUndefined(mathEnforcer.sum(5, []));
        })
    });

    describe("Should return undefined when input is not a number (two parameters)", ()=>{
        it("test with string", ()=>{
            assert.isUndefined(mathEnforcer.sum("5", "10"));
        });

        it("test with object", ()=>{
            assert.isUndefined(mathEnforcer.sum({}, {}));
        });

        it("test with arr", ()=>{
            assert.isUndefined(mathEnforcer.sum([], []));
        })
    });

    describe("should return input minus 10 when input is a number", ()=>{
        it("test with negative value", ()=>{
            assert.equal(mathEnforcer.sum(10, -10), 0);
            assert.equal(mathEnforcer.sum(0, -10.5), - 10.5);
            assert.equal(mathEnforcer.sum(- 0.5, 0.5), 0);
            assert.equal(mathEnforcer.sum(0, 0), 0);
        });

        it("test with positive value", ()=>{
            assert.equal(mathEnforcer.sum(0, 10), 10);
            assert.equal(mathEnforcer.sum(0.5, 0.5), 1);
            assert.equal(mathEnforcer.sum(10, 10), 20)
        });
    })
})