"use strict";
document.addEventListener("DOMContentLoaded", iniciarTabla);
function iniciarTabla() {
    const url = "https://60c2aab9917002001739d577.mockapi.io/bat/voluntarios";
    mostrarTabla();
    document.querySelector("#btn-agregar").addEventListener("click", agrega1);
    document.querySelector("#btn-agregar3").addEventListener("click", agrega3);
    //document.querySelector("#btn-borrar").addEventListener("click",borrar);
    async function agrega1(e) {
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
        try {
            let res = await fetch(url, {
                "method": "POST",
                "headers": { "Content-type": "application/json" },
                "body": JSON.stringify(voluntarioNuevo)
            });
            if (res.status == 201) {
                console.log("Creado!");
            }
            mostrarTabla();
        }
        catch (error) {
            console.log(error);
        }
    }
    function agrega3(e) {
        e.preventDefault();
        for (let i = 0; i < 3; i++) {
            agrega1(e);
        }
        mostrarTabla();
    }
    async function mostrarTabla() {
        try {
            let respuesta = await fetch(url);
            let voluntarios = await respuesta.json();
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
                `;
            let cuerpo = document.createElement("tbody");
            for (let i = 0; i < voluntarios.length; i++) {
                let fila = document.createElement("tr");
                fila.innerHTML = `
                        <td id="fila-nombre">${voluntarios[i].nombre}</td>
                        <td id="fila-apellido">${voluntarios[i].apellido}</td> 
                        <td id="fila-telefono">${voluntarios[i].telefono}</td> 
                        <td id="fila-email">${voluntarios[i].email}</td> 
                        <td id="fila-area">${voluntarios[i].area}</td> 
                        <td id="fila-turno">${voluntarios[i].turno}</td>
                        <td><button class="fas fa-edit" value=${i}></button></td>
                        <td><button class="fas fa-trash-alt" value=${i}></button></td>
                        
                    `;
                cuerpo.appendChild(fila);
            }
            tabla.appendChild(cuerpo);
            let btn_editar = document.querySelectorAll(".fa-edit");
            let btn_borrar=document.querySelectorAll(".fa-trash-alt");
            btn_borrar.forEach(e => {
                e.addEventListener("click", borrar)
            })
            for (const btn of btn_editar) {
                btn.addEventListener("click", function (e) { editar(e, voluntarios) })

            }
        } catch (error) {
            console.log(error);
        }
        
        //for(const btn of btn_borrar) {
          //                btn.addEventListener("click",function(e){borrar(e,voluntarios)})
          //}  
            //}catch(error){
              //console.log(error);  
         //}
        // function borrar(e){
        //   e.preventDefault();
        // voluntarios=[];   
        // mostrarTabla();
        //}
        async function editar(e, voluntarios) {
            e.preventDefault();
            let fila = e.target.parentElement.parentElement;
            let i = e.target.value;
            fila.innerHTML = `
            <form id="form-edit">
                <td><input type="text" id="edit-nombre" value="${voluntarios[i].nombre}"></td>
                <td><input type="text" id="edit-apellido" value="${voluntarios[i].apellido}"></td>
                <td><input type="text" id="edit-telefono" value="${voluntarios[i].telefono}"></td>
                <td><input type="text" id="edit-email" value="${voluntarios[i].email}"></td>
                <td><input type="text" id="edit-area" value="${voluntarios[i].area}"></td>
                <td><input type="text" id="edit-turno" value="${voluntarios[i].turno}"></td>
                <td><button class="fas fa-check-circle" name="id" value="${voluntarios[i].id}"></button></td>
                <td><button class="fas fa-trash-alt" name="id" value="${voluntarios[i].id}"></button></td>
            </form>
                `;
            document.querySelector(".fa-check-circle").addEventListener("click", async function (e) {
                voluntarios[i].nombre = document.querySelector("#edit-nombre").value;
                voluntarios[i].apellido = document.querySelector("#edit-apellido").value;
                voluntarios[i].telefono = document.querySelector("#edit-telefono").value;
                voluntarios[i].email = document.querySelector("#edit-email").value;
                voluntarios[i].area = document.querySelector("#edit-area").value;
                voluntarios[i].turno = document.querySelector("#edit-turno").value;
                try {
                    let res = await fetch(`${url}/${voluntarios[i].id}`, {
                        "method": "PUT",
                        "headers": { "Content-type": "application/json" },
                        "body": JSON.stringify(voluntarios[i])
                    });
                    if (res.status == 201) {
                        console.log("Creado!");
                    }
                    mostrarTabla();
                }
                catch (error) {
                    console.log(error);
                }
            })
        }
    }
    async function borrar() {
        let id = this.value
        console.log(id);
        try {
            let res = await fetch(`${url}/${id}`, {
                method: "DELETE",
               
            });
            if (res.status == 200) {
                console.log("Borrado!");
            }
            mostrarTabla();
        }
        catch (error) {
            console.log(error);
        }
    }






//let turnos = document.querySelector("#turnos");

   // for(let i=0; i < voluntarios.length; i++){
 //       const voluntarioNuevo= voluntarios[i];

      //  option.appendChild(document.createTextNode(voluntarioNuevo.turno));
      //  option.value = voluntarioNuevo.turno;
        //turnos.appendChild(option);
//}

}
