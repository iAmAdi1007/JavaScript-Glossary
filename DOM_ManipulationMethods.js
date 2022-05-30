document.getElementById("someId"); 
// Gets the element from the DOM where id="someId"

document.querySelector("button");
//A More generic selector for fetching DOM elements

document.querySelectorAll('li') // Returns Node Array
// In case there are more than one elements with <li> </li> tags, this method fetches all the data in an array of Nodes.
/* We use forEach to iterate through the array */
//However most array functions like map etc. cannot be directly applied to this node array. As an alternative we use "Array.from(arr)"

document.getElementsByClassName('className') // Returns HTML Collection
// Fetches all the elements as an array where the css selector class with value "className" has been added

document.getElementsByTagName('li'); //Returns HTML Collection

/* HTML Collection  vs Node Array

forEach loop does not work with HTML collection, we again would have to do "Array.from"

forEach loop works fine with Node Array which is why its recommended to use querySelector over getElementsByTagName

*/

/* Style : Used to change the style for a particular element */
const listItems = document.querySelectorAll('li');
listItems[0].style.color = "red"

/* Change Content */
listItems[0].textContent = "Changed Content";

/* For List Items we have a method */
listItems[0].value = 5;
/* This property will change the value:
1. Item first
2. Item second
3. Item third

Here value is 1,2,3. So when value is changed to 5, the succeding elements change their values to 6 and 7 respectively
*/

/* Set Attibute: Used to set attributes like class , values etc */
listItems[0].setAttribute('class','className');

/* Adding and Removing classes from DOM elements */
listItems[0].classList.add('blue big');
listItems[0].classList.remove('big');

/* Toggle : If the className is present it will remove it, if its not it will add it */
listItems[0].classList.toggle('big');

listItems[0].className = 'blue';//Not recommended as this would remove all the applied classes to our element.

/* RECOMMENDED USAGE : classList.add / remove */

/* Creating DOM Nodes */
const p = document.createElement('p');
p.textContent = "Hello World";

//Adding DOM node to the body
document.body.appendChild(p);
/* Append can be used for adding nodes as well as plain text*/
document.body.append("Text"); // This adds to the body a simple text

/* Prepend : Works just like append, instead of adding the element at the end of the selected element, it would add it at the beginning*/

document.body.prepend("Text"); // This would add Text as the first line of the body

/* .innerHTML : This method is used to get/set the HTML content of an element */
console.log(document.body.innerHTML);
document.body.innerHTML += "<p> This is a new Paragraph </p>"; // This will append this paragraph to the end of the body.

/*NOTE: Not a recommended way of using innerHTML as this tends to introduce a lot of bugs within the code */

// A usage of innerHTML could be to clear out the entire DOM tree
document.body.innerHTML = "";

/*NOTE : Another don't of using innerHTML is when we are trying to display user comments on the page, as the user might end up running some script tag on to the comment and using innerHTML would run the script tag which could end up screwing the web page*/
document.body.innerHTML += "<script> doSomethingBad() </script>"

/* Scenario : Add 3 items to the end of the list on the page */

for(let i = 0; i < 3; i++){
    const parent = document.querySelector('ol');
    const childElement = document.createElement('li');
    childElement.textContent = `Child Item ${i + 1}`;
    parent.append(childElement);
}

/* The above code works fine but is not the optimal way of doing. Here we are fetching the parent element on every iteration which is not super efficient. Also appending child on every iteration is not very efficient. Below are 2 ways of doing it in a more efficient way*/

//Method 1 : Using array to store elements and then spreading them
const parent = document.querySelector('ol');
const childElements = [];
for(let i = 0; i < 3; i++){
    const childElement = document.createElement('li');
    childElement.textContent = `Child item ${i + 1}`;
    childElements.push(childElement);
}
parent.append(...childElements);

//Method 2 : Using fragment to add elements and then adding fragment

const parentElement = document.querySelector('ol');
const fragment = document.createDocumentFragment();
for(let i = 0; i < 3; i++){
    const childElement = document.createElement('li');
    childElement.textContent = `Child item ${i + 1}`;
    fragment.append(childElement);
}
parentElement.append(fragment);

/* Removing elements : From a list of items remove first item*/

const itemList = document.querySelectorAll('li');
//Method 1 : Using parentNode
itemList[0].parentNode.removeChild(itemList[0]);
//Method 2 : Directly remove it
itemList[0].remove();

/* Window dimensions : Returns values in pixels */
console.log(window.innerHeight);
console.log(window.innerWidth);

/* Getting font size of an element */
console.log(itemList[0].style.fontSize) // This return empty string since the font property is not set on the element so alternatively we should use getComputedStyle

console.log(window.getComputedStyle(itemList[0]).fontSize) // Returns size as string

/* In case we have a scrollable component in our body, below are some imp functions for that */
const scrollable = document.getElementById('scrollable');
console.log(scrollable.clientHeight); // Height of the component in px including the padding
console.log(scrollable.offsetHeight); // Height of the component in px including the padding and the border
console.log(scrollable.scrollHeight); // Height of total scrollable container in px(Suppose height on the DOM is set to 90px but when we scroll the height comes out be 300 px, so this would return 300px)

console.log(scrollable.querySelectorAll('li')[0].offsetTop); // Distance between the top of outer border of the scrollable container to the selected element

/*  Scrolling */

scrollable.querySelectorAll('li')[5].scrollIntoView(); // Will bring the 6th element in the list which was earlier hidden(due to the property overflow:auto) into view

scrollable.scrollTo({
    top : scrollable.querySelectorAll('li')[0].offsetTop,
    behavior : "smooth"
}); // What this does is scrolls to the element position and behaviour determines the way the scrolling happens



