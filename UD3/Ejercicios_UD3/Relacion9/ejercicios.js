//Ejericio1
const numeroMayor = (ar) => {
  let max = [0];

  for (let i = 0; i < ar.length; i++) {
    max = Math.max(max, ar[i]);
  }

  return max;
};

//Ejercicio 2
const existeColor = (col, cUsu) => {
  for (let i = 0; i < col.length; i++) {
    if (col[i].toLowerCase() == cUsu.toLowerCase()) {
      return "El color: " + cUsu + " está en el array";
    }
  }

  return "El color: " + cUsu + " no está en el array";
};

//Ejercicio 3
const generarNums = (ar) => {
  for (let i = 0; i < 21; i++) {
    ar.push(Math.floor(Math.random() * 21));
  }
};

//Ejercicio 4

const incluir = (ar1, ar2) => {
  let ar3 = [];

  ar1.forEach((elemento) => {
    if (ar2.includes(elemento)) {
      ar3.push(elemento);
    }
  });

  return ar3;
};

const union = (ar1, ar2) => {
  let ar3 = [];

  ar1.forEach((elemento) => {
    ar3.push(elemento);
  });

  ar2.forEach((elemento) => {
    if (!ar3.includes(elemento)) {
      ar3.push(elemento);
    }
  });

  return ar3;
};

const diferencia = (ar1, ar2) => {
  let ar3 = [];

  ar1.forEach((elemento) => {
    if (!ar2.includes(elemento)) {
      ar3.push(elemento);
    }
  });
  return ar3;
};

//Ejercicio 5:
/**
 * Funcion flecha, que busca en un array los valores, Maximo, medio y minimo que hay en el mismo y los devuelve
 * por pantalla.
 * 
 * @param {*} ar Array a buscar elementos
 * @mayor Valor máximo del array
 * @medio Valor medio del array
 * @minimo Valor minimo del array
 * @returns valor, maximo, medio y minimo del array
 * 
 */
const comprobarValores = (ar) =>{
  let mayor = Math.max(...ar);
  let menor = Math.min(...ar);
  let medio;

  /* este for each lo que hace es que si el elemento es menor que numero maximo del array y mayor que el numero
  minimo del array, le asigna a la varianle medio el numero medio que existe en el array. */
  ar.forEach(elemento => {
    if (elemento > menor && elemento < mayor){
      medio = elemento;
    }
  });

  return [mayor, menor, medio];
}

//Ejercicio 6
/**
 * 
 * @param {*} ar Contiene los parrafos en los que se buscará la palabra.
 * @frase Variable que guarda la frase del usuario a buscar
 * @encontrado Variable booleana, que si encuentra la frase a buscar cambia a true y
 * devolvera la sentencia de código del else que es la satisfactoria.
 */
const buscarPalabra = (ar) =>{ 
  let frase = prompt("Introduzca la palabra a buscar: ");
  let encontrado = false;

  for (let i = 0; i < ar.length; i++) {
    if (ar[i].toLowerCase().includes(frase.toLowerCase())) {
      encontrado = true;
      break;
    }
    
  }

  if(!encontrado){
    alert("La palabra ${frase}, no existe en el array.")
  } else {
    alert("La palabra ${frase}, existe en el array.")
  }
  

}

//Ejercicio 7

const ordenarNums = (ar) => {
  
  //Bucle Burbuja: 

    for (let i = 0; i < ar.length - 1; i++) { //recorrer cada pasada
      for (let j = 0; j < ar.length - i - 1; j++) { //recorro cada elemento

        if(ar[j] > ar[j + 1]){ //comprubo si el numero introducido es mayor que el siguiente
                              // de la lista
          //los numeros más pequeños iran hacia delante y 
          //los más grandes irán hacia atras;
          let aux = ar[j]; //guardo el numero de la izquierda
          ar[j] = ar[j + 1]; //copio el menor a la izquerda
          ar[j + 1] = aux; //el numero mayor lo paso a la derecha
        }
      }
      
    }

    return ar;
}