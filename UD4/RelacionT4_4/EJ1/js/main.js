const validaMayuscula = () => {
    const formulario = document.forms.namedItem("form-validacion"); /* Recojo el formulario*/

    let cadena = document.getElementById("valMayuscula").value; /* recojo el contenido del input*/

    for (let i = 0; i < cadena.length; i++) { /* Si algun caracter de la cadena es mayuscula, devuelvo true, si no lo es por defecto
                                                devuelvo false */
        if (cadena[i] === cadena[i].toUpperCase()) {
            return true
        }
    }

    return false;
    
}

const validaCorreo = () => {
    const formulario = document.forms.namedItem("form-validacion"); /*Recojo el formulario*/
    
    let email = document.getElementById("validarCorreo").value; /* Recojo el contenido del input*/

    if (email.includes("@") && email.includes(".es") || email.includes("@") && email.includes(".com")) {
        console.log(`El email ${email}, es valido`);
    } else {
        console.log(`El email ${email}, no es valido`);
    }
}

const validaLongitud = () => {
    const formulario = document.forms.namedItem("form-validacion");/* recupero el formulario */
    let cadena = document.getElementById("validarLongitud").value;
    let longitud = 0;

    for (let i = 0; i < cadena.length; i++) {
        longitud++;
    }

    if(longitud >= 8){
        console.log(`La longitud de la cadena, ${cadena} es válida`);
    } else {
        console.log(`La longitud de la cadena no ${cadena} es valida debe tener al menos 8 caracters`);
    };

}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("button").addEventListener("click", (e) => {
        e.preventDefault();
        console.log('main.js funcionando');
        console.log("Tiene mayuscula: ", validaMayuscula());
        console.log(validaCorreo());
        console.log(validaLongitud());
    });
})