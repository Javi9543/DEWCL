//Ejercicio 1
//caso 1
function numeroAleatoriov1(){
    let numAleatorio = Math.random();

    return numAleatorio;
}

//caso 2
function numeroAleatoriov2(){
    debugger;
    let max = 200;
    let min = 100;
    //esto lo que hace es que establezco la cantidad de numeros (es decir el siguiente calculo (max - min + 1))
    // y luego le sumo la cantidad minuma para la cantidad de numeros a generar
    let aleatorio = Math.random() * (max - min + 1) + min;
    aleatorio = Math.floor(aleatorio);
    return aleatorio;
}

//caso 3
function numeroAleatoriov3(n1, n2){
    //aqui paso los numeros del usuario
    let max = n1;
    let min = n2;

    let aleatorio = Math.random() * (max - min + 1) + min;
    aleatorio = Math.floor(aleatorio);

    return aleatorio
}