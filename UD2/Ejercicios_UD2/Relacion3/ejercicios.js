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