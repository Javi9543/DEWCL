const pulsarBoton = () => {
    let btn = document.getElementById("btn-evento");
    btn.addEventListener("click", () => alert("Has pulsado el botón"), console.log("btn: ", btn))
    
}

(function(){
    console.log("main.js funcionando");
    pulsarBoton();
})();