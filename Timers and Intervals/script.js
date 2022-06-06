// SET INTERVAL //
/* Its a web API which executes a piece of code in its body after every timeout interval mentioned as the second parameter. The first execution happens after the interval elapses*/
const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const counter = document.querySelector('#timer')

let timerId;
startButton.addEventListener('click', startTimer);

stopButton.addEventListener('click',stopTimer)

function startTimer(){
    timerId = setInterval(() => {
        counter.textContent++
    }, 500);
}

function stopTimer(){
    clearInterval(timerId)
}

startButton.removeEventListener('click', startTimer);
stopButton.removeEventListener('click', stopTimer);


/* The above code is buggy as if by mistake we click on start button twice, there will be 2 timers started at the same time and timerId variable will contain the id for the last timer that has been started. So clicking on stop will clear only the last interval. To stop the timer we would require to refresh the page*/


// SET TIMEOUT //
/* Another Web API which executes a piece of code in its body only once one the time which is passed as the second parameter elapses */
const timeoutID = setTimeout(() => {
    console.log("Prints after one second")
}, 2000);

clearTimeout(timeoutID);

/* The code in the setTimeout never executes as the timeout is cleared. Even if its timeout interval is 0, it won't get executed. The reason being event loop. Once the web API setTimeout is called, a timeout which is 0 in this case gets attached to the code and is stored in the web API environment. Since the timeout time was 0ms, it moves immediately to the call back queue. The event loop waits for the call stack to get empty which in this case is after execution of the GEC(which in turn contains clearTimeout). When the GEC executes, it clears the timeout when the setTimeout is still in the CallBack queue. */


// ANIMATION FRAMES(Using above event listeners already attached to Buttons)

// Through animation frames window gets repainted with what is called as part of the animation frame every 60ms
let animationFrameId;
startButton.addEventListener('click',start);
stopButton.addEventListener('click', stop);
let lastPaintTime = 0;
function start(startTime){
    animationFrameId = window.requestAnimationFrame(start);
    if((startTime - lastPaintTime)/1000 < 0.5) return;
    console.log(startTime);
    lastPaintTime = startTime;
    counter.textContent++;
}

function stop(){
    window.cancelAnimationFrame(animationFrameId)
}




