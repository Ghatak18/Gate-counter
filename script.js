
let deadline = new Date("feb 10, 2025").getTime();

let some = setInterval(function(){
let now = new Date().getTime();

let diff = deadline - now;



let day = Math.floor(diff/(1000*60*60*24));
let hour= Math.floor((diff % (1000*60*60*24))/(1000*60*60));
let minit = Math.floor((diff%(1000*60*60))/(1000*60));
let second = Math.floor((diff%(1000*60))/1000);

document.getElementById("date").innerHTML = day;
document.getElementById("date1").innerHTML = hour;
document.getElementById('date2').innerHTML = minit;
document.getElementById('date3').innerHTML = second ;
},1000);