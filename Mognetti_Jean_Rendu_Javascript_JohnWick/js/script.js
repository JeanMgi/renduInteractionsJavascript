"use strict";
document.body.style.background="black";
let h2=document.querySelector('h2');
let button = document.getElementById("clair");
let count = 0;
function mode(){
    if(count==0){
        document.body.style.background="white";
        h2.style.color="black";
        count = 1;
    }
    else{
        document.body.style.background="black";
        h2.style.color="white";
        count = 0;
    }
}
button.addEventListener('click', mode);