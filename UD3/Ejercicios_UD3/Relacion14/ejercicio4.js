function casas(calle, numVivienda, codPostal){
    this.cod = codPostal;
    this.num = numVivienda;
    this.calle = calle;

    console.log(`Nueva casa en calle: ${this.calle} nº: ${this.num}, CP: ${this.cod}`)
    
    this.setNumero = function(num){
        this.num = num;
    }

    this.setCalle = function(calle){
        this.calle = calle;
    }

    this.setCodigoPostal = function(codigo){
        this.cod = codigo;
    }

    this.imprimeCalle = function(){
        return this.calle;
    }

    this.imprimeNumero = function(){
        return this.num;
    }

    this.imprimeCodigoPostal = function(){
        return this.cod;
    }
}

let casaA = new casas("Garcia Prieto", "58", "15706");
let casaB = new casas("Camino Caneiro", "29", "32004");
let casaC = new casas("San Clemente", "s/n", "15705");

console.log("El codigo postal de la casaA es: ", casaA.imprimeCodigoPostal());
console.log("La calle de la casaC es: ", casaC.imprimeCalle());


