// **********************************  JavaScript Task #2 Operator Problem  ***********************************************

const array  = ["OR",["<","a","b"],["AND",["==","c","d"],["!=","e","f"]]]

const flatedArray = array.flat(Infinity,); //removing nested arrays
let length = flatedArray.length;
let i = length-1;
console.log('\n');
let bufferArray=[];
while( i >= 0 ){
    if( isOperator(flatedArray[i]) === true ){           // inCase of operator pop two operands and place operator between them and push into stack         
        let firstOperand = bufferArray[bufferArray.length -1];
        bufferArray.pop();
        let secondOperand = bufferArray[bufferArray.length -1];
        bufferArray.pop(); 
        let temp ='';
        let temp2;
        if(flatedArray[i] === 'AND' || flatedArray[i] === 'XOR' ){
            temp2 = temp.concat( '(', firstOperand, ' ', flatedArray[i], ' ', secondOperand, ')' )
            bufferArray.push(temp2);
        }else if(flatedArray[i] === 'OR' ){
            temp2 = temp.concat( firstOperand, ' ', flatedArray[i], ' ',secondOperand )
            bufferArray.push(temp2);
        }
        else{
            temp2 = temp.concat(firstOperand,flatedArray[i],secondOperand)
            bufferArray.push(temp2);
        }
    }
    else{
        bufferArray.push(flatedArray[i])
    }
    i--;
}
let finalExpression = bufferArray.toString();
console.log('inPut Array:\n\n',array);
console.log('\n\noutPut Answer:  ',finalExpression);
console.log('\n\n');
function isOperator(inputCharacter){
    switch(inputCharacter)
    {
        case 'OR':
        case '<':
        case 'XOR':    
        case 'AND':
        case '==':
        case '!=':
        case '/':
        case '^':
        case '+':
        case '-':
        case '*':       
        case '%':
            return true;
    }
    return false;
}