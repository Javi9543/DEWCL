import Casas from "./ejercicio4";
(function() {
    let casaA = new Casas("Garcia Prieto", "58", "15706");
    let casaB = new Casas("Camino Caneiro", "29", "32004");
    let casaC = new Casas("San Clemente", "s/n", "15705");

    console.log("El codigo postal de la casaA es: ", casaA.imprimeCodigoPostal());
    console.log("La calle de la casaC es: ", casaC.imprimeCalle());

})