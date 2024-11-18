function reversePolishCalculator(string) {
    console.log('Hello! This is calculator of reverse polish notation version 1.1.0');
    if (typeof string !== "string") {
      throw new Error("an argument should be a string");
    }
    const symbols = string.split(" ");
    const stack = [];
  
    const operations = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b
    };
  
    symbols.forEach((symbol) => {
      if (!isNaN(symbol)) {
        stack.push(Number(symbol));
      } else if (checkIsOperator(symbol)) {
        const b = stack.pop();
        const a = stack.pop();
        stack.push(operations[symbol](a, b));
      }
    });
  
    if (stack.length !== 1) {
      throw new Error('The calculator broke down while calculating');
    }
  
    return stack.pop();
  }
  
  function checkIsOperator(symbol) {
    return "+-*".includes(symbol);
  }
  
  module.exports = reversePolishCalculator;
  
