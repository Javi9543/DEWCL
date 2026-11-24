let arAlumnos = [
  { codigo: 1, dni: "4455544X", Nombre: "Juan López López", edad: 18 },
  { codigo: 2, dni: "7778888X", Nombre: "Luis Mateo López", edad: 25 },
  { codigo: 3, dni: "6654545M", Nombre: "Pedro Guitierrez López", edad: 41 },
  { codigo: 4, dni: "9998897X", Nombre: "María Guitierrez López", edad: 32 },
];

let formatearAlumnos = () => {
    let contenedor = document.getElementById("container");
    for (const element of arAlumnos) {
      const alumno = document.createElement("div");
      alumno.innerText = `
          Código Alumno: ${element.codigo} 
          Nombre Alumno: ${element.Nombre}
          Edad Alumno: ${element.edad}
          DNI Alumno: ${element.dni}
        `;
      contenedor.appendChild(alumno);
    }

    
}

(function(){
    console.log("funcion autoejecutable cargado")
    formatearAlumnos();
})();
