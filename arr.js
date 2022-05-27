const arr = [1,2,3,4]
console.log(arr);
//Alternate method to create an Array

const array = new Array(11,12,13,14);
console.log(array);

/*    Splice Function: Used to return part of the array for selected indexes
Works In Place, params : stIndex(inclusive) & endIndex(exclusive) */
console.log(arr.splice(0, 2));
console.log(arr);

// Can be used to insert elements as well. Inserting 10, 11 at 1st index
arr.splice(1, 0, 10, 11);
console.log(arr);

/* Slice Function : Used to return copy of the array for selected indexes
Returns a new array, params : stIndex(inclusive) & endIndex(exclusive)*/

let newArr = arr.slice(1, 3);
console.log(newArr);

/* Reverse : In place, Sort: In place(takes comparator)*/
console.log(arr.reverse());
const comparator = (a, b) => {
    if(a > b) return -1;
    else if(a < b) return 1;
    else return 0;
}
arr.sort(comparator);
console.log(arr);

/* Push: Adds element to the end of the array & Pop: Removes element from the end of the array methods*/
arr.push(15);
console.log(arr);

console.log(arr.pop());
console.log(arr)

//Alternative to add element to the end of the array
arr[4] = 193; // When array size is 4, using this we can add a fifth element to the array
console.log(arr);

/* Shift: Removes element from the start of the array and Unshift: Adds element to the start of the array. Time Complexity O(n) methods */
console.log(arr.shift());
console.log(arr);

arr.unshift(45);
console.log(arr);

//Type of Array : Object
console.log(typeof arr);
//Instance of & isArray : Usage to check if the given variable is an array as generally in JS most of the things are objects
console.log(Array.isArray(arr));
console.log(arr instanceof Array);


/* Concat Method: Returns a new array */
newArr = arr.concat(["Hello", "Javascript"]);
console.log(newArr);
console.log(arr);

/* Join Method: Returns a new string, params : a delimiter */
let str = arr.join('|');
console.log(typeof str);
console.log(arr);

/* For Each - Iterating through Array ***TERNARY USAGE***
NOTE :  When putting a function it takes the argument passed as this, for anonymous function the same does not work */
arr.forEach(function(value, index, array){
    console.log(value + ' @index: ' + index);
    console.log(value === this.num ? value : undefined);
    console.log(array);
},{num:10});

// FOR-OF loop for iterating
for (const value of arr) {
    console.log(value);
}

/* Map: Returns a new array, can be used to create a new array based on requirements but this will return the same size array in all cases
Filter: In place function, Used to apply a filter which is based on certain conditions, Mainly used to filter an array based on conditions
Reduce: Returns a new reduced value for the whole array, params : accumulator/prevValue and currValue. The we have an initial value that can be passed along with the callback function as a 2nd parameter */

newArr = arr.map(function(value){
    return value === this.num ? value : value * 2;
},{num : 10});
console.log(newArr);
console.log(arr);

newArr = arr.filter(function(value){
    return value === this.num
},{num : 10})

console.log(newArr);
console.log(arr);

console.log(arr.reduce((accumulator, currVal)=>{
    return accumulator + currVal;
},0));

// Reduce Right : This is similar to reduce, the only difference is the execution starts from the right rather than left

let res = arr.reduceRight((accumulator, currVal)=>{
    return accumulator - currVal;
},0);//Reduce with initial value
console.log(res);

res = arr.reduceRight((accumulator, currVal)=>{
    return accumulator - currVal;
}); //Recuce without the initial value
console.log(res);





