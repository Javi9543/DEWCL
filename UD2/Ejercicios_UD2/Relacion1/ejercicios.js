// ejercicio 1:

function numDiasHastaNavidad(){
        let fechas = new Date(); //creo el objeto para calcular las fechas

        let fechaVacaciones = new Date("2026-12-19"); //introduzco la fecha de vacaciones requerida
        let fechaActual = new Date() //añado la fecha actual

        let milisegundos = fechaVacaciones - fechaActual; //paso a milisegundos las hechas
        
        let totalDias = Math.floor(milisegundos / (1000*60*60*24)) //calculo el total de dias


        return "Faltan " + totalDias + " dias, para vacaciones"; //lo impriom por pantalla
        
}

// ejercicio 2:

function comprobarDomingo(fecha){

    //si el numero de dia devuelto por getDay es igual al numero 0 (domingo) devuelve true
    if (fecha.getDay() === 0){
        return true;
    }
}


function cumpleanyosDomingo(fechaCumpleaños){
    debugger;
    let dia = fechaCumpleaños.getDate(); //de la fecha introducida por el usuario, cojo el dia
    let mes = fechaCumpleaños.getMonth(); //de la fecha introducida por el usuario, cojo el dia

    const cumplesDomingo = []; //Creo un array donde guardaré todos los años en los que caiga en domingo la fecha del usuario
    let anyioActual = new Date().getFullYear(); //me guardo el año actual


    for (let i = anyioActual; i < 2100; i++) { //este bucle va comprobando el domingo de cada año haciendo que si el cumpleaños coincide en el domingo lo va metiendo al array
        const cumple = new Date(i, mes, dia);

        if(comprobarDomingo(cumple)){
            cumplesDomingo.push(i);
        }
        
    }

    return "Tu Cumpleaños cae en el domingo de año: " + cumplesDomingo; //y en este return devuelvo el array
}


//Ejercicio 3

function horaActual(){
    let hora = new Date(); //creo el objeto hora para poder trabajar con date

    //Guardo las horas, los minutos, y los segundos en su respectiva variable
    let horas = hora.getHours();
    let minutos = hora.getMinutes();
    let segundos = hora.getSeconds();

    //compruebo que si los minutos y los son menores que 10 le añada un 0 delante del digito para que se vea correctamente los segundos y los minutos en esta primera forma
    if(minutos < 10){
        minutos = "0" + minutos;
    }

    if (segundos < 10){
        segundos = "0" + segundos;
    }


    return horas + ":" + minutos + ":" +  segundos; //devuelvo las horas, los minutos, y los segundos, en el formato que pide el ejercicio
}

function horaActual1(){
    let hora1 = new Date(); //creo el objeto hora para poder trabajar con date

    let horas1 = hora1.getHours();
    let minutos1 = hora1.getMinutes();
    
    //compruebo que si los minutos son menores que 10, le añado un 0 delante para que se vea correctamente la hora y los minutos
    if(minutos1 < 10){
        minutos1 = "0" + minutos1;
    }

    return "Son las: " + horas1 + "h y " +  minutos1 + "m"; //devuelvo la hora y los minutos
}


//Ejercicio 4 - Este esta en el archivo HTML: "T2_ej4.html"

//Ejercicio 5
function operaciones(opc){
    //declaro las variables para los diferentes resultados de la calculadora
    let resultado = 0;
    let resultado1 = 0;
    let resultado2 = 0;
    let resultado3 = 0;
    let resCos = 0;
    let resSeno = 0;
    let resTang = 0;

    switch (opc) {
        case 1:
            //pido la base y el exponente, y con el operador '**' calculo la potencia de la base introducida
            let base = parseInt(prompt("Introduzca el numero para calcular su potencia: "));
            let exponente = parseInt(prompt("Introduzca el numero exponente: "))
            resultado = base ** exponente;

            return resultado;
        
        case 2:
            //pido un numero y con el siguiente bucle for calculo su raiz
            debugger;
            let num = parseFloat(prompt("Introduzca un numero para calcular su raiz"))
            
            for (let i = 1; i * i <= num; i++){
                resultado = i;               
            }

            return resultado;

        case 3:
            //Pido un numero, y devuelvo los rendodeos requeridos por el ejericicio
            let num1 = parseInt(prompt("Introduzca un numero para saber sus rendondeos: "))

            resultado1 = Math.floor(num1);
            resultado2 = Math.round(random()*num1);
            resultado3 = Math.round();

            return "Redondeo más alta: " + resultado3 + " | Redondeo al alza: " + resultado2 + " | Redondeo a la baja: " + resultado1

        case 4: 
            let angulo = prompt("Introduzca un angulo:")
            let radianes = angulo * (3.14 /180);
            resCos = Math.cos(radianes);
            resSeno = Math.sin(radianes);
            resTang = Math.tan(radianes);

            return "Coseno: " + resCos + " | Seno" + resSeno + " | Tangente: " + resTang;
            
        default:

            return "Opcion introducida invalida, recargue pagina e intentelo de nuevo. ";
    }
}

//Ejercicio 6
function longNombre(nombre, apellidos){
    //lo que hace esta funcion es coger el nombre y apellidos del usuario y devuelve la longitud total de su nombre
    let contador = 0;

    let nombCompleto = nombre + " " + apellidos;

    const nombAcaracteres = nombCompleto.split("");

    for (let i = 0; i < nombAcaracteres.length; i++) {
        contador++;
    }

    return "La longitud de su nombre es de " + contador + " Caracteres";
}

function cadEnMinusculasYMayusculas(nombre, apellidos){
    //lo que hace esta funcion es devolver el nombre del usuario en mayusculas y minusculas
    let nombreCompleto = nombre + " " + apellidos;

    let pasoAMinusculas = nombreCompleto.toLowerCase();
    let pasoAmayusculas = nombreCompleto.toUpperCase();
    
    return "Nombre completo en minusculas: " + pasoAMinusculas + " | Nombre en mayusculas: " + pasoAmayusculas;
}

function SepNombre(nombre, apellidos){
    //lo que hace esta funcion es mostrar de manera separada el nombre y apellidos del usuario
    const ape = apellidos.split(" ");

    let apellido1 = ape[0];
    let apellido2 = ape[1];


    return " Nombre: "  + nombre + "\n Apellido 1: " + apellido1 + "\n Apellido 2: " + apellido2 
}

//Ejercicio7
function numeroMayor(num1, num2, num3){
    //esta funcion, lo que hace es devolver el mayor de los numeros mediante la funcion "Max" usando el objeto Math.
    let numeroGrande;

    numeroGrande = Math.max(num1, num2, num3);
    

    return numeroGrande;
    
}

//Ejercicio 8
function contarA(cadena){
    //lo que hace esta funcion, es devolver la cantidad total de caracteres 'a' que hay en la cadena introducida por el usuario.
    const cad = cadena.split("");
    let contador = 0;

    for (let i = 0; i < cad.length; i++) {
        if(cad[i] == 'a'){
            contador++;
        }
                
    }

    return contador;
}

//Ejercicio 9 

function contVocales(frase){
    let contador = 0;

    const vocales = ["a", "e", "i", "o", "u"];
    const cadena = frase.split("")
    const palabras = frase.split(" ").length;


    for (let i = 0; i < cadena.length; i++) {
        for (let j = 0; j < vocales.length; j++) {
            if (cadena[i]===vocales[j]) {
                contador++;
            }
            
        }

    }

    return "tiene " + contador + " vocales y " + palabras + " palabras";
}

//Ejercicio 10

function contarVocales(frase) {
    debugger;
    let mensaje;
    contadorVocalA = 0;
    contadorVocalE = 0;
    contadorVocalI = 0;
    contadorVocalO = 0;
    contadorVocalU = 0;

    const cadena = frase.split("");
    

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == "a" || cadena[i] == "A" ){
            contadorVocalA++;
        } else if (cadena[i] == "e" || cadena[i] == "E" ) {
            contadorVocalE++
        } else if (cadena[i] == "i" || cadena[i] == "I" ) {
            contadorVocalI++
        } else if (cadena[i] == "o" || cadena[i] == "O" ) {
            contadorVocalO++
        } else if (cadena[i] == "u" || cadena[i] == "U" ) {
            contadorVocalU++
        } else {
            mensaje = "no se pudo contar las vocales"
        }
        
    }

    return  "La vocal A se repite: " + contadorVocalA + " veces \n" + "  La vocal E se repite: " + contadorVocalE  + " veces" + "  \n La vocal I se repite: " + contadorVocalI +  " veces" + " \n La vocal O se repite: " + contadorVocalO + " veces" + " \n La vocal U se repite: " + contadorVocalU + " veces"
}

//Ejercicio 11

