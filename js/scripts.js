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


let btn_prev = document.querySelector('#gallery .buttons .prev');
let btn_next = document.querySelector('#gallery .buttons .next');

let images = document.querySelectorAll('#gallery .photos .img-inrto');

let i = -1; // номер текущей картинки, на экране

// images[i].style.display = 'none';
// прячем текущую картину

i++ ;  // увеличиваем переменную i на единицу

if(i >= images.length){
    i = 0; // переменная i равна 0
}

btn_prev.onclick = function(){
    images[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block';
}
btn_next.onclick = function(){
    images[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block';
}