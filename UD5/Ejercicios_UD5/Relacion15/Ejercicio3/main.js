import { arrArticulos } from "./modulos/articulos.mjs";

const formatearArticulo = () => {
  let contendor = document.getElementById("container");

  arrArticulos.forEach((articulo) => {
    let elemento = document.createElement("div")
    
    elemento.innerText = `
      Id producto: ${articulo.id}
      Nombre: ${articulo.title} 
      Precio: ${articulo.price} euros
      Categoria: ${articulo.category}
    `

    contendor.appendChild(elemento);
  });
}



//Funcion Main
(function Main() {
  /* console.log("Mostrando artículos");
  console.log(arrArticulos);
  arrArticulos.forEach((articulo) => {
  console.log(articulo);
  }); */

  formatearArticulo();
})();


