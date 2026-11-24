function cambioCaracter(){
    let texto = document.getElementById("texto");

    texto.addEventListener("blur", () => {
        let original = texto.value;
        let correccion = original.replaceAll("&", "and");
        texto.value = correccion;
    })

    console.log("correccion realizada");
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("main.js funcionando");
    cambioCaracter();
})