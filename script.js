/*Subir todo el trabajo en un branch nuevo y pushearlo a un repo en github

1) Hacer una etiqueta <a> en HTML
2) Agarrarla con JS
3) Asignarle un evento de "click"

4) El callback del click tiene que poder crear un elemento <p> y 2 <button>, 
todo adentro de un <div> (se crean con JS)

5) El <p> tiene que decir "Esta seguro que quiere abandonar la pagina" y los 
botones "aceptar" y "cancelar", respectivamente

6) Si se hace click en aceptar, se tiene que redirigir al usuario al href del <a>
7) Si se hace click en cancelar, se tiene que borrar el mensaje
*/

//Se agarra la etiqueta <a> de HTML :
var a = document.getElementById("enlace");

//Asignar evento "click" al enlace :
//Dentro del callback, se previene comportamiento por defecto del enlace,
//se crea el div, el p y los 2 botones :
a.addEventListener("click", e=> {
    e.preventDefault();
    var div = document.createElement("div");
    var p = document.createElement("p");
    p.innerText = "¿Está seguro que quiere abandonar la página?";
    var botonAceptar = document.createElement("button");
    botonAceptar.innerText = "aceptar";
    botonAceptar.id = "aceptar";
    var botonCancelar = document.createElement("button");
    botonCancelar.innerText = "cancelar";
    botonCancelar.id = "cancelar";

    var fragmento = document.createDocumentFragment();

    fragmento.appendChild(p);
    fragmento.appendChild(botonAceptar);
    fragmento.appendChild(botonCancelar);

    div.appendChild(fragmento);
    document.body.appendChild(div);
    
});




//Se establece el comportamiento al hacer click en cada botón :
document.addEventListener("click", e=>{
    //redirigir al usuario al href de <a> si se hace click en "aceptar"
    if (e.target.id == "aceptar") {
        window.location = a.href;

    //borrar el mensaje de "p" cuando se hace click en "cancelar"
    } else if (e.target.id == "cancelar") {
        var p = document.querySelector("p");
        p.innerText = "";
    };
});