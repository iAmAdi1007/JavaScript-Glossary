//'use strict'

// this : "this" keyword in JS points to the current context object. 'this' binding happens at runtime

console.log(this)
// 'this' in global context is the window object

function logThis(){
    console.log(this)
}

logThis() // OUTPUT : undefined in case of using strict mode, when not using strict mode it prints the global window object
/* In strict mode, this will be undefined when calling functions at the top level */

const obj = {
    num : 10,
    logThis
}

obj.logThis();

// Using this on event listeners

const button = document.querySelector("#btn-click")

button.addEventListener('click', logThis);
/* Here 'this' logs out the element on which the event listener has been attached to */

/* However there is a nuance here, if instead of the function being a declarative function, an arrow function was used, logging out 'this' would return the window object, as arrow functions don't have their own 'this' binding */

// Binding with 'this' keyword
function bindThis(x, y){
    console.log(this)
    console.log(x, y)
}
const newObj = {
    num : 20
}

const boundObject = bindThis.bind(newObj, 40, 50) //.bind returns a function
boundObject(10, 20)
/* OUTPUT 
{num: 20}
40 50
*/

/* In the above example we are trying to bind the object with the function which is why logging out this would return a reference to the function. Also we are trying to pass the variables x & y as 40 & 50 which sets the value of x and y and then even if we try to pass the values in the boundObject, it would still consider the original 40 & 50 */

// Playing around

const newBoundObj = bindThis.bind(newObj, 30)
newBoundObj(10)
/* OUTPUT
{num: 20}
30 10
*/

/*
The above example we are trying to bind the object(newObj) to bindThis function. Here we have passed 30 as the first parameter to the function, and then 10 is passed as the second parameter through the returned bound function
*/

// Alternative to bind --> call [Difference b/w the two being bind returns a function while call does not return a function]

bindThis.call(newObj, 100, 120);
/* OUTPUT
{num: 20}
100 120
*/

/* HARD INTERVIEW QUESTION
In case we are passing 123 or for that matter any primitive instead of newObj, console.log(this) would print the primitive in strict mode. While in non-strict mode, JS would form a wrapper around and turn it to an object as we generally expect an object in that place. Similarly null and undefined are converted into global window object
*/

bindThis.call(123, 10, 12);
/* OUTPUT (Strict Mode)
123
10 12

OUTPUT(Non-Strict Mode)
Number {123}
10 12
*/

// Another alternative is to use 'apply'
/* Apply works in the same way as call, the only difference is that paramters need to be passed as an array in case of 'apply' */
bindThis.apply(newObj, [-100, -200])

// Array Functions
const arr = [1,2,3]
arr.forEach(function(num){
    console.log(num) // This would log out the numbers of the array in sequence
    console.log(this) // This would log out the global window object 3 times(in non-strict mode) as anonymous function do not have a 'this' binding. Also using an arrow function instead of the anonymous function would also end up printing the global window object 3 times(both strict and non-strict mode) 
});

// CLASS Usage(this)

class Person{
    constructor(name){
        console.log(this)
        this.name = name
        console.log(this)
    }

    intro(){
        console.log('Hello I am '+ this.name) // Here 'this' refers to the current object
    }
}

const adi = new Person('Adi')
adi.intro()







