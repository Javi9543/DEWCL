//Ejercicio1

//funcion normal
function numeroMayor(n1, n2, n3, n4){
    let numMax = Math.max(n1, n2, n3, n4);

    return numMax;
}

//misma funcion hecha de tipo arrow function
numeroMayorV2 = (n1, n2, n3, n4, nMax) => nMax = Math.max(n1, n2, n3, n4);


//Ejercicio2

    lanzamiento = () => {
        let numeroDado = Math.random() * 6;
        
        while (numeroDado < 1){
            numeroDado = Math.random() * 6;
        }

        numeroDado = Math.round(numeroDado);

        return numeroDado;
    }