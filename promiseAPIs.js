/* 1. promise.all()
it is used to handle multiple apis together
it takes array of promises as input => iterable
promise.all([p1, p2, p3]) -> it will make 3 parallel api calls and get the result
             ↓    ↓   ↓
             3s   1s  2s    to resolve

SUCCESS

lets assume all of them are success
output of promise.all will be array with result of all these three apis. [val1, val2, val3]
time taken :- 3secs after 3 secs it will give us the output
it will wait for all of them to finish

FAILURE
promise.all([p1, p2, p3])
one of the promises get rejected
promise.all([p1, p2, p3])
             ↓    ↓   ↓
             3s   1s  2s    -> p2 gets rejected after 1 sec
as soon as any of the promises get rejected, promise.all() will throw an error which it wil get in p2
after 1 sec, you will see an error. it not even wait for other promises.
p1,p3 will either accept or reject but promise.all will be rejected and throw an error
it will not wait for other promises */

// ******************************************************

// EXAMPLE :-
const p1 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("P1 succesful"), 3000);
})

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("P2 successful"), 1000);
    //setTimeout(() => reject("P2 fail"), 1000); // through error
})

const p3 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("P3 succesful"), 2000);
   // setTimeout(() => reject("P3 fail"), 2000);  
})
Promise.all([p1, p2, p3]).then(result => console.log(result)).catch((err) => console.error(err));



// Output : - all resolve then [ 'P1 succesful', 'P2 successful', 'P3 succesful' ]
// p2 is rejected then o/p :- P2 fail
// p3 is rejected then o/p :- P3 fail

// **************************************************************************************************************************************************************************************************

/* 2. promise.allSettled()
- i want results from promises whicha re sucessful
- to handle above, we use promise.allSettled([p1, p2, p3]) 
                                             ↓    ↓   ↓
                                             3s   1s  2s
- if all get success will get output [val1, val2, val3]
- but if one of them fails or rejected? lets say p2 gets rejected, promise.allSettled wait for all promises to settled. either success or fail doesn't matter
- after 3 secs it will wait for all the promises to be settled irrespective of success or failure, it will give you the output
- it will give you the object as output
o/p :- [val1, err2, val3]
*/

// ******************************************************

// EXAMPLE :-
const p4 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("P4 succesful"), 3000);
    //setTimeout(() => reject("P4 fail"), 3000);
})

const p5 = new Promise((resolve,reject) => {
    //setTimeout(() => resolve("P5 successful"), 1000);
    setTimeout(() => reject("P5 fail"), 1000); // through error
})

const p6 = new Promise((resolve,reject) => {
    //setTimeout(() => resolve("P6 succesful"), 2000);
    setTimeout(() => reject("P6 fail"), 2000);  
})
Promise.allSettled([p4, p5, p6]).then(result => console.log(result)).catch((err) => console.error(err));


/* if all get success O/p:- 
[
  { status: 'fulfilled', value: 'P4 succesful' },
  { status: 'fulfilled', value: 'P5 successful' },
  { status: 'fulfilled', value: 'P6 succesful' }
] */

/* if p2 gets rejected O/p:- 
[
  { status: 'fulfilled', value: 'P4 succesful' },
  { status: 'rejected', reason: 'P5 fail' },
  { status: 'fulfilled', value: 'P6 succesful' }
] */

/* if all gets rejected then OP:-
[
  { status: 'rejected', value: 'P4 fail' },
  { status: 'rejected', reason: 'P5 fail' },
  { status: 'rejected', reason: 'P6 fail' }
]
*/

// **************************************************************************************************************************************************************************************************

/* 3. promise.race()
remember the keyword settled
promise.race(p1, p2, p3) -> who finishes first is winner
             ↓    ↓   ↓
             3s   5s  2s
asap first promise is resolved, i.e. p3, it will give the value of p3 after 2sec
val 3 will be printed -> when first promise is successfull

failure
what if first promise/p3 was failure?
erro will be thrown from p3.
return result of first settled promise
whether a success or fail, it will return. won't wait for other promises to be "settled".
it will give you the first settled promise
settled can either be success/fulfilled/resolve or failure/rejected/reject
*/

// ******************************************************

//EXAMPLE :-
const p7 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("P7 succesful"), 3000);
    //setTimeout(() => reject("P7 fail"), 3000);
})

const p8 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("P8 successful"), 1000);
    //setTimeout(() => reject("P8 fail"), 1000); // through error
})

const p9 = new Promise((resolve,reject) => {
    //setTimeout(() => resolve("P9 succesful"), 2000);
    setTimeout(() => reject("P9 fail"), 2000);  
})
Promise.race([p7, p8, p9]).then(result => console.log(result)).catch((err) => console.error(err));



/*
1. if all are success OP :- P8 successful
2. if p2 is rejected OP :- P8 fail
3. if p3 is rejected OP :- P8 successful
*/

// **************************************************************************************************************************************************************************************************

/* 4. promise.any()
promise.any(p1, p2, p3) -> every much similar to race
            ↓    ↓   ↓
            3s   1s  2s
it will wait for first promise to be successful.
p2 become successful, it will return the value of p2

failure

what if p2 gets rejected,
promise.any() wait for success
after 2 sec, p3 gets success, it will return value of p3

what if p3 gets rejected
wait for p1 
p1 is success, it will return value of p1

what if everyhting fails?
return result will be aggregated error. this aggregated error wil be array of all three errors.
*/

// ******************************************************

// EXAMPLE :-
const p10 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("P10 succesful"), 3000);
    //setTimeout(() => reject("P10 fail"), 3000);
})

const p11 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("P11 successful"), 1000);
    //setTimeout(() => reject("P11 fail"), 1000); // through error
})

const p12 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("P12 succesful"), 2000);
    //setTimeout(() => reject("P12 fail"), 2000);  
})
Promise.any([p10, p11, p12]).then(result => console.log(result)).catch((err) => console.error(err));

/*
1. if all are success :- OP :- P11 successful

2. if p2 is rejected :- OP :- P12 successful

3. if p2, p3 is rejected :- OP :- P10 successful

4. if all are rejected :- OP :- 
[AggregateError: All promises were rejected] {
  [errors]: [ 'P10 fail', 'P11 fail', 'P12 fail' ]
}
*/

// **************************************************************************************************************************************************************************************************

