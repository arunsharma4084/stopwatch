let startTime;
let pausedTime =  0;
let interval;

let stopwatch = document.querySelector('.stopwatch')
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

startButton.addEventListener('click', startStopwatch)
stopButton.addEventListener('click', stopStopwatch)
resetButton.addEventListener('click', resetStopwatch)

function startStopwatch(){
    if(!interval){
        startTime = new Date().getTime() - pausedTime;
        interval = setInterval(updateStopwatch, 100)
    }
}

function stopStopwatch(){
    clearInterval(interval)
    pausedTime = new Date().getTime() - startTime;
    interval = null
}

function resetStopwatch(){
    stopStopwatch()
    pausedTime = 0;
    stopwatch.innerHTML = "00:00:00:00"
}

function updateStopwatch(){
    let currentTime = new Date().getTime()
    let elapsedTime = currentTime - startTime;
    let hundreds = Math.floor(elapsedTime / 10);
    let seconds = Math.floor(elapsedTime / 1000) % 60;
    let minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
    let hours = Math.floor(elapsedTime / 1000 / 60 / 60);
    let displayTime = addZeroes(hours) + ":" + addZeroes(minutes) + ":" + addZeroes(seconds) + ":" + addZeroes(hundreds).slice(-2)
    stopwatch.innerHTML = displayTime
}

function addZeroes(number){
    return (number < 10 ? `0${number}` : `${number}`)
}