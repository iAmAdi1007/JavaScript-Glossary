/* Event Listeners */

// Adding Event Listener to a Button

/*Click Event : eventListener would take 3 arguments, the event(click/hover/keyDown), a callback function and a useCapture flag which defaults to True*/
const button = document.querySelector('button');
button.addEventListener('click',()=>{
    window.location.href = 'https://www.google.com';
})
button.addEventListener('click', handleClick);

function handleClick(event){
    console.log("From Handle Click");
    //console.log(event); // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
    console.log(event.type); // click
    console.log(event.target); // <button>Click Me</button>
    console.log(this);
    //console.log('Button was clicked');
}

/* "this" keyword : this keyword points to the element the event listener was called for/ this keyword is bound to whatever is before the addEventListener. Here it seems that "this" and event.target is more or less the same thing, but its NOT!!!! */

document.body.addEventListener('click', onClick, true);
function onClick(e){
    console.log("From onClick");
    console.log(e.target); // <button>Click Me</button>
    console.log(this); //<body>...</body>
}
/* In the above snippet e.target would be the actual element on which the event is called(some element inside body) while this would refer to body*/

/* Event Propagation Phases : Event Propagation occurs in 3 phases. 
=> Capturing Phase : First when the event is fired it captures the root element and gradually moves down the DOM to the body and then to the element(to capture the element) on which it was triggered.
=> Target Phase : When the element is captured the event is fired on the actual element.
=> Bubbling Phase : This is the phase when we move back, from the target element, back to the body and then back to the root.
*/

/* EVENT PROPAGATION EXAMPLE */
document.querySelector("#grandParent").addEventListener('click',()=>{
    console.log('GrandParent Called');
});
document.querySelector("#parent").addEventListener('click',()=>{
    console.log('Parent Called');
});
document.querySelector("#child").addEventListener('click',()=>{
    console.log('Child Called');
});

/* Execution Order of the Events : 
Child Called
Parent Called
GrandParent Called
Reason : By Default the useCapture flag is turned off, which is why the events are fired in the bubbling phase
In case the flag was turned on, then execution order of the Events would be:
GrandParent Called
Parent Called
Child Called
*/

/* Exploring the 3rd Parameter to the addEventListener() */
const abortController = new AbortController();
document.querySelector("#grandParent",()=>{
    console.log("Exploring 3rd Parameter");
},{
    capture : false, // Works the same as useCapture
    once : true, // this indicates that we want the event listener to fire only once, after one time just remove the event listener
    passive : true, // this indicates that we are telling the browser that we will not called e.preventDefault()
    signal : abortController.signal // This is used to remove the event listener
});

abortController.abort();
/* The parameter "once" can be replicated by removing the event listener in the callback function */

/* Removing Event Listeners --> removing button listener*/

button.removeEventListener('click', handleClick);

/* NOTE : When removing Event Listeners just be extra careful about the useCapture flag */

/* Some Events
dblclick : event is fired on double-click of the mouse
mousedown : event is fired as soon as the mouse button is clicked(could be left/right click)
mouseup : event is fired when the mouse click is released(could be left/right click)
click is basically a combination of mouseup and mousedown events
keydown : event is fired when a keyboard key is pressed. To know what key was pressed we can use e.code
keyup : event is fired when key is released 
scroll : scroll events can work on elements with scrollable content, we can make use of scrollTop to log out different heights from the container top using this scroll event
mouseenter : this event is fired when the mouse pointer moves inside the target element
mousemove : this event is fired when the mouse pointer is moved inside the target container
*/

window.addEventListener('keydown', (e)=>{
    console.log(e.code);
});
window.addEventListener('keyup', (e)=>{
    console.log("The key was released now");
});

scrollable.addEventListener('scroll', (e)=>{
    console.log(e.target.scrollTop);
});

// scrollable.addEventListener('mouseenter',(e)=>{
//     console.log(e.pageX, e.pageY);
// });
// scrollable.addEventListener('mousemove', (e)=>{
//     console.log(e.pageX, e.pageY);
// });

/* Drag And Drop */

//Step 1 : Make the element draggable. By default most elements in HTML are non-draggable except images which is why we put the attribute draggable="true"

//Step 2 : Adding an event listener to the element, in our case button
button.addEventListener('dragstart', e =>{
    console.log(e);
})

//Step 3 : For dropping elements into our container, we need the container to listen to "drop" event and in this case we are "prepending" the element to our container

scrollable.addEventListener('drop',()=>{
    scrollable.prepend(button);
})
// Step 4 : But here we see the container by default is not allowing us to drag the button into it, so we need to disable the default behaviour here

scrollable.addEventListener('dragover',e=>{
    e.preventDefault();
});

/* Event Delegation : WHY?? If there are a lot of event listeners inside a container for elements inside it, it will impact performance. Here is where we make use of Event Delegation 

What is Event Delegation? Rather than attaching different event handlers to the elements of the page, we should attach an event handler to the parent of those child elements*/

document.querySelector('#category').addEventListener('click', (e)=>{
    console.log(e.target);
    window.location.href = '/' + e.target.id;
})






