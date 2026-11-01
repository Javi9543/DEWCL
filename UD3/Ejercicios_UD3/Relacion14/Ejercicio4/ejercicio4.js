export default class Casas {
  constructor(calle, numVivienda, codPostal) {
    this.cod = codPostal;
    this.num = numVivienda;
    this.calle = calle;

    console.log(`Nueva casa en calle: ${this.calle} nº: ${this.num}, CP: ${this.cod}`)
  }

  setNumero(num){
    this.num = num;
  }

  setCalle(calle){
    this.calle = calle;
  }

  setCodPostal(cod){
    this.codPostal = cod;
  }

  imprimeCalle(){
    return this.calle;
  }

  imprimeNumero(){
    return this.num;
  }

  imprimeCodigo(){
    return this.cod;
  }
}
