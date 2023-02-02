const array= [
    {id:1,name:"Bilal", city:"Lahore"},
    {id:1,name:"Bilal", city:"Lahore"},
    {id:3,name:"Hafsa", city:"Karachi"},
    {id:4,name:"Rehan", city:"Lahore"},
    {id:5,name:"Saqib", city:"Karachi"},
    {id:6,name:"Farhan", city:"Islamabad"}
  ]

    function func(array,key){
        const emptyObject ={};
        for( let element =0;  element < array.length; element++){
            if((array[element][key] in emptyObject)===false) {  /*check if a key is already exist or does not exist in object_acumulator */
                emptyObject[array[element][key]] = emptyObject[array[element][key]]   /* making key of object */ 
                emptyObject[array[element][key]] = [];                         /* initilizing key_value to empty list*/ 
                }   
                emptyObject[array[element][key]].push(array[element]); 
        }
        return emptyObject;
    }
    console.log('\nGroupByCity:\n\n', func(array,'city'),'\n\n');
  