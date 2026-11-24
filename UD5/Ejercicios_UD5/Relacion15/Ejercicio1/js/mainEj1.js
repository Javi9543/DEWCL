//totalEnlaces
function numeroEnlaces(){
    let coleccion = document.querySelectorAll("a");

    let totalEnlaces = coleccion.length;

    return totalEnlaces;
}

//penultimo párrafo
function dirAlpenultimoEnlace(){
    let coleccion = document.querySelectorAll("a");
    let pos = coleccion.length - 2;
    let penultimoEnlace = coleccion[pos];

    return penultimoEnlace;
}

//enlaces a google
function numeroEnlacesV2(){
    let coleccion = document.querySelectorAll("a");
    let google = 0;

    for (let i = 0; i < coleccion.length; i++) {
        if (coleccion[i].href.includes("google")) {
            google++;
        }
        
    }

    return google;
}

//enlace a párrafo 3
function enlaceParrafo3(){
    let parrafo3 = document.querySelectorAll("p");
    let google2 = parrafo3[2].querySelector("a");

    return google2;

}

(function(){
    console.log("Total de enlaces", numeroEnlaces());
    console.log("Penultimo enlace", dirAlpenultimoEnlace());
    console.log("numero de enlaces a google: ", numeroEnlacesV2());
    console.log("enlace del párrafo3: ", enlaceParrafo3());
    console.log("main funcionando");
})();