//Agarro todos los enlaces
var enlaces = document.querySelectorAll("a");
var contenido = document.querySelector("main");


//Recorro los enlaces y agrego event listener a cada uno de ellos
for (var i = 0; i < enlaces.length; i++){
    enlaces[i].addEventListener("click", (e)=>{
        //se previene comportamiento default del enlace clickeado
        e.preventDefault();
        //se obtiene el href del link clickeado y se reduce solamente al nombre del archivo HTML buscado (ej: portfolio.html)
        let href = e.target.href.split("/");
        href = href[href.length - 1];
        //se realiza fetch a la dirección clickeada para obtener su contenido
        fetch(href)
            .then((respuesta)=>{
                return respuesta.text();
            })
            .then((respuesta)=>{
                //se cambia el contenido del main por el buscado
                contenido.innerHTML = respuesta; 
            })
            .catch(console.error);

    });
};



