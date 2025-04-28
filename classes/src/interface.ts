export abstract class Animal {
    constructor(public readonly categoria: string) {}

    mostrarCategoria(): void{
        console.log(`A categoria é: ${this.categoria}`)
    }

    abstract mostrarDetalhes(): void
    abstract idade: number
}

class Gato extends Animal {
    constructor(public nome: string, public idade: number) {
        super('mamifero')
    }

    mostrarDetalhes(): void {
        console.log("Mostrar detalhes chmado")
    }
}

interface AnimalInterface {
    categoria: string;
    mostrarDetalhes(): void;
    idade?: number;
}

const laica: AnimalInterface = {
    categoria: "mamifero",
    mostrarDetalhes() {
        console.log("qualquer coisa")
    },
    idade: 2
}

console.log(laica)

class Cachorro implements AnimalInterface {
    
    constructor(public categoria: string, public readonly nome: string, public idade?: number) {}

    mostrarDetalhes(): void {
        console.log("mostrar Detalhes de Cachorro")
        console.log(this.nome, this.categoria, (this.idade)? this.idade + 1 : "")
    }

}


const mingal = new Gato("mingal", 6)
console.log(mingal)

const toto = new Cachorro("mamifero", "toto")
console.log(toto)