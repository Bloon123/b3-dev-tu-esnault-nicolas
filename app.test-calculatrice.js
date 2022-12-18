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

    it('6. Dividing by 0', function(done) {
        let calc = new Calculator();
        expect(function() { calc.divide(0) }).to.throw(Error);
        done();
    });

    it('7. Adding and subtracting negative numbers', function(done) {
        let calc = new Calculator();
        expect(calc.add(-10)).to.equal(-10);
        expect(calc.subtract(-5)).to.equal(-5);
        expect(calc.add(-15)).to.equal(-20);
        done();
    });
    
    it('8. Using floating point numbers', function(done) {
        let calc = new Calculator();
        expect(calc.add(10.5)).to.equal(10.5);
        expect(calc.multiply(1.5)).to.equal(15.75);
        expect(calc.divide(2.5)).to.equal(6.3);
        done();
    });
        
    it('9. Using non-numeric values', function(done) {
        let calc = new Calculator();
        expect(function() { calc.add('10') }).to.throw(TypeError);
        expect(function() { calc.subtract([5]) }).to.throw(TypeError);
        expect(function() { calc.multiply({ x: 5 }) }).to.throw(TypeError);
        expect(function() { calc.divide(null) }).to.throw(TypeError);
        done();
    });  
});
