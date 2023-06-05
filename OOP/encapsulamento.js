// Estrutural
let altura = 500
let largura = 60

function calculaAltura(){
    return altura * largura;
}
let area = calculaAltura()
console.log(area)

// Orientado a objeto
class Poligno {
    constructor(altura, largura){
        // this - significa o objeto que vai ser criado
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calculaArea()
    }
    // # - significar que esse metodo nao vai ser visivel fora
    #calculaArea() {
        return this.altura * this.largura;
    }
}

//criar o objeto
let poligno = new Poligno(50, 60);
console.log(poligno);