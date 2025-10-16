import { expect } from 'chai';
import { createCalculator } from './addOrSubtract.js';

describe('createCalculator tests', function() {

    it('return object with add, subtract and get functions', () => {
        const calculator = createCalculator();
        expect(calculator).to.be.an('object');
        expect(calculator.add).to.be.a('function');
        expect(calculator.subtract).to.be.a('function');
        expect(calculator.get).to.be.a('function');
    });

    it('initialize with 0', () => {
        const calculator = createCalculator();
        expect(calculator.get()).to.equal(0);
    });

    it('add numbers', () => {
        const calculator = createCalculator();
        calculator.add(5);
        expect(calculator.get()).to.equal(5);
        calculator.add('10');
        expect(calculator.get()).to.equal(15);
    });

    it('subtract numbers', () => {
        const calculator = createCalculator();
        calculator.subtract(3);
        expect(calculator.get()).to.equal(-3);
        calculator.subtract('2');
        expect(calculator.get()).to.equal(-5);
    });

    it('add and subtract', () => {
        const calculator = createCalculator();
        calculator.add(10);
        calculator.subtract(5);
        expect(calculator.get()).to.equal(5);
    });

    it('original value of calculator is unmodified', () => {
        const calculator = createCalculator();
        expect(calculator.value).to.be.undefined;
        calculator.value = 100;
        expect(calculator.get()).to.equal(0);
    });

    it('handle floating point numbers', () => {
        const calculator = createCalculator();
        calculator.add(1.5);
        calculator.subtract('0.5');
        expect(calculator.get()).to.be.closeTo(1.0, 0.0001);
    });

    it('if string, return NaN', () => {
        const calculator = createCalculator();
        calculator.add('abc');
        expect(calculator.get()).to.be.NaN;
    });
});