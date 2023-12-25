"use strict";
let btg = document.querySelector("#g");
let btd = document.querySelector("#d");
let count = 0;
function carou(){
    if(count==0){
        document.querySelector("#ph").src="images/affiche2.jpg";
        count=1;
    }
}
btd.addEventListener('click',carou);