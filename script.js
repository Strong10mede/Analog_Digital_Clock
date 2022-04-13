let hr = document.getElementById("hr");
let mn = document.getElementById("mn");
let sc = document.getElementById("sc");

setInterval(()=> {
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;

hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm + (ss/60)}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;

let dhr = document.querySelector(".hours");
let dmm = document.querySelector(".minutes");
let dsc = document.querySelector(".seconds");
let dampm = document.querySelector(".ampm");

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

dampm.innerHTML = (h<12) ? "AM" : "PM";

//24hrs to 12 hrs format
h = (h>12)? h-12:h;

//add zero to if single digits are there
h = (h<10) ? "0"+h:h;
m = (m<10) ? "0"+m:m;
s = (s<10) ? "0"+s:s;

dhr.innerHTML = h;
dmm.innerHTML = m;
dsc.innerHTML = s;


})