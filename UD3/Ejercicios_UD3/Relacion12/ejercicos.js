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
    let tesoro = ar[fila - 1][columna - 1]; //empiezo en la casilla con valor 34
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


//Ejercicio 4
function buscarTesoroV2(ar) {
  let encontrado = false;
  let fila = 1;
  let columna = 1;

  while (!encontrado) {
    let tesoro = ar[fila - 1][columna - 1]; //empiezo en la casilla con valor 34
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

function saddlePoint(ar){
    for (let i = 0; i < nums.length; i++) {
            let max = Math.max(...nums[i]); //Numero máximo de una fila
            for (let j = 0; j < nums[i].length; j++) {
                if(max == nums[i][j]){ //compruebo cual es el numero maximo de la fila
                    let col = [];

                    for (let k = 0; k < nums.length; k++) {
                        col.push(nums[k][j]); //Numeros de una columna                        
                    }

                    let min = Math.min(...col); //cojo el valor minimo de la columna
                    let saddle;

                    if (nums[i][j] === min) {
                      saddle = [i + 1, j + 1]; //guardo el saddle
                      saddle2.push(saddle); //lo guargo en un array por si hay más de uno
                    } 
                }
            }
        }
        
        console.log(nums); //muestro el array original
        
        //compruebo si esta vacio para mandar un mensaje de error y si no los hay muestro el/los saddle/s
        if(saddle2.length === 0){
            console.log("No hay saddle points.")
        } else {
            console.log("Saddle Point: ")
            console.log(saddle2);
        }
      
}
