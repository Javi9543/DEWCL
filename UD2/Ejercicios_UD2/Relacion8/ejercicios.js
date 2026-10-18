//Ejercicio1

//funcion normal
function numeroMayor(n1, n2, n3, n4){
    let numMax = Math.max(n1, n2, n3, n4);

    return numMax;
}

//misma funcion hecha de tipo arrow function
const numeroMayorV2 = (n1, n2, n3, n4, nMax) => nMax = Math.max(n1, n2, n3, n4);


//Ejercicio2

const lanzamiento = () => {
    let numeroDado = Math.random() * 6;
        
    while (numeroDado < 1){
        numeroDado = Math.random() * 6;
    }

    numeroDado = Math.round(numeroDado);

    return numeroDado;
}

//Ejercicio 3
const lanzamientoV2 = (arr) => {
    let num; 

    for (let i = 0; i < 6000; i++) {
        num = lanzamiento();

        arr[num - 1]++;
    }
}

//Ejercicio 4

const volumenEsfera = (r) => (4/3) * Math.PI * r ** 3;

//Ejercicio 5
const volumenEsferaV2 = (r) => {
    let v = (4/3) * Math.PI * r ** 3;
    let a = 4 * Math.PI * (r*r);

    return {v, a};
    };