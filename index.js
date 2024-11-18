function reversePolishCalculator(string) {
    console.log('Hello! This is calculator of reverse polish notation version 0.0.1')
  if (typeof string !== "string") {
    console.log("an argument should be a string");
  }
  const symbols = string.split(" ");
  const stack = [];

  symbols.forEach((symbol) => {
    if (!isNaN(symbol)) {
      stack.push(Number(symbol));
    } else if (checkIsOperator(symbol)) {
      const b = stack.pop();
      const a = stack.pop();
      switch (symbol) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
      }
    }
  });
  return stack[0];

  function checkIsOperator(symbol) {
    return "+-*".includes(symbol);
  }
}

module.exports = reversePolishCalculator 
