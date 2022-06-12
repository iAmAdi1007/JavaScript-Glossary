const person = {
    isHuman : true
}

const child = Object.create(person) // Creating an object keeping 'person' as the protype, which means the child object inherits from person object
console.log(person)
console.log(child) // Logs empty object

console.log(child.isHuman) // Not a child property but since it inherits from person, it can use properties of the Person Class as and when required

// Alternative to Object.create is using __proto__ , but its use is getting deprecated

const parent = {
    isOlder: true
}

const childObj = {}
childObj.__proto__ = parent
console.log(childObj)
console.log(childObj.isOlder)

// Prototypal Inheritance is One Way, which means that adding properties to parent objects reflect in the child objects while the other way around is not true

childObj.maxAge = 20
console.log(parent.maxAge) // OUTPUT : Undefined
console.log(childObj.maxAge)



