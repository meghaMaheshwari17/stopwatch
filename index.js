// variables:- sec is for seconds, msec is for miliseconds and min is for minutes
var sec=0,msec=0,min=0;
var timer; //this is for storing the setInterval id
// getting all the ids of the elements
var startbutton=document.getElementById('start');
var stopbutton=document.getElementById('stop');
var resetbutton=document.getElementById('reset');
var seconds=document.getElementById('seconds');
var mseconds=document.getElementById('mseconds');
var minutes=document.getElementById('minutes');

//
function start(){ 
    timer=setInterval(startTimer,10);
}
function startTimer(){
    msec++;
    if(sec<=9){
        mseconds.innerHTML='0'+msec;
    }
    if(msec>9){
        mseconds.innerHTML=msec;
    }
    if(msec>99){
        sec++;
        if(sec<=9){
            seconds.innerHTML='0'+sec;
        }
        if(sec>9){
            seconds.innerHTML=sec;
        }
        if(sec>59){
            min++;
            if(min<9){minutes.innerHTML='0'+min;}
            if(min>9){minutes.innerHTML=min;}
            sec=0;
            seconds.innerHTML='00';
        }
        msec=0;
        mseconds.innerHTML='00';
    }
}

function stopTimer(){
    clearInterval(timer);
}

function resetTimer(){
    sec=0,msec=0,min=0;
    seconds.innerHTML='00';
    mseconds.innerHTML='00';
    minutes.innerHTML='00';
    clearInterval(timer);
}
startbutton.addEventListener('click',start);
stopbutton.addEventListener('click',stopTimer);
resetbutton.addEventListener('click',resetTimer);