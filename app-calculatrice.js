class Calculator {
    constructor() {
      this.currentValue = 0;
    }
  
    add(value) {
      if (typeof value !== 'number') {
        throw new TypeError('Value must be a number');
      }
      this.currentValue += value;
      return this.currentValue;
    }
  
    subtract(value) {
      if (typeof value !== 'number') {
        throw new TypeError('Value must be a number');
      }
      this.currentValue -= value;
      return this.currentValue;
    }
  
    multiply(value) {
      if (typeof value !== 'number') {
        throw new TypeError('Value must be a number');
      }
      this.currentValue *= value;
      return this.currentValue;
    }
  
    divide(value) {
      if (typeof value !== 'number') {
        throw new TypeError('Value must be a number');
      }
      if (value === 0) {
        throw new Error('Cannot divide by 0');
      }
      this.currentValue /= value;
      return this.currentValue;
    }
  
    clear() {
      this.currentValue = 0;
      return this.currentValue;
    }
  }
  
  module.exports = { Calculator };
  


const calc = new Calculator();
console.log(calc.add(10)); // 10
console.log(calc.subtract(5)); // 5
console.log(calc.multiply(3)); // 15
console.log(calc.divide(3)); // 5
console.log(calc.clear()); // 0
