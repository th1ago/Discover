class Veiculo {
    rodas = 4;
    
    mover(direcoa){}
    virar(direcoa){}
}

class Moto extends Veiculo {
    constructor() {
        super() // puxar atributos e metodos do pai
        this.rodas = 2
    }
}