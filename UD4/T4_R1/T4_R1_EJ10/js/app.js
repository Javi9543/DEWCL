function moverImagen(){
    let img = document.querySelectorAll(".imagen")
    let imgActual = null;
    
    img.forEach((imagen)=> {
        imagen.addEventListener("mousedown", () => { /* primero detecto que el click izdo esta pulsado*/
           imgActual = imagen; 
        });
    });

    document.addEventListener("mousemove", (event) => {
        console.log("posicion x", event.clientX);
        console.log("posicion y", event.clientY);
        if (imgActual) {
            imgActual.style.left = event.clientX + "px";
            imgActual.style.top = event.clientY + "px";
        }
    })

    document.addEventListener("mouseup", () => { /* si se suelta el clic, dejamos de arrastrar la imagen*/
        imgActual = null;
    })
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("main.js funcionando");
    moverImagen();
})