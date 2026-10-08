//Ejercicio2
let ventana; 
function CrearVentana() {
    ventana = window.open("", "", "width=400 height=200");
    ventana.document.write(`<button onclick="window.close()">CerrarVentana</button>`)
}

function CerrarVentana(){
    ventana.close();
}

//Ejercicio3
function crearVentanas(){
    for (let i = 0; i <= 5; i++) {
        ventana = window.open("www.google.com", "ventana" + i , "width=350 height=350");
    }
    ventana.document.write(`<button onclick="window.close()">CerrarVentana</button>`)
}