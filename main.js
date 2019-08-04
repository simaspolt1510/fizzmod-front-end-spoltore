//Agarro todos los enlaces
var enlaces = document.querySelectorAll("a");
var contenido = document.querySelector("main");
var xhr = new XMLHttpRequest;

//Se cambia el contenido del main con el contenido solicitado anteriormente al servidor.
xhr.addEventListener("load", ()=>{
    if(xhr.readyState == 4 && xhr.status == 200) {
        contenido.innerHTML = xhr.response;
    }

})

//Recorro los enlaces y agrego event listener a cada uno de ellos
for (var i = 0; i < enlaces.length; i++){
    enlaces[i].addEventListener("click", (e)=>{
        //se previene comportamiento default del enlace clickeado
        e.preventDefault();
        //se obtiene el href del link clickeado y se reduce solamente al nombre del archivo HTML buscado (ej: portfolio.html)
        let href = e.target.href.split("/");
        href = href[href.length - 1];

        //se realiza HTTP Request, se pide al servidor que busque el archivo html, almacenado en la variable href
        xhr.open("get", href);
        xhr.send();
    });
};



