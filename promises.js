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
