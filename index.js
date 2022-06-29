// variables:- sec is for seconds, msec is for miliseconds and min is for minutes
var sec=0,min=0,msec=0;
var timer; //this is for storing the setInterval id
var started=false; //checks if the timer started or not
// getting all the ids of the elements
var startbutton=document.getElementById('start');
var stopbutton=document.getElementById('stop');
var resetbutton=document.getElementById('reset');
var seconds=document.getElementById('seconds');
var mseconds=document.getElementById('mseconds');
var minutes=document.getElementById('minutes');

//function for starting the timer by setInterval
function start(){ 
    if(!started){
        started=true;
        timer=setInterval(startTimer,10);
    }
  
}
// function that contains the functioning of the timer
function startTimer(){
    // increasing milisecond 
       msec++; 
       if(msec<=9){ 
        mseconds.innerHTML='0'+msec;
       }
       if(msec>9){
        mseconds.innerHTML=msec;
       }
       
       if(msec>99){
        // increasing seconds every time miliseconds becomes > 99 and making miliseconds 0 
        msec=0;
        mseconds.innerHTML='00';
        sec++;
        if(sec<=9){
            seconds.innerHTML='0'+sec;
        }
        if(sec>9){
            seconds.innerHTML=sec;
        }
        if(sec>59){ 
            // increasing minute every time seconds become = 60 
            min++;
            if(min<=9){minutes.innerHTML='0'+min;}
            if(min>9){minutes.innerHTML=min;}
            sec=0;
            seconds.innerHTML='00';
        }
       }
        
    
}
// function to stop the timer
function stopTimer(){
    started=false;
    clearInterval(timer);
}
// function to reset the timer
function resetTimer(){
    started=false;
    sec=0,min=0;
    mseconds.innerHTML='00';
    seconds.innerHTML='00';
    minutes.innerHTML='00';
    clearInterval(timer);
}
// calling the functions when buttons are clicked
startbutton.addEventListener('click',start);
stopbutton.addEventListener('click',stopTimer);
resetbutton.addEventListener('click',resetTimer);