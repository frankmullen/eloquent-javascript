var object1 = {value:10};
var object2 = object1;
var object3 = {value:10};

console.log(object1 == object2); // true 
//object 3 has the same value, but is not the same object
console.log(object1 == object3);

object1.value = 15;
//object2 is the same object as object1, so will update when object1 does
console.log(object2.value);
console.log(object3.value);