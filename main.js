let captcha ="agb269";

let captchaInDom= document.querySelector("#captcha");
captchaInDom.value=captcha;

let respuesta = document.querySelector("#respuesta");

let submit = document.querySelector("#submit");


submit.addEventListener("click",function (e){
    if (respuesta.value == captcha){
        alert("el captcha es valido");
    }else
    {
        alert("el captcha es invalido");
    }
})


    