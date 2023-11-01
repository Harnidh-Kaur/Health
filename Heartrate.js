var timeLeft, downloadTimer;
function timer(){
    timeLeft=10;
    downloadTimer=setInterval(function(){
        if(timeLeft <= 0){
            clearInterval(downloadTimer)
            document.getElementById('countdown').style.padding="30%";
            document.getElementById('countdown').innerHTML="the end"
        }
        else{
            document.getElementById('countdown').style.padding="0%";
            document.getElementById('countdown').innerHTML= timeLeft + "seconds remaining"; 
        }
        timeLeft-=1 //timeLeft= timeLeft-1//
    },1500);
}
function stopTimer(){
    timeLeft=10;
    clearInterval(downloadTimer);
    document.getElementById('countdown').innerHTML=timeLeft + "seconds remaining";
}
var clicks=0;
function heartClicks(){
    clicks+=1;
    document.getElementById('display').innerHTML=clicks
}
function clearClicks(){
    clicks=0;
    document.getElementById('display').innerHTML=clicks
}
function calculate(){
   var result=0
   result=clicks*6;
   console.log(result)
   document.getElementById('pulse').innerHTML=result
}
function reset(){
    result=0
    document.getElementById('pulse').innerHTML=""
}
function changeMode(){
    var modeImg= document.getElementById('img')
    if(modeImg.src.endsWith('moon-stars.svg')){
        modeImg.src='brightness-high.svg'
    }
    else{
        modeImg.src='moon-stars.svg'
    }
    document.body.classList.toggle('dark-mode');
    }
    
    