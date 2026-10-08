// Ejercicio 1
    let ventana;

    function abrirVentana(titulo) {
        ventana = window.open("", "", "height=500,width=400,left=1500");
        ventana.document.title = titulo;
    }

    function cerrarVentana(){
        ventana.close();
    }

    //Ejercicio2
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

