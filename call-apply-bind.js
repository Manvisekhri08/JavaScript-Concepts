// call(), apply(), and bind() are three methods in JavaScript that allow you to manipulate the this context of a function and also pass arguments to that function in various ways.
// They are often used when you need to control the value of this within a function or when you want to pass arguments to a function dynamically.

// call()
// The call() method is used to invoke a function with a specified this value and individual arguments passed as arguments.
// It takes the this value as its first argument and then accepts the function arguments as separate arguments.
// It immediately invokes the function with the provided this value and arguments.

function greet(name) {
    console.log(`Hi, ${name} ! I'm ${this.name}`)
};

const Person = {
    name : 'Obito',
    age : 27
}
greet.call(Person, 'Naruto')


// apply()
// The apply() method is similar to call(), but it accepts an array or array-like object as its second argument, which allows you to pass multiple arguments to the function.
// It also immediately invokes the function with the provided this value and arguments.

function meet(name1, name2) {
    console.log(`Hello, ${name1} and ${name2}! I am ${this.name}.`)
}

const people = {
    name : 'Madara',
    age : 100
}

meet.apply(people, ['Hashirama', 'Tobirama'])

// bind ()
// The bind() method returns a new function with a fixed this value but doesn't immediately invoke the function.
// It's useful when you want to create a new function that, when called, will have a predefined this context.

function see(name) {
    console.log(`Hi, ${name} ! I'm ${this.name}`)
}

const individual = {
    name : 'Shisui'
}

const newIndividual = see.bind(individual);
newIndividual('Itachi')

  