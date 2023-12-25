"use strict";
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