/* =====================================
   Safi Shop Slider.js
===================================== */

document.addEventListener("DOMContentLoaded", () => {

const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");

if(slides.length===0) return;

let current = 0;

function showSlide(index){

slides.forEach((slide,i)=>{

slide.classList.remove("active");

if(dots[i]) dots[i].classList.remove("active");

});

slides[index].classList.add("active");

if(dots[index]) dots[index].classList.add("active");

}

function nextSlide(){

current++;

if(current>=slides.length){

current=0;

}

showSlide(current);

}

function prevSlide(){

current--;

if(current<0){

current=slides.length-1;

}

showSlide(current);

}

if(next){

next.onclick=nextSlide;

}

if(prev){

prev.onclick=prevSlide;

}

dots.forEach((dot,index)=>{

dot.onclick=()=>{

current=index;

showSlide(current);

};

});

setInterval(nextSlide,5000);

showSlide(current);

});


