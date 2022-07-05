// Cookies are the first type of Browser Storage

// document.cookie = "user=Aditya"
document.cookie = "skill=JavaScript"
console.log(document.cookie) // OUTPUT : user=Aditya; skill=JavaScript
/*Even though we ran the cookie setting user, it persists till its expiration time, which by default is browser session*/

// Overriding cookie
document.cookie = 'user=Adi'
console.log(document.cookie) // OUTPUT : skill=JavaScript; user=Adi

/* Cookies cannot be deleted but can be removed by setting the expiration time to now or some date in the past*/
document.cookie = `user=Adi; expires=${new Date().toUTCString()}` // accepts date in UTC format
console.log(document.cookie) // OUTPUT : skill=JavaScript

// Alternative to expires is max-age
document.cookie = 'user=Adi'
console.log(document.cookie) // OUTPUT : skill=JavaScript; user=Adi
document.cookie = 'user=Adi; max-age=0'
console.log(document.cookie) // OUTPUT : skill=JavaScript

// Setting Path for a cookie, path should be within the website where it is used
document.cookie = 'highlights=failures; path=/Browser Storage'

// Some other params
document.cookie = 'highlights=failures; secure; samesite=strict' // secure => tranfer cookie only through https connection; samesite=strict  => no cross origin cookie transfer allowed

// getting cookie values

console.log(document.cookie)
const skill = document.cookie
    .split('; ')
    .find(cookie => cookie.startsWith("skill="))
    .split('=')[1]
console.log(skill)



/**************************************************************************************** */

//WEB STORAGE APIs : Local Storage and Session Storage
// Difference b/w local Storage and session storage is that local storage persists in the browser while session storage gets removed on the end of a session


localStorage.setItem('key','value')
localStorage.getItem('key')
localStorage.removeItem('key')
localStorage.clear()


/************************************************************************************** */

// INDEXED DBs