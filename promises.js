/* What is a Promise? */
// Promises are nothing but simple JS objects. The idea behind a promise is that it holds values for some asynchronous operation the result of which is not known to us

/* States of a Promise 
pending : the result of the promise is still pending
fulfilled : the result came out to be what was expected out of the promise
rejected : the result came out to be an error
*/

const promise = new Promise((resolve, reject) => {
  resolve("Success Message"); // Output : Promise { 'Success Message' }
  //reject("Some Error"); // Output : Some unhandled exception
});

console.log(promise); // In case the promise is not resolved(in our case commented) output : Promise { <pending> }

/* Asynchronous Nature of Promises */

const sample = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
    //reject(new Error("Something Went Wrong"))
  }, 1000);
});
console.log(sample);

// setTimeout(() => {
//     console.log(sample)
// }, 1500);

// There is another way of handling these promises, we can call a "then" on the promise

sample.then(
  (value) => {
    console.log(value);
  },
  (err) => console.log(err)
);

/* BONUS : A cooler way to write the value returned in case the promise is resolved */
sample.then(console.log);

// Another way is to chain the result of the resolve as this results in a promise too. Whatever we do inside of the "then" returns a promise of its own, which is why if resolved the given operation is performed else the same rejected operation gets thrown which can be  chained with the catch to handle the error
sample
  .then((val) => console.log(val))
  .catch((err) => console.log("Oops " + err));

// Another way of creating a promise is through the below syntax. The only difference is that the below syntax returns a settled Promise i.e. either rejected/resolved

const examplePromise = Promise.resolve("Resolved Promise");
console.log(examplePromise);

// Playing Around with Promises

const newPromise = new Promise((resolve, reject) => {
  resolve({
    title: "Playing with Promises",
    value: 2,
  });
});

console.log(newPromise);
newPromise
  .then((val) => {
    console.log(val.title);
    return val.value;
  })
  .then((val) => val * 2)
  .then((val) => val + 1)
  .then(console.log)
  .then((val) => {
    throw new Error("Something went Wrong");
  })
  .then(console.log)
  .catch((err) => {
    console.log("Oh No " + err);
    return 15;
  })
  .then((val) => console.log(val))
  .finally(() => console.log("Done")); // Finally executes no matter what. Even if the promise is rejected/resolved the finally block runs. In case the promise is pending it won't execute

/* Promise.all : This takes in an array of Promises and waits for then to either get resolved or rejected */

Promise.all([
  sample,
  newPromise,
  new Promise((res, rej) => {
    setTimeout(() => {
      res("Waiting for the Promise");
    }, 1500);
  }),
  //new Promise((res, rej)=>{}) // Here the promise is pending hence no output
  Promise.reject(new Error("Something went wrong")),
])
  .then(console.log)
  .catch((err) => console.log("This " + err));

/* Promise.race : This takes in an array of promises and focuses on the first promise to get rejected/resolved*/

Promise.race([
  new Promise((res, rej) => {
    setTimeout(() => {
      res("Promise 1");
    }, 1000);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      res("Promise 2");
    }, 1500);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      res("Promise 3");
    }, 500);
  }),
]).then(console.log); // Output : Promise 3

Promise.race([
  new Promise((res, rej) => {
    setTimeout(() => {
      res("Promise 1");
    }, 1000);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      res("Promise 2");
    }, 1500);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      rej("Oh No : Promise Rejected");
    }, 500);
  }),
])
  .then(console.log)
  // OUTPUT
  //node:internal/process/promises:246
  // triggerUncaughtException(err, true /* fromPromise */);
  // ^

  // [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Oh No : Promise Rejected".] {
  // code: 'ERR_UNHANDLED_REJECTION'
  // }
  .catch((err) => console.log("Error Handled-->" + err));

/* Promise.any : This takes in an array of promises but unlike Promise.race this waits for the first promise to get resolved and throws an error only in case none of the promises in the array got resolved(all got rejected) */

Promise.any([
  new Promise((res, rej) => {
    setTimeout(() => {
      res("Promise 1"); // OUTPUT : Promise 1
    }, 1000);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      res("Promise 2");
    }, 1500);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      rej("Oh No : Promise Rejected");
    }, 500);
  }),
])
  .then(console.log)
  .catch((err) => console.log("Error Handled-->" + err));
// In the above case, the 3rd promise in the array got rejected first after which the first promise got resolved. Promise.any instead of throwing an error on rejection of the 3rd promise waited for the first promise to get resolved.

Promise.any([
  new Promise((res, rej) => {
    setTimeout(() => {
      rej("Promise 1 rejected");
    }, 1000);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      rej("Promise 2 rejected");
    }, 1500);
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      rej("Promise 3 Rejected");
    }, 500);
  }),
])
  .then(console.log)
  // OUTPUT :
  // node:internal/process/promises:246
  //           triggerUncaughtException(err, true /* fromPromise */);
  //           ^

  // [AggregateError: All promises were rejected]
  .catch((err) => console.log("Error Handled"));

/* ASYNC - AWAIT : An alternative to then?? */

/* Async functions return promises */
async function demo() {
  return 35;
}

console.log(demo()); // OUTPUT : Promise { 35 }

/* Using await we can wait for the promise to get resolved/rejcted. We can use await only inside an async function */

async function demoAwait(){
  const value = await new Promise((res, rej)=>{
    setTimeout(()=>{
      res("Inside demoAwait")
    }, 1500)
  });
  console.log(value);
}

demoAwait();
