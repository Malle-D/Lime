var elHeader = document.querySelector(".header");
let elLink = document.querySelector(".bot__href");

elLink.addEventListener('click', function(){
    elHeader.classList.toggle("header--opener");
})

var elHeader = document.querySelector(".header");
let elTime = document.querySelector(".top__link");

elTime.addEventListener('click', function(){
    elHeader.classList.toggle("header--active");
})