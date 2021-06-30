"use strict";
document.addEventListener("DOMContentLoaded",iniciarTabla);
async function iniciarTabla(){
    const url="https://60c2aab9917002001739d577.mockapi.io/bat/voluntarios";
    document.querySelector("#btn-agregar").addEventListener("click",agrega1);
    document.querySelector("#btn-agregar3").addEventListener("click",agrega3);
    document.querySelector("#filtrar").addEventListener("keyup", filtrar);
    let btnAnt=document.querySelector("#pagina-ant");
    btnAnt.addEventListener("click",pasarPagina);
    let btnSig=document.querySelector("#pagina-sig");
    btnSig.addEventListener("click",pasarPagina);
    const limite=10;
    let pagina=1;
    let paginaMax=await cantPaginas(url);
    actualizarNumPagina();
    console.log(paginaMax);
    mostrarTabla(pagina);
    async function agrega1(e){
        e.preventDefault();
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
        try {
            let res = await fetch(url, {
                "method": "POST",
                "headers": { "Content-type": "application/json" },
                "body": JSON.stringify(voluntarioNuevo)
            });
            if (res.status == 201) {
                console.log("Creado!");
                paginaMax=await cantPaginas(url);
                mostrarTabla(pagina);
                actualizarNumPagina();
            }
        }
        catch (error) {
            console.log(error);
        }  
    }
    function agrega3(e){
        e.preventDefault();
        for(let i=0; i<3; i++){
            agrega1(e);
        }
        mostrarTabla(pagina);
    }
    async function mostrarTabla(pagina){
        try{
            let respuesta = await fetch(`${url}?p=${pagina}&l=${limite}`);
            let voluntarios= await respuesta.json();
            let tabla=document.querySelector("#t-voluntarios");
            tabla.innerHTML=`
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Telefono</th>
                        <th>email</th>
                        <th>Area</th>
                        <th>Turno</th>
                        <th>Editar</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                `;
            let cuerpo=document.createElement("tbody");
            cuerpo.classList.add("tabla-cuerpo");
            if (respuesta.ok) {
                for (let i = 0; i < voluntarios.length; i++){
                    let fila=document.createElement("tr");
                    fila.innerHTML = `
                    <td>${voluntarios[i].nombre}</td>
                    <td>${voluntarios[i].apellido}</td> 
                    <td>${voluntarios[i].telefono}</td> 
                    <td>${voluntarios[i].email}</td> 
                    <td>${voluntarios[i].area}</td> 
                    <td>${voluntarios[i].turno}</td>
                    <td><button class="fas fa-edit" value=${i}></button></td>
                    <td><button class="fas fa-trash-alt" value=${voluntarios[i].id}></button></td>
                    `;
                    cuerpo.appendChild(fila);
                }
                tabla.appendChild(cuerpo);
                let btn_editar=document.querySelectorAll(".fa-edit");
                let btn_borrar=document.querySelectorAll(".fa-trash-alt");
                btn_borrar.forEach(e => {
                    e.addEventListener("click", borrar)
                })
                for (const btn of btn_editar) {
                    btn.addEventListener("click",function(e){editar(e,voluntarios)})
                }
                actualizarNumPagina();
            }
        }catch(error){
        console.log(error);
    }
    }
    async function borrar() {
        let id = this.value
        console.log(id);
        try {
            let res = await fetch(`${url}/${id}`, {
                "method": "DELETE",
            });
            if (res.status == 200) {
                console.log("Borrado!");
                paginaMax=await cantPaginas(url);
                mostrarTabla(pagina);
                actualizarNumPagina();
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    async function editar(e,voluntarios){
        e.preventDefault();
        let fila=e.target.parentElement.parentElement;
        let i=e.target.value;
        fila.innerHTML=`
            <form id="form-edit">
                <td><input type="text" id="edit-nombre" value="${voluntarios[i].nombre}"></td>
                <td><input type="text" id="edit-apellido" value="${voluntarios[i].apellido}"></td>
                <td><input type="text" id="edit-telefono" value="${voluntarios[i].telefono}"></td>
                <td><input type="text" id="edit-email" value="${voluntarios[i].email}"></td>
                <td><input type="text" id="edit-area" value="${voluntarios[i].area}"></td>
                <td><input type="text" id="edit-turno" value="${voluntarios[i].turno}"></td>
                <td><button class="fas fa-check-circle" name="id" value="${voluntarios[i].id}"></button></td>
            </form>
                `;
        document.querySelector(".fa-check-circle").addEventListener("click",async function(e){
            e.preventDefault();
            voluntarios[i].nombre=document.querySelector("#edit-nombre").value;
            voluntarios[i].apellido=document.querySelector("#edit-apellido").value;
            voluntarios[i].telefono=document.querySelector("#edit-telefono").value;
            voluntarios[i].email=document.querySelector("#edit-email").value;
            voluntarios[i].area=document.querySelector("#edit-area").value;
            voluntarios[i].turno=document.querySelector("#edit-turno").value;
            try {
                let res = await fetch(`${url}/${voluntarios[i].id}`, {
                    "method": "PUT",
                    "headers": { "Content-type": "application/json" },
                    "body": JSON.stringify(voluntarios[i])
                });
                if (res.status == 201) {
                    console.log("Creado!");
                    mostrarTabla(pagina);
                }
            }
            catch (error) {
                console.log(error);
            }  
        })
    }
    function pasarPagina(){
        pagina+=Number(this.value);
        if (pagina<=paginaMax&&pagina>=1) {
            mostrarTabla(pagina);
            actualizarNumPagina();
        }
        if (pagina>=paginaMax) {
            btnSig.disabled=true;
        }else {
            btnSig.disabled=false;
        }
        if (pagina<=1) {
            btnAnt.disabled=true;
        }else{
            btnAnt.disabled=false;
        }
    }
    async function cantPaginas(url){
        try{
            let respuesta=await fetch(url);
            let datos= await respuesta.json();
            if (respuesta.ok) {
                return Math.ceil(datos.length/limite);
            }
        }
        catch(error){
            console.log(error);
        }
    }
    function actualizarNumPagina(){
        document.querySelector("#pagina-num").innerHTML=`${pagina}/${paginaMax}`;
    }
}
async function filtrar() {
    let textoFiltrado = document.querySelector("#filtrar").value;
    console.log(textoFiltrado);
    let tabla = document.querySelector(".tabla-cuerpo");
    let tr = tabla.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
        let visible = false;
         let td = tr[i].getElementsByTagName("td");
        for (let j = 0; j < td.length; j++) {
            if (td[j] && td[j].innerHTML.indexOf(textoFiltrado) > -1) {
                visible = true;
            }
        }
        if (visible === true) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";

        }
    }

}
