let start = document.getElementById('action-btn')

let timeString = document.getElementById('time-string')

let min = 25;
let sec = 00;

let startTimer;

start.addEventListener('click', Start)

function Start(){
    start.removeEventListener('click', Start);
    start.addEventListener('click',Stop);
    start.innerText =`Stop`
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert('Timer is running already')
    }
}

function Stop(){
    start.removeEventListener('click',Stop);
    start.addEventListener('click',Start);
    start.innerText=`Start`;
    stopInterval();
    startTimer = undefined;
}

function timer(){
    //Work timer countdown
    
    if(sec != 0){
        sec--;
        if (min!=0 && sec <10){
            timeString.innerText = `${min}:0${sec}`
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