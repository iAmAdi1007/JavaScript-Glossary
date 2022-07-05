addEventListener('message', e => {
    console.log(e.data)
})


const time = new Date()
while (new Date() - time < 3000) {
    //Do Nothing
}
console.log('Slow Operation Completed')
postMessage('Hello from Worker.js')

// We cannot do DOM Manipulation here as we do not have access to Document object in Web Worker