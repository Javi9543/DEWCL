function generarCanvas(){
    let filas;
    let columnas; 

    //cojo el div para introducirle la tabla
    let canvas = document.getElementById('canvas');
    canvas.innerHTML = "";

    //creo la tabla con sus filas y sus columnas y añado el style 
    //para que no se vea la tabla sin nada.
    let canva = document.createElement('table');
    canva.setAttribute("border", "1");

    canva.style.width="80px";
    canva.style.height="80px";

    //Este for genera las columnas
    for (let i = 0; i < 100; i++) {
        columnas = document.createElement('tr');

        //Este for interior genera las filas y las añade a cada columna
        for (let j = 0; j < 100; j++) {
            filas = document.createElement('td');
            filas.textContent = "";
            filas.onmousemove = pintarenCanvas;
            
            columnas.appendChild(filas);
        }
        
        canva.appendChild(columnas);
    }

    canvas.appendChild(canva)

    
}

//pinto las celdas de la tabla
const pintarenCanvas = (event) => {
    console.log(`Coordenadas del raton X: ${event.clientX} y: ${event.clientY}` );
    console.log(`El ratón esta en el objeto: ${event.target.tagName}` );
    
    if(event.shiftKey){
        event.target.style.backgroundColor = "blue";
        console.log("Pintando en azul...");

    } else if (event.ctrlKey){
        event.target.style.backgroundColor = "red";
        console.log("Pintando en rojo...");
    }
}

window.addEventListener("load", () => {
    generarCanvas();
} )