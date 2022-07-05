const slowOp = document.getElementById('btn-slow')
const sayHello = document.getElementById('btn-hello')


const slowFunction = () =>{
    const worker = new Worker('worker.js') // Moved the slow code in worker.js
    worker.postMessage('Hello From Index.JS')
    worker.addEventListener('message', e => {
        console.log(e.data)
    })
}

const sayHelloFunction = () =>{
    console.log('Hello From The Other Side')
}

slowOp.addEventListener('click', slowFunction)
sayHello.addEventListener('click', sayHelloFunction)

