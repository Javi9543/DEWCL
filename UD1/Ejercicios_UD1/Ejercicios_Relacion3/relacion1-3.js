//Ejercicio 1

    function calcularEdad(edad1, edad2){
        let resultado1 = edad1 - edad2;
        let resultado2 = resultado1 - 1;

        return "La edad de la persona está entre, " + resultado1 + " y " + resultado2;
    }

//Ejercicio 2
    function calcularRaciones(edadAct, edadMax, cantidad){

        let diferenciaEdad = edadMax - edadAct;
        let anyosAdias=  diferenciaEdad * 365;
        let estimacion = anyosAdias * cantidad

        return "Necesitarás " + estimacion + " raciones de comida para llegar a la edad de " + edadMax;
    }

//Ejercicio 3

    function calcularCirculo(radio){
        
        let calculo1 = radio * 2 * 3.14;
        let rCuadrado = radio * radio;
        let calculo2 = 3.14 * rCuadrado;

        return "La circunferencia del circulo es de: " + calculo1 + "\n el área del circulo es de: " + calculo2;
    }

//Ejercicio 4

    function convertirFarenheit(c){
        
        let conversion = (c * 9 / 5) + 32

        return "La conversion de " + c + "º Celsius a Farenheit, es de: " + conversion + "º Fahrenheit"
    }