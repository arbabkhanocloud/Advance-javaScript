//********** Array Problem Task javascript ****************//
const array = [
            { id: "one", next: "two", value: null },
            { id: "two", next: "three", value: null },
            { id: "three", next: null, value: null }
        ]
function arrayProblem(array){
    const newArray=[];
    array.forEach(element=>{
            if(element.next ===null){
                newArray.push(element);
            }else{
                    let tempObject = Object.assign(element)
                    while( tempObject.next !== null){
                        for( let k =0; k<array.length;k++){
                            if(array[k].id === tempObject.next ){
                                tempObject.value = array[k];
                                tempObject=array[k];
                            }
                        }
                    }
                    newArray.push(element);
            }
    })
    return newArray;
}
console.log('\n')
console.log('outPut Array:  ',arrayProblem(array));
console.log('\n\n')
