class Atleta {
    peso; 
    categoria;

    constructor(peso) {
        this.peso = peso
    }

    definirCategoria() {
        if (this.peso <= 50) {
            this.categoria = 'infantil'
        }
        else if (this.peso <= 65) {
            this.categoria = 'juvenil'
        }
        else {
            this.categoria = 'adulto'
        }
    }
} 


// polimorfismo aplicado
class Lutador extends Atleta {
    constructor(peso) {
        super(peso)
    }

    definirCategoria() {
        if (this.peso <= 50) {
            this.categoria = 'pena'
        }
        else if (this.peso <= 65) {
            this.categoria = 'leve'
        }
        else {
            this.categoria = 'pesado'
        }
    }
}