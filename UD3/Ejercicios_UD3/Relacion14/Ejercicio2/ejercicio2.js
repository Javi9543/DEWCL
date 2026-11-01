export default class telefonos{
    constructor(num){
    this.num = num;
    this.numLlamadas = 0;
    }
    llamar(){
        return this.numLlamadas++;
    }
}

