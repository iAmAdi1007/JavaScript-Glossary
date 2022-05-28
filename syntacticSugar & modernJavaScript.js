const arr = [1,2,3,4];
/* Arrow functions are new to JS, introduced in the ES6 release */
let doubledArray = arr.map((value) => {
    return value * 2;
})
console.log(doubledArray);

/* If the function body is only returning one line of code, it can be written differently */
/* The code below does the exact same thing, but is far more concise. Without braces after the arrow indicates the part of function return the value hence we can skip return keyword as well */

doubledArray = arr.map(val => val * 2);
console.log(doubledArray);

/* Array De Structuring : Does not alter the array currently working on */
// const first = arr[0];
// const second = arr[1];

const [first, second] = arr;

console.log(first + " " + second);

/* Rest Operator : This operator can take in the values from where the elements have not been destructured */
const [firstElement, ...rem] = arr;
console.log(firstElement);
console.log(rem);

/* Object Destructuring */

const obj = {
    name : "Aditya",
    age : 27,
    designation : "Specialist Programmer",
    companyName : "Infosys Ltd."
}

const {name, age} = obj;
console.log(name + " " + age);

/* Rest Operator in Objects */
/* The key name should be same while de structuring but we can assign own variable names to the key */
const {name : firstName , ...rest} = obj;
console.log(rest);

/* Also while destructuring we can add in default values for values we might expect to come. eg: in the abpve object there is no company name, so we might want company Name as well */
const {age : empAge , companyName = "Amazon", ...remains} = obj;

// Here is companyName is present in the original object, that val will be picked, if not then it defaults to supplied value, here Amazon

console.log(companyName);
console.log(remains); // Rest operator adds all the keys to remains which have not been destructured, does not depend on sequence

// Another implementation of Object Destructuring
function print({age : empAge}){
    console.log(empAge);
}
print(obj);

function example(x, ...rest){
    console.log(x);
    console.log(rest);
}
example(1); 
/*  Output :
1
[]
*/

example(1, 2,3,4);
/* OUTPUT :
1
[ 2, 3, 4 ]
*/


/* Spread Operator : Again this does not alter the original array, Syntactically similar to Rest Operator, spread operator spreads the whole arr/object as and when required */

const arr1 = [1, 3, 5, 7]
const arr2 = [2, 4, 6, 8]

const merged = [...arr1 , ...arr2]
console.log(merged);
/* OUTPUT:
[
  1, 3, 5, 7,
  2, 4, 6, 8
]
*/
const putAnything = [-10, ...arr1, 7.8 , ...arr1];
console.log(putAnything);
/* OUTPUT:
[
  -10, 1, 3, 5, 7,
  7.8, 1, 3, 5, 7
]
*/

// Another implementation of Spread Operator
function findSum(a, b){
    console.log(a + b);
}
findSum(...arr1);


/* Template Literal */
let fName = "Aditya";
console.log(`Hello ${fName}`);

/* Null Coalescing Operator */

let defaultName = fName !== null ? fName : "Default Name";
//Alternatively using the null coalescing operator  "??"
fName = null;

defaultName = fName ?? "Default";
console.log(defaultName);

/* Optional Chaining */
let person = {
    // company : {
    //     website : "ExpertInJavaScript.com"
    // }
}

//console.log(person.company.website)

/* But what if the company does not exist. That would mean we are trying to access website property of undefined which throws us an error */
//console.log(person.company.website) -> Throws error

 
// Through Optional Chaining
console.log(person?.company?.website ?? "No website found");


/* Short Circuit Evaluation */
const cond = false;
function logWorld(){
    console.log("Hello World");
}

if(cond){
    logWorld();
}
//Alternatively
cond && logWorld();
