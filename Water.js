function calculate(){
    var glasses=document.getElementById('glasses').value;
    var output=glasses*0.250;
    document.getElementById('litres').style.display='block';
    document.getElementById('litres').innerText=output + "litres"
}
function clearAll(){
    document.getElementById('glasses').value="";
    document.getElementById('litres').style.display='none';
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
    
    