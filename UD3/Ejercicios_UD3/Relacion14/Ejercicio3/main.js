import punto from "./ejercicio3.js";
import recta from "./ejercicio3-1.js";

(function() {
    let punto1 = new punto(4,2);
    let punto2 = new punto(5,2);
    console.log("Elementos del objeto punto1", punto1);

    let recta1 = new recta(punto1, punto2);
    console.log(recta1);
})();