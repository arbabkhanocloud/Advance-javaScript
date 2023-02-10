const array = [
  { id: "one", next: "two", value: null },
  { id: "two", next: "three", value: null },
  { id: "three", next: null, value: null },
];
const newArray = [];
array.forEach((element) => {
  if (element.next === null) {
    newArray.push(element);
  } else {
    let object = { ...element };
    newArray.push(recursiveFunction(object)); // Passing array_objects copy to recursive function
  }
});
// recursive function
function recursiveFunction(arrayobject) {
  if (arrayobject.next !== null) {
    const found = array.find((element) => element.id === arrayobject.next); //Finding the object in array of having 'id' qual to current object's 'next' value
    const cloningObject = { ...found };
    arrayobject.value = cloningObject; //assigning next object of array to current array_object's value
    recursiveFunction(arrayobject.value);
    return arrayobject;
  } else {
    return arrayobject;
  }
}
console.log("\nOutput Array:  \n", newArray, "\n\n");
