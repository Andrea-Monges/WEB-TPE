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
        respuesta-captcha.classList.add("Captcha-correcto");
        respuesta-captcha.innerHTML== "El captcha ingresado es correcto!";    
        }else{
        respuesta-captcha.classList.add("Captcha-incorrecto");
        respuesta-captcha.innerHTML=="El captcha ingresado es incorrecto! Por favor intente nuevamente";
        }
    }
});
    
//function Validar(IngresoCaptcha){
//IngresoCaptcha.preventDefault();//Nose dónde ubicar esto para que haga el stop antes de mostrar los mensajes de captcha correcto o incorrecto
//} 
BotonEnviar.addEventListener('click', function(){
    if (IngresoCaptcha.value==TextoCaptcha.innerHTML){
     respuesta-captcha.classList.add("Captcha-correcto");
     respuesta-captcha.innerHTML== "Correcto!";
     
    }else{
      respuesta-captcha.classList.add("Captcha-incorrecto");
      respuesta-captcha.innerHTML== "Captcha incorrecto, por favor intente nuevamente";  
    }
});

BotonRefresh.addEventListener('click', function(){
    IngresoCaptcha.value="";
    let refreshArreglo=[];
    for (let j=1; j<=5; j++){
        refreshArreglo.push(ALfaNumerico[Math.floor(Math.random()* ALfaNumerico.length)]);
    } 
    TextoCaptcha.innerHTML= refreshArreglo.join('');
    respuesta-captcha=="";
});

















