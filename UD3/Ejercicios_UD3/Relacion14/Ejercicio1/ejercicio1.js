/* Ejercicio 1 */
/* A) Objeto literal con nombre, edad y metodo que comprueba si es o no mayor de edad */
const persona = {
  nombre: "Javi",
  edad: 18,
  mayorEdad: function () {
    if (this.edad >= 18) {
      return "Es mayor de edad";
    } else {
      return "Menor de edad.";
    }
  },
};

console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, ${persona.mayorEdad()}`)

/*B) Funcion constructora para crear un objeto literal pasando nombre y edad. */
function personas(nomb, ed) {
  this.nomb = nomb;
  this.ed = ed;
  this.mayorEdad = function () {
    if (ed >= 18) {
      return "Es mayor de edad";
    } else {
      return "Menor de edad.";
    }
  };  
}

const persona1 = new personas("Paco", 38);
const persona2 = new personas("Manolo", 21);
const persona3 = new personas("Felipe", 64);
console.log(persona1);

/* C) array con objetos persona */
let arPersona = [];
arPersona.push(persona1, persona2, persona3);
console.log("Array de personas: ", arPersona);

/* d) funcion que recoge el array y devuelve la edad promedio  */

function devolverEdad(ar){
  let edadPromedio = 0;

  for (let i of ar) {
    edadPromedio += i.ed;
  } 

  return edadPromedio / arPersona.length;
}

console.log("La edad promedio del grupo es: ", devolverEdad(arPersona));