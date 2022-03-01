let start = document.getElementById('start')

let timeString = document.getElementById('time-string')

let min = 25;
let sec = 00;

let startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert('Timer is running already')
    }
})

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

function stopInterval(){
    clearInterval(startTimer);
}
}