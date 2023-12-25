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
        document.querySelector("#ph").src="images/ian_mcshane.jpg";
        a=1;
    }
    else if(a==1){
        document.querySelector("#ph").src="images/michael_nyqvist.jpg";
        a=2;
    }
    else if(a==2){
        document.querySelector("#ph").src="images/willem_dafoe.png";
        a=3;
    }
    else if(a==3){
        document.querySelector("#ph").src="images/riccardo_scamarcio.jpg";
        a=4;
    }
    else if(a==4){
        document.querySelector("#ph").src="images/ruby_rose.jpg";
        a=5;
    }
    else if(a==5){
        document.querySelector("#ph").src="images/lance_reddick.jpg";
        a=6;
    }
    else if(a==6){
        document.querySelector("#ph").src="images/asia_kate_dillon.jpg";
        a=7;
    }
    else if(a==7){
        document.querySelector("#ph").src="images/halle_berry.jpg";
        a=8;
    }
    else if(a==8){
        document.querySelector("#ph").src="images/mark_dacascos.jpg";
        a=9;
    }
    else if(a==9){
        document.querySelector("#ph").src="images/donnie_yen.jpg";
        a=10;
    }
    else if(a==10){
        document.querySelector("#ph").src="images/bill_skarsgard.jpg";
        a=11;
    }
    else if(a==11){
        document.querySelector("#ph").src="images/shamier_anderson.jpg";
        a=12;
    }
    else{
        document.querySelector("#ph").src="images/keanu_reeves.png";
        a=0;
    }
}
btd.addEventListener('click',carou);

const burgerIcon = document.getElementById('burger-icon');
const menu = document.getElementById('menu');
burgerIcon.addEventListener('click',function() {
    menu.classList.toggle('active');
});