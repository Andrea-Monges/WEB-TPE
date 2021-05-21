"use strict";
let captcha ="ApE241";

let captchaInDom= document.querySelector("#captcha");
captchaInDom.innerHTML=captcha;


let submit = document.querySelector("#btn-enviar");
let resultado=document.querySelector("#resultadocaptcha");



submit.addEventListener("click",function (e){
    Event.prevent.Default();
    let respuesta = document.querySelector("#input-respuesta");
    if (respuesta.value == captcha){
        resultado.innerHTML="el captcha es válido";
    }else
    {
        resultado.innerHTML="el captcha es inválido";
    }
}) 


