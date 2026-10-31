/* Ejercicio 1 */
const sum = (n1, n2) => n1 + n2;

const stringLength = (str) => str.length;

const stringLengthV2 = (str) => {
  let longitud = str.length;

  return longitud;
};

let alertas = [
  "Hey, you are awesome",
  "You are so wonderful",
  "What a marvel you are",
  "You're so lovely",
  "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES",
];

const showAlert = (nombre) => alert(alertas[Math.floor(Math.random() * alertas.length)] + `, ${nombre}!`);

/* Ejercicio 2 */
const saludo = (nombre, edad) => `Hello, I am ${nombre} and I am ${edad} years old`;

/* Ejercicio 3 */
const sumaArray = (numeros) => numeros.reduce((i, num) => i + num);

/* Ejercicio 4*/
let eye = "eye";
const fire = () => `bulls-${eye}`