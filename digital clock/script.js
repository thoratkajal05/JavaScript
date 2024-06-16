
function displaytime(){
    let dateTime=new Date()
let hr=addzero(dateTime.getHours());
let min=addzero(dateTime.getMinutes());
let seconds=addzero(dateTime.getSeconds());
let ampm=document.getElementById("ampm")
if(hr>12){
    hr=hr-12;
    ampm.innerHTML="PM"
}
document.getElementById("hours").innerHTML=hr+":"
document.querySelector("#mins").innerHTML=min+":"
document.querySelector("#seconds").innerHTML=seconds
}
function addzero(num){
    return num<10?"0"+num:num
}
setInterval(displaytime,500)