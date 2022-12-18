const Calculator = require('../src/app-calculatrice').Calculator;
const expect = require('chai').expect;

describe('Testing the Calculator Functions', function() {
    it('1. Adding two numbers', function(done) {
        let calc = new Calculator();
        expect(calc.add(10)).to.equal(10);
        expect(calc.add(5)).to.equal(15);
        done();
    });
    
    it('2. Subtracting a number', function(done) {
        let calc = new Calculator();
        expect(calc.subtract(5)).to.equal(-5);
        done();
    });
    
    it('3. Multiplying a number', function(done) {
        let calc = new Calculator();
        expect(calc.multiply(5)).to.equal(0);
        expect(calc.add(10)).to.equal(10);
        expect(calc.multiply(5)).to.equal(50);
        done();
    });
    
    it('4. Dividing a number', function(done) {
        let calc = new Calculator();
        expect(calc.divide(5)).to.equal(0);
        expect(calc.add(10)).to.equal(10);
        expect(calc.divide(5)).to.equal(2);
        done();
    });
    
    it('5. Clearing the current value', function(done) {
        let calc = new Calculator();
        expect(calc.add(10)).to.equal(10);
        expect(calc.clear()).to.equal(0);
        done();
    });
});
