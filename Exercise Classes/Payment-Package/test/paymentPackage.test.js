import { assert } from "chai";
import { PaymentPackage } from "../paymentPackage.js";

describe("PaymentPackage", function() {

    describe("constructor and getters", () => {
        it("should initialize correctly with valid arguments", () => {
            const pkg = new PaymentPackage("HR Services", 1500);
            assert.equal(pkg.name, "HR Services");
            assert.equal(pkg.value, 1500);
            assert.equal(pkg.VAT, 20);
            assert.isTrue(pkg.active);
        });
    });

    describe("name property", () => {
        it("should throw error if name is not a string", () => {
            assert.throws(() => new PaymentPackage(5, 100), 'Name must be a non-empty string');
            assert.throws(() => new PaymentPackage([], 100), 'Name must be a non-empty string');
            assert.throws(() => new PaymentPackage({}, 100), 'Name must be a non-empty string');
        });

        it("should throw error if name is empty string", () => {
            assert.throws(() => new PaymentPackage("", 100), 'Name must be a non-empty string');
        });
    });

    describe("value property", () => {
        it("should throw error if value is not a number", () => {
            assert.throws(() => new PaymentPackage("HR", "100"), 'Value must be a non-negative number');
            assert.throws(() => new PaymentPackage("HR", {}), 'Value must be a non-negative number');
        });

        it("should throw error if value is negative", () => {
            assert.throws(() => new PaymentPackage("HR", -10), 'Value must be a non-negative number');
        });

        it("should allow zero as value", () => {
            const pkg = new PaymentPackage("HR", 0);
            assert.equal(pkg.value, 0);
        });
    });

    describe("VAT property", () => {
        it("should throw error if VAT is not a number", () => {
            const pkg = new PaymentPackage("HR", 100);
            assert.throws(() => pkg.VAT = "abc", 'VAT must be a non-negative number');
        });

        it("should throw error if VAT is negative", () => {
            const pkg = new PaymentPackage("HR", 100);
            assert.throws(() => pkg.VAT = -1, 'VAT must be a non-negative number');
        });
    });

    describe("active property", () => {
        it("should throw error if active is not a boolean", () => {
            const pkg = new PaymentPackage("HR", 100);
            assert.throws(() => pkg.active = "true", 'Active status must be a boolean');
        });

        it("should set active correctly", () => {
            const pkg = new PaymentPackage("HR", 100);
            pkg.active = false;
            assert.isFalse(pkg.active);
        });
    });

    describe("toString()", () => {
        it("should return correct string when active", () => {
            const pkg = new PaymentPackage("HR", 100);
            const result = pkg.toString();
            assert.include(result, "Package: HR");
            assert.include(result, "Value (excl. VAT): 100");
            assert.include(result, "Value (VAT 20%): 120");
        });

        it("should show '(inactive)' when active is false", () => {
            const pkg = new PaymentPackage("HR", 100);
            pkg.active = false;
            const result = pkg.toString();
            assert.include(result, "(inactive)");
        });
    });
});