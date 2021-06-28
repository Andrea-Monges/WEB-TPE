"use strict";
document.addEventListener("DOMContentLoaded",iniciarMenu);
function iniciarMenu(){
    // Menu desplegable
    let boton=document.querySelector("#btn-menu")
    boton.addEventListener("click", toggleMenu);
    function toggleMenu() {
        boton.classList.toggle("change");
        document.querySelector("nav ul").classList.toggle("show");
    }
    // Leer mas
    let leer=document.querySelectorAll("#btn-leer");
    for (const item of leer) {
        item.addEventListener("click",toggleTexto);
    }
    function toggleTexto(e){
        let botonLeer=e.target;
        let padre=botonLeer.parentElement;
        let ocultos=padre.querySelectorAll(".mostrar");
        for (const texto of ocultos) {
            texto.classList.toggle("oculto");
        }
        if (ocultos[0].classList=="mostrar"){
            botonLeer.innerHTML="Leer menos";
        }
        else{ botonLeer.innerHTML="Leer mas"}
    }
}