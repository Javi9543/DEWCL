// Ejercicio 1
let ventana;

function abrirVentana(titulo) {
  ventana = window.open("", "", "height=500,width=400,left=1500");
  ventana.document.title = titulo;
}

function cerrarVentana() {
  ventana.close();
}

//Ejercicio2
function CrearVentana() {
  ventana = window.open("", "", "width=400 height=200");
  ventana.document.write(
    `<button onclick="window.close()">CerrarVentana</button>`,
  );
}

function CerrarVentana() {
  ventana.close();
}

//Ejercicio3
function crearVentanas() {
  for (let i = 0; i < 5; i++) {
    ventana = window.open(
      "https://www.google.com",
      "ventana" + i,
      "width=350,height=350",
    );
  }
}

//Ejercicio 4
function cuentaAtras() {
  let segundos = 5;
  const contador = document.getElementById("contador");
  const urlDestino = "https://www.pccomponentes.com";

  const interval = setInterval(() => {
    segundos--;

    if (segundos > 0) {
      contador.textContent = segundos;
    } else {
      clearInterval(interval);
      window.location.href = urlDestino;
    }
  }, 1000);
}
