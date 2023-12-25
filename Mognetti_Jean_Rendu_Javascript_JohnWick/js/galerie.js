"use strict";
document.body.style.background="black";
let h2=document.querySelector('h2');
let button = document.getElementById("clair");
let count = 0;
function mode(){
    if(count==0){
        document.body.style.background="white";
        count = 1;
    }
    else{
        document.body.style.background="black";
        count = 0;
    }
}
button.addEventListener('click', mode);

let btd = document.querySelector("#d");
let a = 0;
function carou(){
    if(a==0){
        document.querySelector("#ph").src="images/affiche2.jpg";
        a=1;
    }
    else if(a==1){
        document.querySelector("#ph").src="images/affiche3.jpg";
        a=2;
    }
    else if(a==2){
        document.querySelector("#ph").src="images/affiche4.jpg";
        a=3;
    }
    else{
        document.querySelector("#ph").src="images/affiche1.png";
        a=0;
    }
}
btd.addEventListener('click',carou);

const burgerIcon = document.getElementById('burger-icon');
const menu = document.getElementById('menu');
burgerIcon.addEventListener('click',function() {
    menu.classList.toggle('active');
});