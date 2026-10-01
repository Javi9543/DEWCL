// ejercicio 1:

function numDiasHastaNavidad(){
    debugger;
        let fechas = new Date();
        let fechaVacaciones = new Date("2026-12-19");
        let fechaActual = new Date()

        let milisegundos = fechaVacaciones - fechaActual;
        
        let totalDias = Math.floor(milisegundos / (1000*60*60*24))


        return "Faltan " + totalDias + " dias, para vacaciones";
        
}

// ejercicio 2:

function comprobarDomingo(fecha){
    if (fecha.getDay() === 0){
        return true;
    }
}


function cumpleanyosDomingo(fechaCumpleaños){
    debugger;
    let dia = fechaCumpleaños.getDate();
    let mes = fechaCumpleaños.getMonth();

    const cumplesDomingo = [];
    let anyioActual = new Date().getFullYear();


    for (let i = anyioActual; i < 2100; i++) {
        const cumple = new Date(i, mes, dia);

        if(comprobarDomingo(cumple)){
            cumplesDomingo.push(i);
        }
        
    }

    return "Tu Cumpleaños cae en el domingo de año: " + cumplesDomingo;
}