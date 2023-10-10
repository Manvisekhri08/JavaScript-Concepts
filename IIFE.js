// Immediatley Invoked Functions is a JS pattern used to create and execute function at the same time it is defined.
// Often used to encapsulate code within a private scope, preventing variables and functions defined within the function from polluting global scope
// Any variable or functions declared inside IIFE are not accessible outside og it,
// let and const further replaced IIFE as both let and const are block scope.

(function IIFE() {
    var x = 10
    console.log(x);
})();
// console.log(x);    // can't access x outside the scope

// IIFE avoid variable hoisting. Variables declared inside an IIFE are not hoisted to the top of their containing function or the global scope
var x = 10;
(function () {
  console.log(x); // undefined, not 10
  var x = 5;
})();

//  IIFE can create closures, which are functions that remember and have access to the variables from their containing scope. This is useful when dealing with asynchronous code or callbacks.
for (var i = 0; i < 5; i++) {
    (function (index) {
      setTimeout(function () {
        console.log(index);
      }, 1000);
    })(i);
  }
// Outputs 0, 1, 2, 3, 4 (with a delay)


// Using block-scoped variables with let
{
    let x = 10;
    console.log(x); // 10
  }
  