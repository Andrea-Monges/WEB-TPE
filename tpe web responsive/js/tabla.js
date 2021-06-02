"use strict";
document.querySelector("#btn-agregar").addEventListener("click", agrega1);
document.querySelector("#btn-agregar3").addEventListener("click", agrega3);
document.querySelector("#btn-borrar").addEventListener("click", borrar);

let voluntarios = [
    {
        nombre: "Antonela",
        apellido: "Valdez",
        telefono: "2494609754",
        email: "avaldez@gmail.com",
        area: "administracion",
        turno: "mañana",
    },

    {
        nombre: "Carlos",
        apellido: "Cardona",
        telefono: "2494628754",
        email: "ccardona@gmail.com",
        area: "deposito",
        turno: "mañana",
    },

    {
        nombre: "Daniel",
        apellido: "Fuentes",
        telefono: "2494626018",
        email: "dfuentes@gmail.com",
        area: "deposito",
        turno: "tarde",
    },

    {
        nombre: "Florencia",
        apellido: "Gomez",
        telefono: "2494641444",
        email: "fgomez@gmail.com",
        area: "administracion",
        turno: "tarde",
    },

    {
        nombre: "Gustavo",
        apellido: "Lopez",
        telefono: "2494641076",
        email: "glopez@gmail.com",
        area: "deposito",
        turno: "mañana",
    },

    {
        nombre: "Laura",
        apellido: "Rodriguez",
        telefono: "249461654",
        email: "lrodriguez@gmail.com",
        area: "deposito",
        turno: "tarde",
    }
];

function agrega1(e) {
    e.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let telefono = document.querySelector("#telefono").value;
    let email = document.querySelector("#email").value;
    let area = document.querySelector("#area").value;
    let turno = document.querySelector("#turno").value;

    let voluntarioNuevo = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email,
        area: area,
        turno: turno,
    }
    voluntarios.push(voluntarioNuevo);
    console.log("Agrega uno:", voluntarioNuevo);
    mostrarTabla();
}

function agrega3(e) {
    e.preventDefault();
    for (let i = 0; i < 3; i++) {
        agrega1(e);
    }
    mostrarTabla();
}

function mostrarTabla() {
    console.table(voluntarios);
    let tabla = document.querySelector("#t-voluntarios");
    tabla.innerHTML = `
    <thead>
    <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Telefono</th>
        <th>email</th>
        <th>Area</th>
        <th>Turno</th>
    </tr>
</thead>
<tbody>`;
    for (const item of voluntarios) {
        tabla.innerHTML += `
    <tr>
        <td>${item.nombre}</td>
        <td>${item.apellido}</td> 
        <td>${item.telefono}</td> 
        <td>${item.email}</td> 
        <td>${item.area}</td> 
        <td>${item.turno}</td>
    </tr>`
    }
    tabla.innerHTML += `
</tbody>`;
    console.log(tabla.innerHTML);
}

function borrar(e) {
    e.preventDefault();
    console.log(voluntarios);
    voluntarios = [];
    console.log(voluntarios);
    mostrarTabla();

}





