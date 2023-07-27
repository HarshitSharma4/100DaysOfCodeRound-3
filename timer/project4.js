let timmer= document.querySelector(".timmer");
let start= document.getElementById("startstop");

let reset=document.getElementById("reset");
let second=0;
let minit=0;
let hour=0;
function runStopwatch(){
 
    second++;
    if( second / 60 === 1 ){
        second =0;
        minit++;
        if(minit / 60 === 1 ){
            minit=0;
            hour++;
        }
    }
   
    let setSecond = second<10 ? '0'+second:second;
    let setMinit=minit<10 ? '0'+minit:minit;
    let setHour=hour<10 ? '0'+hour:hour;
     
    timmer.innerText=setHour +':'+setMinit+':'+setSecond;
}
let clockstatus=false;

// window.setInterval(runStopwatch,1000);
start.addEventListener('click',()=>{
    if(clockstatus === false){
       
        start.innerHTML='<i class="fa-solid fa-pause" id="pause"></i>';
        myInterval=window.setInterval(runStopwatch,1000);
        clockstatus=true;
    }
    else{
        start.innerHTML='<i class="fa-solid fa-play" id="start"></i>';
        window.clearInterval(myInterval);
        
        clockstatus=false;
    }
   
})


reset.addEventListener('click',()=>{
    start.innerHTML='<i class="fa-solid fa-play" id="start"></i>';
    window.clearInterval(myInterval);
    clockstatus=false;
    timmer.innerText='00:00:00';
    second=0;
    minit=0;
    hour=0;
})
