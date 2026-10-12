//Ejercicio 1
//caso 1
function numeroAleatoriov1(){
    let numAleatorio = Math.random();

    return numAleatorio;
}

//caso 2
function numeroAleatoriov2(){
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

//Ejercicio2
function calculosAngulos(num){
    let ang = num;
    let radianes = ang * (Math.PI / 180); //Este es calculo para sacar las radianes del angulo del usuario
    let cos;
    let sen; 
    let tan;

    cos = Math.cos(radianes);
    sen = Math.sin(radianes);
    tan = Math.tan(radianes);

    return("Los calculos del angulo " + ang + " son los siguientes: " + " | Sen = " + sen + " | Coseno = " + cos + " | Tangente = " + tan);
}

//ejercicio 3 y 4
function calculosHipotenusa(t1, t2){
    debugger;
    a = t1 * t1;
    b = t2 * t2;
    c = Math.round(Math.sqrt(a + b));

    return "La hipotenusa de " + t1 + ", " + t2 + " es: " + c;
}

//Ejercicio 5
function cacularRaiz2grado(a, b, c){
    let rPos = 0;
    let rNeg = 0;

    let disc = Math.pow(b, 2) - 4 * (a*c);
    let raiz = Math.sqrt(disc);

    rPos = (-b + raiz) / (2 * a);
    rNeg = (-b - raiz) / (2 * a);

    return "Resultado positivo raiz: " + rPos + " | Resultado Negativo: " + rNeg;
    
}

//Ejercicio 6

function calcularPotencias(b, e){
    let pot = Math.pow(b, e);
    return pot;
}