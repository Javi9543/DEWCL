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