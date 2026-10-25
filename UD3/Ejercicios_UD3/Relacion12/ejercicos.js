//Ejercicio 2

const empiezanPorJ = (ar) => {
    let filtro = ar.filter((nomb) => nomb.startsWith('J')).map(nom => nom.split(' ').map(letra => letra[0]).join('')).sort();
    return filtro;
}