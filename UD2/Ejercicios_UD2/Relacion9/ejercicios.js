//Ejericio1
const numeroMayor = (ar) => {
  let max = [0];

  for (let i = 0; i < ar.length; i++) {
    max = Math.max(max, ar[i]);
  }

  return max;
};

//Ejercicio 2
const existeColor = (col, cUsu) => {
  for (let i = 0; i < col.length; i++) {
    if (col[i].toLowerCase() == cUsu.toLowerCase()) {
      return "El color: " + cUsu + " está en el array";
    }
  }

  return "El color: " + cUsu + " no está en el array";
};

//Ejercicio 3
const generarNums = (ar) => {
  for (let i = 0; i < 21; i++) {
    ar.push(Math.floor(Math.random() * 21));
  }
};

//Ejercicio 4

const incluir = (ar1, ar2) => {
  let ar3 = [];

  ar1.forEach((elemento) => {
    if (ar2.includes(elemento)) {
      ar3.push(elemento);
    }
  });

  return ar3;
};

const union = (ar1, ar2) => {
  let ar3 = [];

  ar1.forEach((elemento) => {
    ar3.push(elemento);
  });

  ar2.forEach((elemento) => {
    if (!ar3.includes(elemento)) {
      ar3.push(elemento);
    }
  });

  return ar3;
};

const diferencia = (ar1, ar2) => {
  let ar3 = [];

  ar1.forEach((elemento) => {
    if (!ar2.includes(elemento)) {
      ar3.push(elemento);
    }
  });
  return ar3;
};
