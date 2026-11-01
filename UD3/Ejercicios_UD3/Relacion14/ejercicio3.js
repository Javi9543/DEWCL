function punto(x, y){
    this.x = x;
    this.y = y;

    return `X: ${this.x} | Y: ${this.y}`;
}

let punto1 = new punto(2, 5);
let punto2 = new punto(4, 2)

console.log("Resultado funcion constructora punto: ", punto1);

function recta(puntoA, puntoB){
    this.puntoA = puntoA;
    this.puntoB = puntoB;

    return "Coordenadas punto1: " + puntoA + " Coordenadas Punto B: " + puntoB;
}

let recta1 = new recta(punto1, punto2);
console.log("Puntos en la recta: ", recta1);