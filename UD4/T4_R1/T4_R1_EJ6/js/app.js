let colores = [ /* array de objetos de colores */
    { cod: "#FF0000", nomb: "rojo" },
    { cod: "#00FF00", nomb: "verde" },
    { cod: "#0000FF", nomb: "azul" },
    { cod: "#FFFF00", nomb: "amarillo" },
    { cod: "#FF00FF", nomb: "magenta" },
    { cod: "#00FFFF", nomb: "cian" },
    { cod: "#000000", nomb: "negro" },
    { cod: "#FFFFFF", nomb: "blanco" },
    { cod: "#808080", nomb: "gris" },
    { cod: "#FFA500", nomb: "naranja" },
    { cod: "#800080", nomb: "morado" },
    { cod: "#A52A2A", nomb: "marrón"}
]

const pasarRaton = (event) => {
    event.target.style.backgroundColor = color;
}

const sacaRaton = (event) => {
    event.target.style.backgroundColor.nomb
}

const creaTabla = (colores) => {
    let tab = document.createElement("table");
    colores.forEach(color => {
        let filas = document.createElement("tr");
        let col = document.createElement("td");

        col.textContent = color.cod;

        col.addEventListener("mouseover", () => {
            col.style.backgroundColor = color.cod
            col.textContent = color.cod
        })

        col.addEventListener("mouseout", () => {
            col.style.backgroundColor = "";
            col.textContent = color.nomb;
        })

        filas.appendChild(col)
        tab.appendChild(filas)
    });
    
    return tab;
    
}
window.addEventListener("load", ()=>{
    let div = document.getElementById("contenido");
    div.appendChild(creaTabla(colores));
    console.log("main.js");
})