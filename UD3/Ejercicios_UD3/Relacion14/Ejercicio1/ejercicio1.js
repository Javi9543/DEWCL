/* Ejercicio 1 */

/*B) Funcion constructora para crear un objeto literal pasando nombre y edad. */
export default class personas {
  constructor(nomb, ed) {
    this.nomb = nomb;
    this.ed = ed;
    console.log(
      `Nombre: ${this.nomb}, Edad: ${this.ed}, ${this.mayorEdad()}`,
    );
  }
  mayorEdad() {
    if (this.ed >= 18) {
      return "Es mayor de edad";
    } else {
      return "Menor de edad.";
    }
  }
}
