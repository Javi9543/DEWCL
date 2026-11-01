function telefonos(num){
    this.num = num;
    this.numLlamadas = 0;
    this.llamar = function(){
        this.numLlamadas++;
    }
}

let telefono1 = new telefonos("6597854250");
let telefono2 = new telefonos("6485475115");

console.log("Objeto telefono1 limpio: ", telefono1);
console.log("Objeto telefono1 limpio: ", telefono2);

telefono1.llamar();
telefono2.llamar();

console.log("Objeto telefono tras uso del metodo llamar: ", telefono1);
console.log("Objeto telefono tras uso del metodo llamar: ", telefono2);