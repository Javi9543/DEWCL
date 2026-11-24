function foco(){
    let tipos = document.querySelectorAll("input, textarea");
    let ayuda = document.getElementById("ayuda");

    tipos.forEach((tipo) => {
        tipo.addEventListener("focus", () => {
            if (tipo.type === "text") {
                ayuda.innerText = `En este campo ${tipo.type} debes escribir tu nombre`;
                console.log("mensaje añadido");

            } else if (tipo.type === "email") {
                ayuda.innerText = `En este campo ${tipo.type} debes escribir tu email`;
                console.log("mensaje añadido");
                
            } else if (tipo.type === "textarea"){
                ayuda.innerText = `En este campo ${tipo.type} debes escribir un comentario que quieras`;
                console.log("mensaje añadido");
            }
        })

        tipo.addEventListener("blur", () => {
            ayuda.innerText = "";
            console.log("mensaje eliminado")
        })
    })
}


document.addEventListener("DOMContentLoaded", () => {
    foco();

})