const array2 = [
  { id: "one", next: "two", value: null },
  { id: "two", next: "three", value: null },
  { id: "three", next: null, value: null },
];
const newArray = [];
array2.forEach((element) => {
  if (element.next === null) {
    newArray.push(element);
  } else {
    let newobj = { ...element };
    newArray.push(arrrayProblemFUnction(newobj));
  }
});
function arrrayProblemFUnction(arrayobject) { //recursive Function
  if (arrayobject.next !== null) {
    let check = findingNextObject(arrayobject.next);
    if (check === false) {
      console.log("\n\nSorry Next object Not Found\n\n");
      return;
    } else {
      arrayobject.value = check;
    }
    arrrayProblemFUnction(arrayobject.value);
    return arrayobject;
  } else {
    return arrayobject;
  }
}
console.log("original array", array2);
console.log("\nOutput Array:  \n", newArray, "\n\n");

function findingNextObject(id) { // function to find next object in array
  let index = 0;
  var checkbool = false;
  while (!checkbool && index < array2.length) {
    if (array2[index].id === id) {
      checkbool = true;
      clone = { ...array2[index] };
      index--;
      return clone;
    }
    index++;
  }
  if (checkbool === false) {
    return false;
  }
}
