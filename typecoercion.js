// Type coercion in JavaScript is the automatic or implicit conversion of one data type to another during operations that involve different data types.
// It is behviour of the JS engine where it changes the type of data when '==' operator is used for comparison.
// To avoid edge cases we use '===' operator. This prevents coercion and gives expected outputs

console.log( false == "" ); // true
console.log( false === "" ); // false
console.log( false == [] ); // true
console.log( false === [] ); // false
console.log( false == {} ); // false
console.log( false === {} ); // false
console.log( "" == 0 ); // true
console.log( "" === 0 ); // false
console.log( "" == [] ); // true
console.log( "" === [] ); // false
console.log( "" == {} ); // false
console.log( "" === {} ); // false
console.log( 0 == [] ); // true
console.log( 0 === [] ); // false
console.log( 0 == {} ) // False
console.log( 0 === {} ) // False
console.log( 0 == null ); // False
console.log( 0 === null ); // False

const num = 5;
const str = "5";
console.log(num == str); // true
console.log(num === str) // false

console.log("123"+1) //1231   // JavaScript performs type coercion and converts the number 1 into a string before concatenating it with "123." As a result, you get the string "1231" as the output.
console.log("123" + 1 + {}) // 1231 [object Object] //  JavaScript tries to convert the empty object {} into a string to perform the concatenation. The default string representation of an empty object is "[object Object]," so you get "1231[object Object]" as the final output.


/* when you use the + operator with strings and other data types, 
JavaScript may perform type coercion to convert values to strings and then concatenate them. 
This behavior can sometimes lead to unexpected results, */

console.log(123 + "123" + []) // 123123 
/* 
JavaScript attempts to convert the empty array [] into a string for concatenation. 
The default string representation of an empty array is an empty string, so it effectively does not change the existing string.
The + operator concatenates the empty string with "123123."
*/