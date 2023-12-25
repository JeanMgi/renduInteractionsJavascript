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

let prenom="";
let nom="";
let mail="";
let comm="";
let bt=document.getElementById("envoi");
function recup(){
    if(document.getElementById("mail").value=="")
{
    console.log("Erreur : Entrer l'adresse mail");
}
    else{
        prenom=document.getElementById("prenom").value;
        nom=document.getElementById("nom").value;
        mail=document.getElementById("mail").value;
        comm=document.getElementById("comment");
        console.log(prenom);
        console.log(nom);
        console.log(mail);
        console.log(comm);
    }
}
bt.addEventListener('click',recup);