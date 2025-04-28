console.log('------------')
// class Animal {
//     categoria: string
//     constructor(categoria: string) {
//         this.categoria = categoria
//     }
    
// }

abstract class Animal {
    // constructor(public categoria: string) {} 
    // constructor(readonly categoria: string) {}
    constructor(public readonly categoria: string) {}

    mostrarCategoria(): void{
        console.log(`A categoria é: ${this.categoria}`)
    }

}

class Gato extends Animal {
    private nome: string
    constructor(nome: string){
        super('mamifero')
        this.nome = nome
    }

    mostrarDetalhes():void {
        console.log(this.nome, this.categoria)
        console.log(this.categoria)
        console.log(this)
    }
}

class Cachorro extends Animal {
    constructor(private _nome: string) {
        super('mamifero')
    }

    get nome() {
        console.log("get nome")
        return this._nome
    }

    set nome(n: string) {
        console.log("set nome")
        this._nome = n
    }

    mostrarDetalhes():void {
        console.log(this._nome + " é um " + this.categoria)
    }
}

// const animal = new Animal("mamifero")
// // console.log(animal.categoria)
// // animal.categoria = "Categoria editada fora da classe"
// // console.log(animal.categoria)
// console.log(animal)
// animal.mostrarCategoria()

const mingal = new Gato("mingal")
// console.log(mingal)
mingal.mostrarDetalhes()
// mingal.nome = "nome alterado"
// console.log(mingal)

const toto = new Cachorro("toto")
console.log('toto.nome: ', toto.nome)
toto.mostrarDetalhes()
toto.mostrarCategoria()
toto.nome = "Novo nome de toto"
console.log(toto.nome)


class Cliente {
    private readonly _listaAnimais: Animal[] = []
    private _tempListaAnimais: Animal[] = []

    adicionarAnimais(...animais: Animal[]): void {
        // console.log("--- ...animais ---")
        // console.log(...animais)
        this._listaAnimais.push(...animais)
        this._tempListaAnimais.length = 0 
        this._tempListaAnimais = [...this._listaAnimais]
    }

    get listaAnimais() {
        return [...this._tempListaAnimais]
    }
}

const marcos = new Cliente()
marcos.adicionarAnimais(toto, mingal)
// console.log(marcos.listaAnimais = [])
console.log(marcos)
console.log(marcos.listaAnimais.length = 0) // edita a array original
console.log(marcos)
