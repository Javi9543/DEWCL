//Ejercicio1

/**
 * Funcion que filtra los numeros mayores al filtro introducido por el usuario, el cual
 * devuelve los numeros del array padre que son menores al filtro.
 * 
 * @param {[]} numeros array de numeros a filtrar.
 * @param {number} numero filter, numero a partir del cual se van a filtrar los numeros del array.
 * 
 * @returns {arFiltrad[]} array con los numeros menores al filtro introducido.
 */

const filterNumbersGreaterThan = (numeros, numero) => {
    let arFiltrado = [];
    numeros.forEach(num => {
        if (num <= numero) {
            arFiltrado.push(num);
        }
    });

    return arFiltrado;
}


//Ejercicio 2
/**
 * Funcion que devuelve una cadena nueva traducida a hacker speak
 * @param {*} cadena 
 * @var cadNueva devuelve la cadena nueva modificada 
 * @returns {string} Devuelve una cadena nueva.
 */

const toHackerSpeak = (cadena) => {
    cadNueva = "";
    cadNueva += cadena.replaceAll("a", "4");
    cadNueva = cadNueva.replaceAll("e", "3");
    cadNueva = cadNueva.replaceAll("i", "1");
    cadNueva = cadNueva.replaceAll("o", "0");
    cadNueva = cadNueva.replaceAll("s", "5");

    return cadNueva;
}

//Ejercicio 3
/**
 * 
 * @param {*} file 
 * @returns {String} extension del archivo
 */

const getFileExtension = (file) => {
    debugger;
    let extension = file.split(".");

    return extension[extension.length - 1];
}


//Ejercicio 4
/**
 * 
 * @param {[][]} aR2D array bidimensional
 * @returns {[]} array unidimensional
 */
const flatArray = (aR2D) => {

    let ar1D = []

    for (let i = 0; i < aR2D.length; i++) {
        for (let j = 0; j < aR2D[i].length; j++) {
            ar1D.push(aR2D[i][j]);            
        }
        
    }

    return ar1D;
}

//Ejercicio 5

/**
 * Programa que quita los elementos duplicados de un array.
 * @param {Array} arN [] array de numeros duplicados
 * @returns [] array sin  dobles con uso de map
 */

const removeDuplicates = (arN) => {
    const sinDobles = new Set(arN);

    return sinDobles;
}

//Ejercicio 6 
/**
 * 
 * @param {string} cadena 
 * @param {string} letra 
 * @returns {Number} numero de veces que aparece "letra" en "cadena"
 *  
 */
const countLetter = (cadena, letra) => {
    let cadNueva = cadena.toLowerCase().split('');
    let cont = 0;
    letra = letra.toLowerCase();

    for (let i = 0; i < cadNueva.length; i++) {
        if(cadNueva[i] == letra) cont++;
    }

    return cont;

}
/**
 * 
 * @param {string} str 
 * @param {Array} words 
 * @returns {String} cadena con palabras eliminadas y el array de palabras a eliminar
 */
const removeWords = (str, words) => {
    for (let i = 0; i < words.length; i++) {
        str = str.replaceAll(words[i], "")
    }

    return str + " [" + words + "]";
}