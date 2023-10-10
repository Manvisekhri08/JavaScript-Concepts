// this keyword is an object that the function is a property of.
// The value of this can vary depending on the context in which it's used. 

//1- It gives methods, access to their object.
var obj = {
    name: 'naruto',
    lalala: function(){
        return `lalala ${this.name}` // lalala get access to the object it is part of i.e obj
    },
    bububu(){ // new sytax
        return `bububu ${this.lalala()}` // bububu get access to the object it is part of i.e obj
    }
}
console.log(obj.bububu()); // bububu lalala naruto

// 2- Execute same code for multiple objects.
function importantName(){
    console.log(this.name) 
}
// Here we can use the same method for different objects as 'this' would return the object that the function is a property of
const name = 'Itachi';

const obj1 = {
    name: 'Uchiha',
    importantName: importantName
}
const obj2 = {
    name: 'Madara',
    importantName: importantName
}

obj2.importantName(); // Madara
obj1.importantName(); //Uchiha
console.log(name) //  Itachi

// 3 -  Global Context - When used in the global scope (outside of any function or object), this refers to the global object, which is window in a browser environment
//console.log(this === window); // true (in a browser)

// 4 - Function Context - Inside a regular function, this can vary depending on how the function is called. If the function is called as a standalone function (not as a method of an object), this typically refers to the global object.

// function myFunction() {
//     console.log(this === window);
//   }
//   myFunction(); // true

// 5 - Method Context: When a function is invoked as a method of an object, this refers to the object on which the method was called.

var person = {
    name: 'John',
    sayHello: function () {
      console.log('Hello, ' + this.name + '!');
    },
  };
  
  person.sayHello(); // Hello, John!
  
 // 6 - Constructor Context: When a function is used as a constructor to create new objects (with the new keyword), this refers to the newly created object.
 
 function Person(name) {
    this.name = name;
  }
  
  var john = new Person('John');
  console.log(john.name); // John
  
// 7 - Event Handlers: Inside event handlers, this often refers to the DOM element that triggered the event.

// document.querySelector('button').addEventListener('click', function () {
//     console.log(this); // Refers to the button element
//   });
  

// 8 - Arrow Functions: Arrow functions do not have their own this context; they inherit the this value from their enclosing function or scope.

// function myFunction() {
//     return () => {
//       console.log(this === window);
//     };
//   }
  
//   var arrowFunc = myFunction();
//   arrowFunc(); // true
  