function reversePolishCalculator(string) {
    console.log('Hello! This is calculator of reverse polish notation version 0.1.0')
  if (typeof string !== "string") {
    throw new Error("an argument should be a string");
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

  if (stack.length != 1) {
    throw new Error('The calculator broke down while calculating');
}
  return stack[0];

  function checkIsOperator(symbol) {
    return "+-*".includes(symbol);
  }
}

module.exports = reversePolishCalculator 
