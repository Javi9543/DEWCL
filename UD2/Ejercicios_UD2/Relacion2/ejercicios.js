//Ejercicio1
//a) Invertir una cadena
function invierteCadena(cadena){
    const cadenaEnCaracteres = cadena.split("");
    let cadFinal = "";

    for (let i = cadenaEnCaracteres.length - 1; i >= 0; i--){
        cadFinal += cadenaEnCaracteres[i];
    }

    return cadFinal;
}

//b) Invertir Palabras
function inviertePalabras(cadena){
    const palabrasSeparadas = cadena.split(" ");
    let cadFinal = "";

    for (let i = palabrasSeparadas.length - 1; i >= 0; i--){
        cadFinal += palabrasSeparadas[i] + " ";
    }

    return cadFinal;
}

//c) Longitud de palabras en una cadana
function encuentraPalabraMasLarga(cadena){
    const palabrasSeparadas = cadena.split(" ");
    let maxLongitud = 0;
    let palabraMasLarga = "";

    for (let i = 0; i < palabrasSeparadas.length; i++){
        if (palabrasSeparadas[i].length > maxLongitud){
            maxLongitud = palabrasSeparadas[i].length
        }
        palabraMasLarga = palabrasSeparadas[i];
    }
    return palabraMasLarga + " y su longitud es de " + maxLongitud + " Carácteres." ;
}

//d) palabras más largas que la longitud de i
function filtraPalabrasMasLargas(cadena, i) {
    let longitudMinima = i;
    let contadorPalabras = 0;
    const cadenaAPalabras = cadena.split(" ");
    

    for (let j = 0; j < cadenaAPalabras.length; j++) {
        if (cadenaAPalabras[j].length > longitudMinima) {
            contadorPalabras++;
        }
    }

    return "Hay un total de " + contadorPalabras + " palabras que la longitud minima introducida"
}

// e)Cadenas Bien Formadas
function cadenaBienFormada(cadena){
    debugger;
    
    let cadenaNueva = ""
    cadenaNueva = cadena.charAt(0).toUpperCase() + cadena.slice(1).toLowerCase();
    
    return cadenaNueva;
}


