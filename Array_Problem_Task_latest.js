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
    const object = { ...element };
    newArray.push(recursiveFunction(object));
  }
});
// recursive function
function recursiveFunction(arrayobject) {
  if (arrayobject !== undefined && arrayobject.next !== null) {
    const found = array.find((element) => element.id === arrayobject.next); //Finding the object in array of having 'id' equal to current object's 'next' value
    arrayobject.value = { ...found };
    recursiveFunction(arrayobject.value);
  }
  return arrayobject;
}
console.log("\nOutput Array:  \n", newArray, "\n\n");
