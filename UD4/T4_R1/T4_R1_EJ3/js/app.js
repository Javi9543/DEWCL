function calcularTiempo(inicio){
    let cargado = Date.now();
    let tiempo = Math.floor((cargado - inicio) / 1000);
    let div = document.getElementById("tiempo-transcurrido");
    div.textContent = `El tiempo transcurrido de carga a sido de: ${tiempo}`
    
}

window.addEventListener("load", () => {
    let inicio = Date.now();
    console.log("app.js funcionando");
    setInterval(() => {
        calcularTiempo(inicio);
    }, 1000);
})
