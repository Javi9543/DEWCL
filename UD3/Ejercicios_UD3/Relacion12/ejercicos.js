//Ejercicio 2
const empiezanPorJ = (ar) => {
  let filtro = ar.filter((nomb) => nomb.startsWith("J"));
  let iniciales = filtro.map((nom) =>
    nom
      .split(" ")
      .map((letra) => letra[0])
      .join(""),
  );
  let ordenarIniciales = iniciales.sort();
  return ordenarIniciales;
};

//Ejercicio 3
function buscarTesoro(ar) {
  let encontrado = false;
  let fila = 1;
  let columna = 1;
  while (!encontrado) {
    let tesoro = mapaTesoro[fila - 1][columna - 1]; //empiezo en la casilla con valor 34
    let fila1 = Math.floor(tesoro / 10); //me quedo con la fila (el resto y la division es 10 debido al sistema decimal)
    let columna1 = tesoro % 10; //me quedo con la columna

    if (fila === fila1 && columna === columna1) {
      //si fila 1 y fila, columna 1 y columna coinciden
      //tenemos el tesoro

      encontrado = true;
      return `El tesoro está en las coordenadas ${fila} ${columna}, que su resultado es: ${tesoro} `;
    } else {
      //Si no coinciden la fila y la columna, coge una nueva fila y columna a la que ir
      fila = fila1;
      columna = columna1;
    }
  }
}

function buscarTesoroV2(ar) {
  let encontrado = false;
  let fila = 1;
  let columna = 1;
  while (!encontrado) {
    let tesoro = mapaTesoro[fila - 1][columna - 1]; //empiezo en la casilla con valor 34
    let fila1 = Math.floor(tesoro / 10); //me quedo con la fila (el resto y la division es 10 debido al sistema decimal)
    let columna1 = tesoro % 10; //me quedo con la columna

    if (fila === fila1 && columna === columna1) {
      //si fila 1 y fila, columna 1 y columna coinciden
      //tenemos el tesoro

      encontrado = true;
      return `El tesoro está en las coordenadas ${fila} ${columna}, que su resultado es: ${tesoro} `;
    } else {
      //Si no coinciden la fila y la columna, coge una nueva fila y columna a la que ir
      fila = fila1;
      columna = columna1;
    }
  }
}
