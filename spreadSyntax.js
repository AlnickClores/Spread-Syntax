// spread syntax in Javascript
// OBJECTS
console.log("SPREAD SYNTAX IN OBJECTS");
const object1 = {name: "Alnick", age: 20, email: "aclores@yahoo.com"}
const object2 = {...object1, email:"alnickc@gmail.com", isStudent: true}

console.log(object1);
console.log(object2);

//ARRAYS
console.log("SPREAD SYNTAX IN ARRAYS");

const array1 = ["Oreo", 15, false]
const array2 = [...array1, array1[0] = "Coco", "hehe"]

console.log(array1);
console.log(array2);
