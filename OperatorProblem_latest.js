const array = [
  "OR",
  ["<", "a", "b"],
  ["AND", ["==", "c", "d"], ["!=", "e", "f"]],
];
const recursiveFunction = function () {
  const newArray = [];
  return function func(element) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        if (Array.isArray(element[i])) {
          newArray.push(func(element[i])); //Checking if nested element is array or not//
          if (newArray.length === 3) {
            const oeprand2 = newArray.pop();
            const operand1 = newArray.pop();
            const operator = newArray.pop();
            const makingInfixExpression = "".concat(
              operand1,
              operator,
              oeprand2
            );
            newArray.push(makingInfixExpression);
            const expression = newArray.pop();
            return expression;
          }
        } else {
          newArray.push(element[i]); /// if next element is not array then simply push it into the newArray
        }
      }
      const oprand2 = newArray.pop();
      const operand1 = newArray.pop();
      const operator = newArray.pop();
      if (operator === "AND") {
        const makingInfixExpression = "".concat(
          "(",
          operand1,
          " ",
          operator,
          " ",
          oprand2,
          ")"
        );
        newArray.push(makingInfixExpression);
      } else {
        const makingInfixExpression = "".concat(operand1, operator, oprand2);
        newArray.push(makingInfixExpression);
      }
      const innerExpression = newArray.pop();
      return innerExpression;
    } else {
      return element;
    }
  };
};
const infixExpression = recursiveFunction();
console.log("infix Expression is:  ", infixExpression(array));
