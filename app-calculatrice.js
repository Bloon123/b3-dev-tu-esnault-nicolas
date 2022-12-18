class Calculator {
    constructor() {
        this.currentValue = 0;
    }
    
    add(number) {
        this.currentValue += number;
        return this.currentValue;
    }
    
    subtract(number) {
        this.currentValue -= number;
        return this.currentValue;
    }
    
    multiply(number) {
        this.currentValue *= number;
        return this.currentValue;
    }
    
    divide(number) {
        this.currentValue /= number;
        return this.currentValue;
    }
    
    clear() {
        this.currentValue = 0;
        return this.currentValue;
    }
}

module.exports = {
    Calculator:Calculator
}


const calc = new Calculator();
console.log(calc.add(10)); // 10
console.log(calc.subtract(5)); // 5
console.log(calc.multiply(3)); // 15
console.log(calc.divide(3)); // 5
console.log(calc.clear()); // 0
