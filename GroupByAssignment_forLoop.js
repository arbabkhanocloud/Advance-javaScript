const array = [
  { id: 1, name: "Bilal", city: "Lahore" },
  { id: 1, name: "Bilal", city: "Lahore" },
  { id: 3, name: "Hafsa", city: "Karachi" },
  { id: 4, name: "Rehan", city: "Lahore" },
  { id: 5, name: "Saqib", city: "Karachi" },
  { id: 6, name: "Farhan", city: "Islamabad" },
];
function func(array, key) {
  const emptyObject = {};
  for (let elementIndex = 0; elementIndex < array.length; elementIndex++) {
    const elementKey = array[elementIndex][key];
    if (!(elementKey in emptyObject)) {
      /*check if a key is already exist or does not exist in object_acumulator */
      emptyObject[elementKey] = []; /*if not exist then making and initilizing key_value to empty list*/
    }
    emptyObject[elementKey].push(array[elementIndex]);
  }
  return emptyObject;
}
console.log("\nGroupByCity:\n\n", func(array, "city"), "\n\n");
