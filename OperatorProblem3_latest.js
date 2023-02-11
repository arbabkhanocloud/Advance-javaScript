// ***********  JavaScript Task #2 Operator Problem  **********************
const array = [
  "OR",
  ["<", "a", "b"],
  ["AND", ["==", "c", "d"], ["!=", "e", "f"]],
];
const newArray = [];
const infixExpression = recursiveFunction(array); // passing given array to recursiveFunction function
console.log("Infix Expression is:  ", infixExpression);
// recursiveFunction function
function recursiveFunction(element) {
  if (Array.isArray(element)) {
    for (let i = 0; i < element.length; i++) {
      if (Array.isArray(element[i])) {
        newArray.push(recursiveFunction(element[i])); // if next element is array is array then passing it to recursiveFunction function
        if (newArray.length === 3) {
          const oeprand2 = newArray.pop();
          const operand1 = newArray.pop();
          const operator = newArray.pop();
          const emptyString = "";
          const makingInfixExpression = emptyString.concat(
            operand1,
            operator,
            oeprand2
          );
          newArray.push(makingInfixExpression);
          const expression = newArray.pop();
          return expression;
        }
      } else {
        newArray.push(element[i]);  /// if next element is not array then simply push it to the newArray
      }
    }
    const oprand2 = newArray.pop();
    const operand1 = newArray.pop();
    const operator = newArray.pop();
    const emptyString = "";
    if (operator === "AND") {
      const makingInfixExpression = emptyString.concat(
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
      const makingInfixExpression = emptyString.concat(
        operand1,
        operator,
        oprand2
      );
      newArray.push(makingInfixExpression);
    }
    const innerExpression = newArray.pop();
    return innerExpression;
  } else {
    return element;
  }
}