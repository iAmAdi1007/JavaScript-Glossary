/*Objects form the Core of JavaScript. Below is an instance of how objects can look like based on different scenarios*/

/*Getters and Setters included
Remember getters and setters are properties and NOT FUNCTIONS
*/
let obj = {
    name : "Aditya",
    designation : "Specialist Programmer",
    companyName : "Infosys",
    "years of experience" : 3.8,
    programmingLanguages : ["Java", "JavaScript"],
    greeting : ()=>{
        return "Hi! from Aditya";
    },
    get getName(){
        return this.name
    },
    set setName(name){
        this.name = name
    }
};

//Alternative way to create an object

let obj1 = new Object();
obj1.name = "Some Name";
console.log(obj1);

//Accessing object values
console.log(obj.name);

// Getter access
console.log(obj.getName + " From Getter");

//Setter Setting values
obj.setName = "adi";
console.log(obj.getName);

/* Where the key in the object is space separated/ has '-' separated words ex: "some-key", we cannot use dot operator. Instead we can use [] for accessing the object value*/

console.log(obj["years of experience"]);
console.log(obj.greeting());

/* Adding object keys */
obj.technolgiesKnown =["React JS", "JavaScript", "MongoDB", "Node JS"];
console.log(obj);

let key = "addedKey";
obj[key] = "This Key was added";
console.log(obj);
console.log(obj["addedKey"]);

/*Remove Key from the Object */

delete obj.addedKey;
console.log(obj);

/* Comparing Objects */
console.log({} == {}) // False [Gives the feel as if we are comparing 2 different objects]
console.log({} === {}) //False [Same]

let newObj = {};
console.log(newObj == {}) //false [Here we are trying to compare 2 different objects basically]

console.log(newObj == newObj) // true

/* ShortHand Operator */

let name = "Aditya"
/* newObj = {
    name : name
}
console.log(newObj) */
//Instead of the above we can do this

newObj = {
    name
};
console.log(newObj);

/* Constructor : Need -> What if we need to create two objects with same keys but different values. A constructor is nothing but a function, we use the name as a Capital letter following convention set up*/

function Website(name, company, designation){
    this.name = name;
    this.company = company;
    this.designation = designation;
}

const emp1 = new Website("SomeOne", "Amazon", "FrontEnd Engineer");
console.log(emp1);
console.log(emp1.company);

/* Checking if a key exists in the object */

// This method we generally don't use as this would return true in case the object is inheriting some properties(inherited/prototype properties) from a parent object
console.log("name" in obj); //true

console.log("toString" in obj); // true 
/* As seen above toString is something which our object inherits from the global object and is not present in our object */

/* hasOwnProperty for checking key in the object */
console.log(obj.hasOwnProperty("name")); //true
console.log(obj.hasOwnProperty("toString")); //


/* INHERITANCE -  Objects inheriting from other objects */
const obj2 = {
    __proto__ : obj
}

console.log(obj2); // Gives out empty objects
console.log(obj2.name); // Gives output as the value of name key in the parent object

/* Symbol: Its a primitive type in JS .It comes in use generally to create unique primitives*/
const sym = Symbol("A Symbol");
console.log(typeof sym);

const sym1 = Symbol('a');
const sym2 = Symbol('a');
console.log(sym1 === sym2) // false

//NOTE : for in loop ignores symbols
obj2[sym1] = "Hello";
obj2[sym2] = "JavaScript";
obj2.name = "Aditya Pratap";

/* Object.keys : Returns all the keys in an array
Object.values : Returns all the values in an array
Object.entries : Returns all the key-value pairs as an array

All the above functions ignore inherited/prototype proerties, Symbols
*/
console.log(Object.keys(obj2));
console.log(Object.values(obj2));
console.log(Object.entries(obj2));

Object.entries(obj2).forEach(([key, value])=>{
    console.log(key + ":" + value);
});
/* For-in Loop will include the inherited properties and ignore only the non-innumerable type(eg: toString  which are inherited from Global Object) and Symbols */
for(key in obj2) {
    console.log(key);
}

/* Object.freeze : Function used to freeze the properties. After running freeze on the object, the object properties can neither be altered nor new properties can be added to the object */
Object.freeze(obj2);
obj2.name = "New Name";
console.log(obj2);

/* Object.assign() : Copies all the properties except for non-innumerables & inherited properties from one object to another */
let obj4 = {
    achievements : "Awarded with Topper of School Certificate"
}

Object.assign(obj4, obj2);
console.log(obj4.companyName); //Undefined as the prototype properties are not copied

/* isFrozen() : Checks for an object if it is frozen or not */
console.log(Object.isFrozen(obj2));











