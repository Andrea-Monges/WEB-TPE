"use strict";
document.querySelector(".btn-menu").addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("show");
}

//Ver más en: index.html//
let i = 0;
let button = document.querySelector(".btn-leermas").addEventListener("click", function () {
    if (!i) {
        document.getElementById("leermas").style.display = "inline";
        document.querySelector(".btn-leermas").innerHTML = "Leer Menos";
        i = 1;
    }
    else {
        document.getElementById("leermas").style.display = "none";
        document.querySelector(".btn-leermas").innerHTML = "Leer Más";
        i = 0;
    }
})
