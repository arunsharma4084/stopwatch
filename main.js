const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const tens = document.querySelector('.tens');

const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let minute = 0;
let second = 0;
let hundredth = 0;
let interval;

startButton.addEventListener('click', startStopwatch)
stopButton.addEventListener('click', stopStopwatch)
resetButton.addEventListener('click', resetStopwatch)

function startStopwatch(){
  console.log('starting stopwatch')
  interval = setInterval(show, 10)
}

function stopStopwatch(){
  console.log('stopping stopwatch');
  clearInterval(interval);
}

function resetStopwatch(){
  console.log('resetting stopwatch');
  clearInterval(interval);
  second = 0;
  minute = 0;
  hundredth = 0;
  tens.innerHTML = '00';
  seconds.innerHTML = '00';
  minutes.innerHTML = '00';
}

function show(){
  console.log("jdhsguh")

  hundredth++;
  if(hundredth === 100){
    second++;
    hundredth = 0;
  }

  if(second === 60){
    minute ++;
    second = 0;
  }

  let minuteString = minute;
  let secondString = second;
  let hundredthString = hundredth

  if(second < 10) secondString = `0${secondString}`
  if(minute < 10) minuteString = `0${minuteString}`
  if(hundredth < 10) hundredthString = `0${hundredthString}`

  tens.innerHTML = hundredthString;
  minutes.innerHTML = minuteString;
  seconds.innerHTML = secondString; 
}
