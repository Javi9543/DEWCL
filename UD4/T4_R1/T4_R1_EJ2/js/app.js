const movimientoRaton = (event) => {
    let posX = event.clientX;
    let posY = event.clientY;
    console.log(`Coordenadas del raton: X: ${posX} | Y: ${posY}`);
}

(function(){
    console.log("main.js funcionando");
    console.log(document.addEventListener("mousemove", movimientoRaton));
})();