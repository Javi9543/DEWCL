//Ejercicio1

/**
 * Funcion que filtra los numeros mayores al filtro introducido por el usuario, el cual
 * devuelve los numeros del array padre que son menores al filtro.
 * 
 * @param {*} numeros array de numeros a filtrar.
 * @param {*} numero filter, numero a partir del cual se van a filtrar los numeros del array.
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

const getFileExtension = (file) => {
    debugger;
    let extension = file.split(".");

    return extension[extension.length - 1];
}

