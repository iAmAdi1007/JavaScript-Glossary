/* What is function currying? 

The process of transforming a function to treat its parameters as a sequence of individual function calls that each take one parameter. eg: func(a, b, c) would transform into func(a)(b)(c)
*/

function sum(a, b, c){
    return a + b + c
}

function multiply(a, b, c){
    return a * b * c
}

console.log(sum(1, 2, 3))

console.log('Curried Function')

function curriedSum(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

console.log(curriedSum(1)(2)(3))

/* Transform a function to a curried function */

function transform(func){
    return function(a){
        return function(b){
            return function(c){
                return func(a,b,c)
            }
        }
    }
}

const curriedFunction = transform(sum);
console.log(curriedFunction(1)(2)(3))

const curriedMultiply = transform(multiply)
console.log(curriedMultiply(1)(2)(4))