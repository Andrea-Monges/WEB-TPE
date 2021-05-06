let captcha ="ApE241";

let captchaInDom= document.querySelector("#captcha");
captchaInDom.innerHTML=captcha;


let submit = document.querySelector("#btn-enviar");


submit.addEventListener("click",function (e){

    let respuesta = document.querySelector("#input-respuesta");
    if (respuesta.value == captcha){
        
        prompt("el captcha es valido");
    }else
    {
        prompt("el captcha es invalido");
    }
})


    