let start = document.getElementById('action-btn')
let reset = document.getElementById('reset-btn')

let timeString = document.getElementById('time-string')

let min = 25;
let sec = 00;

let startTimer;

start.addEventListener('click', Start)
reset.addEventListener('click', Reset)

//Start Button
function Start(){
    start.removeEventListener('click', Start);   //Replace Start button with Stop button
    start.addEventListener('click',Stop);
    start.innerText =`Stop`
    startTimer = setInterval(timer, 1000)
    document.querySelector("#timerState").innerText = "Time to FOCUS";
}

//Stop Button
function Stop(){
    start.removeEventListener('click',Stop);    //Replace Stop button with Start Button
    start.addEventListener('click',Start);
    start.innerText=`Start`;
    stopInterval();
    startTimer = undefined;
    document.querySelector("#timerState").innerText = "Timer STOP";
}

//Reset button
function Reset(){
    if(startTimer === undefined){
        min = 25;
        sec = 00;

        stopInterval();
        startTimer = undefined;
        timeString.innerText = `${min}:0${sec}`;
        document.querySelector("#timerState").innerText = "Timer state!";
    }
}

function timer(){
    //Work timer countdown
    
    if(sec != 0){
        sec--;
        if (min!=0 && sec <10){
            timeString.innerText = `${min}:0${sec}`;
        } else{
            timeString.innerText = `${min}:${sec}`;
        }
        
    } else if( min !=0 && sec == 0){
        sec = 59;
        min--;
        timeString.innerText = `${min}:${sec}`;
    }

    //Break timer countdown
    if(min === 0 && sec === 0){
        min = 5;
        sec = 0;
        if(sec !=0){
            sec--;
            timeString.innerText = `${min}:${sec}`;
        } else if (min!=0 && sec === 0) {
            sec = 59;
            min--;
            timeString.innerText = `${min}:${sec}`;            
        } else if (min===0 && sec === 0){
            stopInterval()
            startTimer = undefined;
        }
    }
}

function stopInterval(){
    clearInterval(startTimer);
}

inputEnter = document.getElementById("basic-addon1")
inputEnter.addEventListener('click', checkForClick)

function checkForClick(){
    document.querySelector(".col-6").classList.toggle("hidden");
    document.querySelector("#focusTask").innerText = document.querySelector("#inputTask").value;
}

document.querySelector("#magic-btn").addEventListener('click', bringBackInputForm)

function bringBackInputForm(){
    document.querySelector(".col-6").classList.toggle("hidden");
    document.querySelector("#focusTask").innerText = "";
    document.querySelector("#inputTask").value = "";
}