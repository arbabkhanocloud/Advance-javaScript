// **********************************  JavaScript Task #2 Operator Problem  ***********************************************

const array  = ["OR",["<","a","b"],["AND",["==","c","d"],["!=","e","f"]]]

const flatedArray = array.flat(Infinity); //removing nested arrays
let length = flatedArray.length;
let i = length-1;
console.log('\n');
let bufferArray=[];
let buff2=[];
let j=1;
while( i >= 0 ){ 
    if( bufferArray.length === 3){
        let firstElement = bufferArray[bufferArray.length -1];
        bufferArray.pop();
        let secondElement = bufferArray[bufferArray.length -1];
        bufferArray.pop(); 
        let thirdElement = bufferArray[bufferArray.length -1];
        bufferArray.pop(); 
        let temp ='';
        let temp2 = temp.concat(secondElement,firstElement,thirdElement)
        buff2.push(temp2);
    }else if( buff2.length === 2){
        let firstElement = buff2[buff2.length -1];
        buff2.pop();
        let secondElement = buff2[buff2.length -1];
        buff2.pop(); 
        let temp ='';
        let temp2;
        if(flatedArray[i] ==='AND' ){
             temp2 = temp.concat('(',firstElement,' ',flatedArray[i],' ',secondElement,')')
        }else if(flatedArray[i] ==='OR'){
            temp2 = temp.concat(firstElement,' ',flatedArray[i],' ',secondElement)
        }
        else{
             temp2 = temp.concat(firstElement,flatedArray[i],secondElement)
        }
        buff2.push(temp2)
        i--;
    }
    else{
        bufferArray.push(flatedArray[i])
        i--;
    }  
}
let finalExpression = buff2.toString();
console.log('\n\noutPut Answer:  ',finalExpression);
console.log('\n\n');
