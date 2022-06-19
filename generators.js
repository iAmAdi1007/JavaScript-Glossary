/* What are generators?
An iterable object created by using a generator function

A generator function is created using a function* .Then each yield results in another item being added to the iterable generator object.


The generator object has 3 methods:
next->value : returns an object with the next value in the iterator and a done boolean. Optionally passes a value back into the generator function
return->value : Adds a passes in argument to the iterable result and ends execution
throw->error : Throws an error, stopping code execution unless the error is caught  
*/

//NOTE : we cannot use anonymous function for creation of generator functions

function* generate() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

const generateIterable = generate();
// console.log(generateIterable.next()) // { value: 1, done: false }
// console.log(generateIterable.next()) // { value: 2, done: false }
// console.log(generateIterable.next()) // { value: 3, done: false }
// console.log(generateIterable.next()) // { value: 4, done: true }
// console.log(generateIterable.next()) // { value: undefined, done: true }

// Alternative for-of loop

for (let value of generateIterable) {
  console.log(value);
}
/* OUTPUT
1
2
3
*/

// NOTE : for-of loop ignores any return statement

console.log(
  "********************************************************************"
);
/* Write a program to generate an iterable which should print values from 1 to the parameter value passed */

function* genIterable(arg) {
  for (let i = 1; i <= arg; i++) {
    yield i;
  }
}

const iterable = genIterable(10);
for (let val of iterable) {
  console.log(val);
}

// Passing values to next() method of the iterable object

function* genNumbers() {
  const value = yield 2; // When the first next() is called, it yielded 2 and that value is printed to the console
  yield value + 6; // When the second next(100) is called, value is replaced by the passed value i.e. 100 and prints 106 to the console
}

let numIterable = genNumbers();
console.log(numIterable.next()); // { value: 2, done: false }
console.log(numIterable.next(100)); // { value: 106, done: false }

numIterable = genNumbers();
console.log(numIterable.next()); //{ value: 2, done: false }
console.log(numIterable.return(101)); // { value: 101, done: true }
// The execution does not reach the last line and the iterable is done with the return value passed in the return(101) function. If nothing is passed, the execution still stops with value as 'undefined'
console.log(numIterable.next(100)); //{ value: undefined, done: true }

numIterable = genNumbers();
console.log("Demonstrating Throw");
console.log(numIterable.next()); // This is executed
//console.log(numIterable.throw(new Error("Some Error"))); // Error is thrown here and execution ends
console.log(numIterable.next(100));

console.log("Try and Catch");

try {
  numIterable = genNumbers();
  console.log("Demonstrating Throw");
  console.log(numIterable.next()) // This is executed
  console.log(numIterable.throw(new Error("Some Error"))) // Error is thrown here and execution ends
  console.log(numIterable.next(100));
} catch (error) {
    console.log(error + ' Handled')
}
