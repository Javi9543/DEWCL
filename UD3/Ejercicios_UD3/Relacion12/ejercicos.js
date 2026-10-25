//Ejercicio 2
const empiezanPorJ = (ar) => {
    let filtro = ar.filter((nomb) => nomb.startsWith('J'))
    let iniciales = filtro.map(nom => nom.split(' ').map(letra => letra[0]).join(''))
    let ordenarIniciales = iniciales.sort();
    return ordenarIniciales;
}

//Ejercicio 3
busarTesoro(ar){
    
}