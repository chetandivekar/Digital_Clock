let a = document.getElementById("hour");
let b = document.getElementById("minute");
let c = document.getElementById("second");


setInterval(()=>{
    let date = new Date;
let hour  = date.getHours();
if(hour>=12){
    var mainHour = hour - 12;
}
else{
    mainHour = hour;
}

let min = date.getMinutes();
let mainSec = date.getSeconds();

if(mainHour<10){
    a.innerHTML = "0" + mainHour;

}
else{
    a.innerHTML = mainHour;
}
if(min<10){
    b.innerHTML = "0" +min;
}
else{
    b.innerHTML = min;
}
if(mainSec<10){
    c.innerHTML = "0" +mainSec ;
}
else{
    c.innerHTML = mainSec ;
}
   
},1000)
