function moverImagen(){
    let img = document.getElementById("imagen")
    let arrastrar = false; /* esto sirve para que cuando no presionemos la imagen no se mueva de su sitio*/

    document.addEventListener("mousedown", () => { /* primero detecto que el click izdo esta pulsado*/
       arrastrar = true; 
    });

    document.addEventListener("mousemove", (event) => {
        console.log("posicion x", event.clientX);
        console.log("posicion y", event.clientY);
        if (arrastrar) {
            img.style.left = event.clientX + "px";
            img.style.top = event.clientY + "px";
        }
    })

    document.addEventListener("mouseup", () => { /* si se suelta el clic, dejamos de arrastrar la imagen*/
        arrastrar = false;
    })
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("main.js funcionando");
    moverImagen();
})