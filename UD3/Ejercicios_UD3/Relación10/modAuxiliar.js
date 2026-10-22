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

