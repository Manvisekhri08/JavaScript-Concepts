// var
// Variables declared with var are function-scoped, which means they are visible throughout the entire function in which they are defined.
// Variables declared with var are hoisted to the top of their containing function or global scope. This means you can use a var variable before it's declared, but it will have an initial value of undefined.
// var variables can be reassigned and have their values changed.
// var is stored in global memory space.

// function example() {
//     if (true) {
//       var x = 10;
//     }
//     console.log(x); // 10 (not block-scoped, hoisted)
//   }
//   example();

// let and const are block scope

// let
// Variables declared with let are block-scoped, which means they are confined to the nearest enclosing block (usually a pair of curly braces {}). 
// This makes let suitable for avoiding variable leakage from blocks like loops or conditionals.
// Like var, let variables are hoisted, but they are not initialized with a value. Trying to use a let variable before its declaration results in a ReferenceError.
// let variables can be reassigned, but they cannot be re-declared within the same scope.

// function example() {
//     if (true) {
//       let x = 10;
//     }
//     console.log(x); // ReferenceError: x is not defined
//   }
//  example();

 {
    let y = 'blocked scoped';    
    console.log(y);
 }

 // const
 // Like let, const variables are block-scoped.
 // const variables are hoisted but, like let, they are not initialized with a value. Trying to use a const variable before its declaration results in a ReferenceError.
 //  Variables declared with const cannot be re-assigned after their initial assignment. However, 
 // for objects and arrays declared with const, the object or array itself is immutable (you can't change the reference), but its properties or elements can be modified.

//  const pi = 3.14159;
//     pi = 3; // Error: Assignment to constant variable

const person = {
  name: 'John'
};
person.name = 'Jane'; // Allowed, the object itself is not reassigned
console.log(person)

// let an d const also get allocated a mwmory but they are stored in different memory space while var is stored in global memory

//you cannot access let and const declaration before you put a value in them

// TEMPORAL DEAD ZONE - is a time since when this let variable was hoisted and till it is intialised some value. Its only in 'let'. If you try to access some varible inside TDZ
// it gives you reference error. you cannot access variables inside TDZ. 