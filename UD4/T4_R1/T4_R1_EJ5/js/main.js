function generarCanvas() {
  let filas;
  let columnas;

  //cojo el div para introducirle la tabla
  let canvas = document.getElementById("canvas");
  canvas.innerHTML = "";

  //creo la tabla con sus filas y sus columnas y añado el style
  //para que no se vea la tabla sin nada.
  let canva = document.createElement("table");
  canva.setAttribute("border", "1");

  canva.style.width = "80px";
  canva.style.height = "80px";

  //Este for genera las columnas
  for (let i = 0; i < 100; i++) {
    columnas = document.createElement("tr");

    //Este for interior genera las filas y las añade a cada columna
    for (let j = 0; j < 100; j++) {
      filas = document.createElement("td");
      filas.textContent = "";
      filas.onmousemove = pintarenCanvas;

      columnas.appendChild(filas);
    }

    canva.appendChild(columnas);
  }

  canvas.appendChild(canva);
}

//pinto las celdas de la tabla
const pintarenCanvas = (event) => {
  

  if (event.shiftKey) {
    event.target.style.backgroundColor = "blue";
    console.log("Pintando en azul...");
  } else if (event.ctrlKey) {
    event.target.style.backgroundColor = "red";
    console.log("Pintando en rojo...");
  }
};

const limpiarEnCanvas = (event) => {
    if (event.key === "*") { /* Si la tecla pulsada es *.. */
        let celda = document.querySelector('#canvas td:hover') /* me recoje todos los tds*/

        if(celda){ /* si es un td, que coja la fila seleccionada y al pasar el raton la vaya pintando de blanco */
            let fila = celda.parentElement;
            for (const i of fila.children) {
                i.style.backgroundColor = "white";
            }
            console.log("Linea Limpiada");
        }

    }
    console.log("Tecla pulsada:", event.key); /* probar en consola que tecla se esta pulsando..*/
};

const limpiarTodo = () => {
    let filas = document.querySelectorAll('#canvas td'); /* recojo todas las filas del canvas*/

    filas.forEach(celda => {
        celda.style.backgroundColor = "white";
    });

    console.log("Limpiando canvas...")
}
window.addEventListener("keydown", limpiarEnCanvas); 

window.addEventListener("load", () => {
    generarCanvas();
    document.getElementById("limpiar-canvas").addEventListener("click", limpiarTodo)
});
