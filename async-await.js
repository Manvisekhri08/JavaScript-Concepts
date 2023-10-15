/* what is async?
keyword that is used before a function to create a async function
what is async function?


const promise = new Promise((resolve, reject) => {
    resolve("Promise resolved value");
})

//always return a promise
async function getData() {
    //return "IT WILL ALWAYS RETURN A PROMISE";
    return promise; // Promise resolved value
};

const dataPromise = getData();

// console.log(dataPromise);   ///Promise { 'IT WILL ALWAYS RETURN A PROMISE' }

dataPromise.then((res) => console.log(res)); // Promise resolved value

this async function will always return a promise or if it doesn't return promise eg if it returns some string then it will wrap the value inside the promise and return it.

using await with async
async and await combo is used to handle promises.

how we used to handle promises before async await
function getData() {
    promise.then(res => console.log(res));
}
getData(); //Promise resolved value

how we handle promises using async await
async function handlePromise() {
    const value = await promise; // you will write await in front of the promise that has been resolved
    console.log(value); // Promise resolved value
}
handlePromise();

await is a keyword that is only used inside your async function.


difference b/w normally handling promise and handling async await
why async await is important

EXAMPLE :- 1
const promiseSetTimeOut = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value using SetTimeOut");        // our promise will only resolve after 10 seconds 
    },10000)
}) 

const promiseSetTimeOut2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value using SetTimeOut 2");        // our promise will only resolve after 5 seconds
    },5000)
}) */

// **************************************************************************************************************************************************************************************************

// EXAMPLE :-2
/*const promiseSetTimeOut = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value using SetTimeOut");        // our promise will only resolve after 5 seconds 
    },5000)
}) 

const promiseSetTimeOut2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value using SetTimeOut 2");        // our promise will only resolve after 10 seconds
    },10000)
}) 

async function handleAsyncPromise() {
    console.log("Before await")
    //our js engine was waiting for promise to be resolved
    //once our promise is resolved , it will only go to next line once the promise is resolved.
    const result = await promiseSetTimeOut;
    console.log(result);
    console.log("Async Promise");
    const result2 = await promiseSetTimeOut2;
    console.log("Async Promise 2");
    console.log(result2);         
} 
handleAsyncPromise(); */

/*handleAsyncPromise(); // first Promise resolved value using SetTimeOut then Async Promise will be printed
EXAMPLE :- 1 OUTPUT
handleAsyncPromise(); // as this was resolved in 5 seconds still js waited for 10 sec then printed 1 first then this. both promises got resolved at same time so result2 waas printed immediately // even if we created 2 different promises they got resolved at same time.

EXAMPLE 2 :- OUTPUT
handleAsyncPromise(); // now the after 5 seconds our first promise is resolved and give us the output and then after 10 seconds second promise will get resolved and give us the output

how async/await works behind the scenes
First its empty
Examnple 2
as soon as handleAsyncPromise function is called it sees that there are 2 promises to be resolved that are taking their own time to be resolved
CALL STACK
as soon as handleAsyncPromise function is called it will push inside the call stack
JS synchronous single threaded language it starts executing code line by line it will first console Before await
then it will move further and it sees there is await promiseSetTimeOut now guess 1 is do the handleAsyncPromise() stay in stack wait for promise to be resolved?
no it will not, in fact the execution of handleAsyncPromise()  will get suspended and pops out for the time and it will wait till the promiseSetTimeOut is resolved then it will move ahead. promiseSetTimeOut will be resolved after 5 sec.
as call stack got empty after 5 sec handleAsyncPromise() again push inside and it will continue where it left from
then it sees another promise and check if it is resolved but 2nd promise will be resolved after 10 secs so again it will be suspended and wait for it to be resolved and handleAsyncPromise() push in again and continur the execution from where it left


Example 1
CALL STACK
now the first promise is 10 secs
so handleAsyncPromise() will move out of call stack and it will wait first promise to be resolved and then after resolved it will pushed in.
after 10 secs it will be printed
when handleAsyncPromise() moved to second promise and it will see second promise is already resolved and immediately print it.



with example 2
plain promise handling
function handleNormalPromise() {
    //js engine will not wait for promise to be resolved, it will move over to the next line.
    // when promise is resolved after 10 secs, then it will be printed
    promiseSetTimeOut.then((res) => console.log(res));
    console.log("Normal Promise");
}
handleNormalPromise(); // first Normal Promise will be printed then after 10 seconds Promise resolved value using SetTimeOut will be printed */

// **************************************************************************************************************************************************************************************************

// Example 3 :- without Promise setTimeout , using fetch 
const API_URL = "https://api.github.com/users/Manvisekhri08"
async function handlePromise() {
    const data = await fetch(API_URL);
    const dataJson = await data.json()
    console.log(data);
    console.log(dataJson);
}
handlePromise();

/* whats happening
when we call fetch it gives us a promise
handlePromise() will be suspended at line 131, and it will continue only after the fetch is resolved.
fetch returns a response
*/

/* how fetch works?
fetch is a promise when this promise is resolved it gives us a response object
response object has a body which is readable string 
if you want to convert this readable string to json all you have to do is
Response.json() again this is a promise
when this promise is resolved it gives the json value
fetch() => Response.json() => jsonValue
 */
