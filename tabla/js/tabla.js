"use strict";
document.querySelector("#btn-agregar").addEventListener("click", agrega1);
document.querySelector("#btn-agregar3").addEventListener("click", agrega3);
document.querySelector("#btn-borrar").addEventListener("click", borrar);

let voluntarios=[
    {
        nombre:"Antonela",
        apellido:"Valdez",
        telefono:"2494609754",
        email:"avaldez@gmail.com",
        area:"administracion",
        turno:"mañana",
    },

    {
        nombre:"Carlos",
        apellido:"Cardona",
        telefono:"2494628754",
        email:"ccardona@gmail.com",
        area:"deposito",
        turno:"mañana",
    },

    {
        nombre:"Daniel",
        apellido:"Fuentes",
        telefono:"2494626018",
        email:"dfuentes@gmail.com",
        area:"deposito",
        turno:"tarde",
    },

    {
        nombre:"Florencia",
        apellido:"Gomez",
        telefono:"2494641444",
        email:"fgomez@gmail.com",
        area:"administracion",
        turno:"tarde",
    },

    {
        nombre:"Gustavo",
        apellido:"Lopez",
        telefono:"2494641076",
        email:"glopez@gmail.com",
        area:"deposito",
        turno:"mañana",
    },

    {
        nombre:"Laura",
        apellido:"Rodriguez",
        telefono:"249461654",
        email:"lrodriguez@gmail.com",
        area:"deposito",
        turno:"tarde",
    }
];

function agrega1(){
    let nombre=document.querySelector("#nombre").value;
    let apellido=document.querySelector("#apellido").value;
    let telefono=document.querySelector("#telefono").value;
    let email=document.querySelector("#email").value;
    let area=document.querySelector("#area").value;
    let turno=document.querySelector("#turno").value;

    let voluntarioNuevo={
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email,
        area: area,
        turno: turno,
    }
    voluntarios.push(voluntarioNuevo);
    console.log("Agrega uno:", voluntarioNuevo);
    mostrarListado();
}

function agrega3(){
    let nombre=document.querySelector("#nombre").value;
    let apellido=document.querySelector("#apellido").value;
    let turno=document.querySelector("#turno").value;

    let voluntarioNuevo={
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email,
        area: area,
        turno: turno,
    }

    voluntarios.push(voluntarioNuevo);
    console.log("Agregado: ", voluntarioNuevo);
    for(let i=0; i<4; i++){
        agrega3();
    }
    mostrarListado();
}

function mostrarListado(){
    console.table(voluntarios);
    let listadoDom=document.querySelector("#listado");
    listadoDom.innerHTML='';

    for (const item of voluntarios) {
        listadoDom.innerHTML += `<div class="item">
                                    ${item.nombre}
                                    ${item.apellido} 
                                    ${item.telefono} 
                                    ${item.email} 
                                    ${item.area} 
                                    ${item.turno}
                                 </div>`

    }
}

function borrar(){
console.log(voluntarios);
    voluntarios=[];
console.log(voluntarios);    
    mostrarListado();

}