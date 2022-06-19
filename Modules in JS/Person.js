export default class Person{
    constructor(name){
        this.name = name
    }

    speak(){
        console.log('Hello, I am ' + this.name)
    }
}