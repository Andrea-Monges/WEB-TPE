let index = 0;
let imagenes = [];
imagenes = document.querySelectorAll("img.oculto");
let boton = document.querySelector("#btn-next");
pasarImagen();
setInterval(pasarImagen, 3000);
function pasarImagen() {
    if (index >= imagenes.length) {
        imagenes[index - 1].classList.toggle("oculto");
        index = 0;
    }
    console.log(index);
    if (index != 0) { imagenes[index - 1].classList.toggle("oculto") };
    imagenes[index].classList.toggle("oculto");
    index++;
}