import { FrontendExpert as frontendExpert} from "./helpers.js";
import Person from './Person.js' 

frontendExpert();

const person = new Person('Aditya')
person.speak()

if(true){
    const {conditionalExport} = await import('./conditionalExport.js')
    conditionalExport()
}

// IIFE
(function(){
    console.log('Example of IIFE')
})()
