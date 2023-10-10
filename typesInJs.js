// There are 7 types in JS

// Primitive types
console.log(typeof 5); // number
console.log(typeof true); // boolean
console.log(typeof 'Hello there'); // string
console.log(typeof undefined); // undefined     // Represents a variable that has been declared but has not been assigned a value.
console.log(typeof null); // Null is of type object, this is mistake in JS  // Represents the intentional absence of any object value.
console.log(typeof Symbol('just symbol')); // Symbol - related to object properties(read more on this. new introduction in es6) Represents a unique and immutable value primarily used as object property keys.

// Non-Primitive types
console.log(typeof {}); // object
console.log(typeof function(){}); // Type of returns function, but function is also of type object {}
console.log(typeof ["red", "green", "blue"]); // object -> array
console.log(typeof Date()); // string -> date


/* In JS, the primitive types are passed by value, 
   i.e If we copy one var to another a new memory space is allocated and both the varibles have no link.*/

/** The non primitive types are passed by reference, 
 * i.e If we copy one var to another a new memory space is not allocated and both the varibles point to to the same location.
 * Now if we make changes to any of the variables, other will change
*/

/* Pass by Value: When a primitive data type (such as numbers, strings, or booleans) is passed to a function, a copy of the value is passed.
Changes made to the parameter inside the function do not affect the original value outside the function because they are working with separate copies */

function modifyValue(x) {
    x = x * 2;
    console.log(x); // Inside the function: 20
  }
  
  let num = 10;
  modifyValue(num);
  console.log(num); // Outside the function: 10
  // In this case, num remains unchanged because it's a primitive type (number), and the function is working with a copy of the value.

/* Pass by Reference (or Reference-Like): When objects (including arrays and functions) are passed to a function, a reference to the original object is passed. 
This means that changes made to the object's properties or elements inside the function will affect the original object outside the function because they both refer to the same object in memory. */

function modifyArray(arr) {
    arr.push(4);
    console.log(arr); // Inside the function: [1, 2, 3, 4]
  }
  
  let myArray = [1, 2, 3];
  modifyArray(myArray);
  console.log(myArray); // Outside the function: [1, 2, 3, 4]
  
// Here, myArray is modified both inside and outside the function because arrays are passed by reference in JavaScript. However, it's essential to note that JavaScript does not have true pass-by-reference for objects. Instead, it passes references (or references-like values) by value. This means that the reference itself is copied when passed to a function, but the reference still points to the same object in memory.  


/* The reason the name property didn't change back to "Bob" is because when you modify the name property inside the modifyObject function, 
you are directly modifying the object referenced by the person variable. Objects in JavaScript are passed by reference, 
which means that when you pass an object to a function, you're actually passing a reference to the same object in memory, not a copy of the object. */
function modifyObject(obj) {
    obj.name = "Alice";
    console.log(obj); // Inside the function: { name: 'Alice' }
  }
  
  let person = { name: "Bob" };
  modifyObject(person);
  console.log(person); // Outside the function: { name: 'Alice' }
  

  var a = {
    name: 'spar', 
    year: 1998
}
var c = {
    name: 'spar', 
    year: 1998
}
var b = a;
b.passout = 2019;

console.log(a);   // { name: 'spar', year: 1998, passout: 2019 }
console.log(b);   // { name: 'spar', year: 1998, passout: 2019 }
console.log(a === c); // false