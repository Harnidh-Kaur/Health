function calculate(){
   var weight=document.getElementById('kg').value;
   var height=document.getElementById('meters').value;
   var BMI= weight/Math.pow(height,2);
   BMI=Math.round(BMI)
  document.getElementById('output').innerText='Your BMI is ' + BMI.toString();

  if(BMI<18.5 ){
    document.getElementById('conclusion').innerText='You are under-weight';
}
else if(BMI>=18.5 && BMI<=24.9){
    document.getElementById('conclusion').innerText='You are normal';
}
else if(BMI>=25 && BMI<=29.9){
    document.getElementById('conclusion').innerText='You are overweight';
}
else if(BMI>=30 && BMI<=39.9){
    document.getElementById('conclusion').innerText='You are obese';
}
else if(BMI>=40){
    document.getElementById('conclusion').innerText='You are morbidly obese';
}
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
//if(BMI>=18.5 && BMI<=24.9){
    //document.getElementById('conclusion').innerText='You are normal';



