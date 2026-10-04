//Ejercicio 1

function cuentaAtras(){
    let tiempoRestante = 60;

    //aqui voy restando segundo a segundo (es decir 1000ms)
    let intervalo = setInterval(function() {
        console.log ("Quedan: " + tiempoRestante + "s. ")
        tiempoRestante--;
    }, 1000);

    //y aqui paro el intervalo a los 60s (es decir a los 60000ms)
    setTimeout(function(){
        clearInterval(intervalo)
        console.log("Tiempo Agotado.")
    }, 60000)

}

//Ejercicio 2

function relojDigital(){
    let fecha = new Date();

    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    if (horas < 10){
        horas = "0" + horas;
    }
    
    if (minutos < 10){
        minutos = "0" + horas;
    }

    if (segundos < 10){
        segundos = "0" + horas;
    }

    //esto sirve para actualizar el contenido html escrito en este caso el body
    document.getElementById("rel").textContent = horas + ":" + minutos + ":" + segundos;
    
}