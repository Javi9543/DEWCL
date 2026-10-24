//Ejercicio2
/**
 * 
 * @param {*} idAl id del alumno introducido
 * @param {*} tri trimestre a buscar la nota
 * @param {*} ar array de alumnos
 * @returns  {Number} nota media o nota de un trimestre de un alumno
 */

const buscarNotas = (idAl, tri, ar) => {
    idAl = idAl - 1;
    let nota ;
    let media = 0;
    let ar2;

    ar2 = ar[idAl].split(",");

    if (tri > 0) {
        nota = ar2[tri + 1];    
    } else {
        media = (Number(ar2[2]) + Number(ar2[3]) + Number(ar2[4]));
        nota = Math.round(media / 3);
    }
    
    return nota;
}

//Ejercicio 3
const edadMediaAlumnos = (ar) => {
    let total = 0;
    let edadTotal;
    for (let i = 0; i < ar.length; i++) {
        total += Number(ar[1]);
    }

    edadTotal = total / ar.length;

    return edadTotal;
}


//Ejercicio 4

const alumnoAleatorio = (ar) => {
    let aleatorio = Math.floor(Math.random()*ar.length);

    let al = ar[aleatorio].split(",");

    return al[0];
}

//Ejercicio 5

const paresImpares = (ar) => {
    let arOrdenado = [];

    for (let i = 0; i < ar.length; i++) {
        if (ar[i] % 2 == 0) {
            arOrdenado.unshift(ar[i]);
        } else {
            arOrdenado.push(ar[i]);
        }
    }

    return arOrdenado;
}

//Ejercicio 6

//Ejercicio 7

//Ejercicio 8

//Ejercicio 9

//Ejercicio 10

//Ejercicio 11