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

//Ejercicio2
function ComprobarMayusculasYMinusculas(cadena){
    let mensaje = ""
    if (cadena === cadena.toUpperCase()){
        mensaje = "esta en mayusculas"
    } else if (cadena === cadena.toLowerCase()){
        mensaje = "esta en minusculas"
    } else {
        mensaje = "es una mezcla de minusculas y mayusculas"
    }

    return mensaje;
}

function AparicionSubCadena(cadena, subcadena){
    const posiciones = []
    subcadena = subcadena.toLowerCase()
    subcadena1 = subcadena;

    cadena  = cadena.toLowerCase()
    let poscion = cadena.indexOf(subcadena1);

    //ejercicio 3

    while (poscion !== -1 ){
        posiciones.push(poscion);

        poscion = cadena.indexOf(subcadena, poscion + 1);
    }

    return "La subcadena: " + subcadena + " aparece en las posiciones " + posiciones + " de la cadena introducida.";
}

//ejercicio 4

function separarVocalesYConsonantes(cadena) {
    debugger;
    let vocales1 = "aeiouAEIOU";
    let vocales = "";
    let consonantes = "";

    for (let i = 0; i < cadena.length; i++) {
        let char = cadena.charAt(i);

        if(vocales1.indexOf(char)!== -1){
            vocales += char;
        } else if (char !== " "){
            consonantes+= char;
        }
    }

    return vocales + " " + consonantes;
}

//ejercicio 5

function eliminarRepetidos(cadena){
    let resultado = "";

    for (let i = 0; i < cadena.length; i++) {
        let char = cadena.charAt(i);

        if (resultado.indexOf(char)=== -1) {
            resultado += char;
        }
        
    }

    return resultado;
}

//Ejercicio 6

function encontrarSubcadenaEnCadena(cadena, subcadena){
    debugger;
    let pos = cadena.indexOf(subcadena);
    let mensaje = "";

    if(pos !== -1){
        mensaje = "La subcadena: " + subcadena + ", pertenece a la cadena: " + cadena + ", y se encuentra en la posicion " + pos;
    } else {
        mensaje = "Subcadena: " + subcadena + " no es de la cadena: " + cadena;
    } 

    return mensaje;
}