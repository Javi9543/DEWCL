let ventana;
//Ejercicio 3
function abrirVentana(){
    ventana = window.open("", "", "height = 300px");
}

//apartado a)
function mostrarOpcion(info){
    document.getElementById("info").textContent = "El usuario ha pulsado: " + info;
    abrirVentana();
}

//apartado b)
function comprobarEstadoVentana(){
    //hago que compruebe el estado de la ventana cada medio segundo, que son 500ms
    setInterval(function() {

        if (!ventana) {
            document.getElementById("estVentana").textContent = "Aún no se ha abierto ninguna ventana.";
        } else {
            document.getElementById("estVentana").textContent = "¿Está cerrada?: " + ventana.closed;
        }
    }, 500);
}

//apartado c
function ventanaConTitulo(){
    let titulo = prompt("Introduzca un titulo para la ventana: ")
    ventana = window.open("","", "height=50px");
    ventana.document.title = titulo;
}

//apartado d)

function cerrarVentanaActual(){
    window.close();
}

function cerrarVentanaEmergente() {
    ventana.close();
}

//apartado f)
function abrirVentanaV2(){
    ventana = window.open("", "", "width=300,height=100");
} 

//apartado g)
function abrirVentanaV3(){
    document.getElementById("info").textContent = "Mensaje en página padre";
    ventana = window.open("", "", "width=300,height=100");
}

// apartado h
function moverVentana(){
    ventana = window.open("", "", "width=300,height=100");
    ventana.moveBy(50, 50);
}

//Ejercicio 4
//apartado a)
function mostrarNombre(){
    let nombre = location.hash;
    
    alert("El marcador activo es: " + nombre);
}
//apartado b)
function mostrarHost(){
    let loc = location.hostname

    alert("El host de la web es: " + loc);
}

//apartado c)
function devolverURL(){
    let url = location.href;
    alert("la url de la web es:" + url)
}
//apartado d)

function navegarAdireccion(){
    let urlNueva = prompt("Introduzca la web a la que quiere navegar: ");
    urlNueva = "https://" + urlNueva;
    location.assign(urlNueva);
}

function verProtocolo() {
    let protocolo = location.protocol;

    alert("El protocolo que usa esta web es: " + protocolo)
}

function recargarPagina(){
    location.reload();
}