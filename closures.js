/* What is a Closure ? */

// => A function bundled along with its lexical scope forms a closure. eg:

function parent(){
    const num = 5
    return function(){
        return num
    }
}

const child = parent();
//console.log(num);  --> This throws error as num does not exist in the Global Scope
console.log(child()) // Gives output as 5, smart garbage collection by JS Engine, as it garbage collects only those variables which would not be used further in the program. In the above case, the inner function forms a closure with its lexical scope which is the parent function and therefore even after the parent function has finished executing, the output 5 is observed


/*Uses of Closures
1. Private Functions    



*/

// PRIVATE FUNCTIONS

function makeFunctions(){
    let privateNumber = 0;
    function incrementPrivate(){
        privateNumber++;
        // console.log(privateNumber)
    }
    return {
        logNum : ()=> console.log('logNum Called:' + privateNumber),
        increment : ()=>{
            incrementPrivate()
            console.log('Incremented Value: ' + privateNumber)
        }
    }
}

const {logNum, increment} = makeFunctions();
const {logNum : logNum2 , increment : increment2} = makeFunctions();
logNum();
increment();
//incrementPrivate(); --> ReferenceError: incrementPrivate is not defined
// Here again neither incrementPrivate() function nor the variable privateNumber is accessible due to limited scope
logNum2();
increment2();

// Here we have the same values printed for both the calls, indicating that they are not sharing the same lexical scope. 2 Different parent scopes are created for the 2 calls


/* COMMON INTERVIEW QUESTION */

for(let i = 0; i < 3; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
/* OUTPUT:
0
1
2
*/
// Reason : the function setTimeout forms a closure with variable 'i' and prints 0,1,2 even after the loop ends 500ms ago. With 'let' being block scoped, JS creates a new version of variable 'i' in each iteration and attaches a setTimeout to i and stores it in the web API environment

for(var i = 0; i < 3; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
/* OUTPUT:
3
3
3
*/

// Reason : var is function scoped which means no new instances of the variable i is being created and is referencing the same variable i which on every iteration is getting incremented. When the loop exits, the value of the variable i is 3, post which the 3 setTimeouts are executed.

