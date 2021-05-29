"use strict";
let TextoCaptcha= document.querySelector("#captcha");
let IngresoCaptcha= document.querySelector("#ingreso-captcha");
let BotonEnviar= document.querySelector("#boton-enviar");
let respuesta= document.querySelector("#respuesta-captcha");
let BotonRefresh= document.querySelector("#boton-refrescar");

let ALfaNumerico=[ 'A', 'B','C','D','E','F','G','a','b','c','d','e','f','g','0','1','2','3','4','5','6','7','8','9'];
let ArregloVacio= [];

for (let i=1; i<=5; i++){
    ArregloVacio.push(ALfaNumerico[Math.floor(Math.random()* ALfaNumerico.length)]);
}

TextoCaptcha.innerHTML= ArregloVacio.join('');
TextoCaptcha.addEventListener('keyup', function(e){
    
    if(TextoCaptcha.textoAlfaNum==10 ){
    
        if (IngresoCaptcha.value==TextoCaptcha.innerHTML){
        respuesta.classList.add("Captcha-correcto");
        respuesta.innerHTML== "El captcha ingresado es correcto!";    
        }else{
        respuesta.classList.add("Captcha-incorrecto");
        respuesta.innerHTML=="El captcha ingresado es incorrecto! Por favor intente nuevamente";
        }
    }
});
    

BotonEnviar.addEventListener('click', function(e){
    e.preventDefault();
    if (IngresoCaptcha.value==TextoCaptcha.innerHTML){
     respuesta.classList.add("Captcha-correcto");
     respuesta.innerHTML="Correcto!";
    }else{
      respuesta.classList.add("Captcha-incorrecto");
      respuesta.innerHTML="Captcha incorrecto, por favor intente nuevamente";  
    }
});

BotonRefresh.addEventListener('click', function(e){
    e.preventDefault();
    IngresoCaptcha.value="";
    let refreshArreglo=[];
    for (let j=1; j<=5; j++){
        refreshArreglo.push(ALfaNumerico[Math.floor(Math.random()* ALfaNumerico.length)]);
    } 
    TextoCaptcha.innerHTML= refreshArreglo.join('');
    respuesta=="";
});

















