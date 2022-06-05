import fetch from "node-fetch";
import {XMLHttpRequest} from 'xmlhttprequest'
import { Headers } from "node-fetch";
/* fetch is perhaps one of the most used APIs which is used to interact with the server. The server could be returning some sort of data which through fetch can be used. fetch API returns a promise(which is understandable as in most cases calls made to the server can take time) */

const url = "https://api.sampleapis.com/wines/reds";

//console.log(fetch(url)) // Returns a pending promise

// fetch(url)
//   .then(res => {
//       console.log("From Fetch")
//       console.log(res.status)
//       console.log(res.ok)
//       return res.json()
//     }) // Returns a pending promise which would resolve to a JSON
//   .then(console.log)
//   .catch(err => console.log(err));


/* If we need to pass query params along with the url, we can either directly add it in the URL or use constructor URL(). See example below */

let newUrl = new URL(url);
newUrl.searchParams.set('someParam', 'valueOfParam');
newUrl.searchParams.set('otherParam', 'valueOfOtherParam');

//Alternatively in a concise manner

newUrl = url + '?someParam=valueOfParam&otherParam=valueOfOtherParam';

/* Prior to fetch, we used XMLHttpRequest */


/*
const req = new XMLHttpRequest();
// Using JSON.parse to parse the responseText to JSON data
req.addEventListener('load', function(){
    console.log(JSON.parse(this.responseText));
});

req.open('GET', url);
req.send();
*/

console.log("-----------------------------------------------------------");

/* Using async - await to deal with promises : Emulation of then and catch*/

async function fetchData(){
    try {
        const res = await fetch(url);
        // Using res we have 2 more methods that can be used viz. status and ok
        // To find out what type of data is being returned from a request, we can run a method to get the headers of the response

        console.log(res.headers.get('content-type'));
        console.log(res.status); // Returns status code of the request
        console.log(res.ok); // Returns 200 in case of GET request
        const jsonResponse = await res.json();
        console.log(jsonResponse);
    } catch (error) {
        console.log(error);
    }
}

//fetchData();


// In case of using fetch to make a POST request, we need to specify the method which should be passed as a second parameter to the fetch call as an options object


async function fetchPost(){
    const data = {
        tourist_name : "Mike Tyson",
        tourist_email : "mike.tyson@gmail.com",
        tourist_location : "United States",
    }
    
    // const options = {
    //     method : 'POST',
    //     body : JSON.stringify(data),
    //     headers : {
    //         'Content-Type' : 'application/json; charset=utf-8'
    //     }
    // }
    // Instead of setting headers like above we can create a header object and append to it as well

    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    const options = {
        method : 'POST',
        body : JSON.stringify(data),
        headers
    }
    

    const res = await fetch('http://restapi.adequateshop.com/api/Tourist', options)
    //console.log(res.headers.get('content-type'));
    console.log(res.status)
    const jsonResponse = await res.json();
    console.log(jsonResponse);
}

fetchPost();

/* Sending Form Data to an API endpoint via POST */

const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

function onSubmit(e){
    const options = {
        method : 'POST',
        body : new FormData(form)  // This will take values from the 'HTML form' in key-value pairs where attribute 'name' would be key and value is what we would enter
        /*
        <form>
            <label for="username">UserName</label>
            <input id="username" type="text" name="username" />
        </form>

        */
    }
}

/* Handling Slow APIs : In case we have an API that returns a value after 5 secs and we want a behaviour such that any requests exceeding 2 sec mark should be aborted, we can make use of the abortController */

async function slowApi(){
    const abortController = new AbortController();
    setTimeout(() => {
        abortController.abort();
    }, 2000);

    const options = {
        signal : abortController.signal
    }
    try {
        const res = await fetch('someURL', options);
        const text = res.text();
        console.log(text);
    } catch (error) {
        console.log(error); // Catch becomes mandatory as this would throw an error saying : the user aborted a request
    }

}

//slowApi();








