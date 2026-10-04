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
    let pos = cadena.indexOf(subcadena);
    let mensaje = "";

    if(pos !== -1){
        mensaje = "La subcadena: " + subcadena + ", pertenece a la cadena: " + cadena + ", y se encuentra en la posicion " + pos;
    } else {
        mensaje = "Subcadena: " + subcadena + " no es de la cadena: " + cadena;
    } 

    return mensaje;

}

//Ejercicio 7
function limpiarCadena(cadena){
    cadena = cadena.toLowerCase();
    let cadLimpia = "";

    for (let i = 0; i < cadena.length; i++) {
        if (cadena.charAt(i) !== " ") {
            cadLimpia+= cadena.charAt(i);
        }
    }

    return cadLimpia;
}

function esPalindromo(cadena){
    debugger;
    let cad1 = limpiarCadena(cadena);

    let palindromo = "";
    let mensaje = "";


    for (let i = cad1.length -1 ; i >= 0; i--) {
        palindromo += cad1.charAt(i);
    }

    if (cad1 == palindromo){
        mensaje = "La cadena " + cadena + ",  es un palindromo."
    } else {
        mensaje = "La cadena " + cadena + ", no es un palindromo."
    }

    return mensaje;
}

//Ejercicio 8

function contadorPalabras(cadena){
    let contador = 0;
    let esPalabra = false;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena.charAt(i) !== " ") {

            if (!esPalabra){
                contador++;
                esPalabra = true;  
            }
            
        } else {
            esPalabra = false;
        }
        
    }

    return contador;
}

//Ejercicio 9

function validarTarjetaCredito(tarjeta){
    //Compruebo si la longitud de la tarjeta es de 16 caracteres
    if(tarjeta.length !== 16){
        return false;
    }

    let total = 0;
    let iguales = true;
    let primerCaracter = tarjeta.charAt(0);

    for (let i = 0; i < tarjeta.length; i++) {
        let caracter = tarjeta.charAt(i);

        //compruebo que los caracteres sean entre 0 y 9
        if(caracter < 0 || caracter > 9){
            return false;
        }

        //acumulo la suma para más tarde comprobar que de más de 16;
        total += Number(caracter);
        
        if (caracter !== primerCaracter){
            iguales = false;
        }
    }
    
    //compruebo que no haya digitos iguales
    if (iguales){
        return false;
    }

    
    //compruebo que el ultimo digito sea par
    let ultimoCar = tarjeta.charAt(15);
    let ultimoNumero = Number(ultimoCar)
    if (ultimoNumero % 2 !== 0){
        return false;
    }
    
    //compruebo que la suma de todos los digitos sea MAYOR a 16
    if (total < 16){
        return false
    }

    //si pasa todas las pruebas devuelve true, si no en la comprobacion que falle, devolverá false.
    return true;
}

//Ejercicio 10
function limpiarTarjeta(tar){
    let tarjetaLimpia = "";
    //recorro la tarjeta y voy eliminando los guiones y metiendolos a la variable tarjetaLimpia
    for (let i = 0; i < tar.length; i++) {
        if(tar.charAt(i) !== "-"){
            tarjetaLimpia+= tar.charAt(i);
        }       
    }

    return tarjetaLimpia;
}

function validarTarjetaCredito(tarjeta){
    //Para aprovechar el codigo anterior, limpio los guiones de la tarjeta
    tarLimpia = limpiarTarjeta(tarjeta);
    if(tarLimpia.length !== 16){
        return false
    }

    let total = 0;
    let iguales = true;
    let primerCaracter = tarLimpia.charAt(0);

    //compruebo que los digitos sean entre 0 y 9
    for (let i = 0; i < tarLimpia.length; i++) {
        let caracter = tarLimpia.charAt(i);

        if (caracter < "0" || caracter > "9"){
            return false;
        }

        //voy sumando para luego comprobar que la suma sea MAYOR a 16
        total += Number(caracter);

        //compruebo si son iguales
        if (caracter !== primerCaracter){
            iguales = false;
        }
    }

    //compruebo que sean iguales
    if (iguales){
        return false
    }

    //compruebo que el ultimo digito sea par
    let ultimoCar = tarLimpia.charAt(15);
    let ultimoNumero = Number(ultimoCar)
    if (ultimoNumero % 2 !== 0){
        return false;
    }

    //compruebo que la suma de todos los digitos sea MAYOR a 16
    if (total <= 16) {
        return false;
    }

    //si pasa todas las pruebas la tarjeta es valida
    return true
}   