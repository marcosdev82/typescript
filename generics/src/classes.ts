class Pessoa<T>{
    constructor(private nome: T) {}

    setNome(nome: T): void{
        this.nome = nome
    }
}

const marcos = new Pessoa("marcos tavares")
marcos.setNome('marcos tavares')
// console.log(marcos)
class List<T>{

    private list: T[] = []

    getFromList(index: number): T | null {
        const len = this.list.length
        if(len===0) return null
        if(index > len || index < 0) return null
        return this.list[index]
    }

    removeFromList(index: number): T | null {
        const element = this.getFromList(index)
        if (element !== null) {
            this.list.splice(index, 1)
            return element
        }
        return null
    }

    addToList(element: T): this {
        this.list.push(element)
        return this
    } 
}

class Animal<T>{
    constructor(private nome: T) {}

    setNome(nome: T): void{
        this.nome = nome
    }
}

const ListPessoas = new List<Pessoa<string>>()
ListPessoas
    .addToList(marcos)
    .addToList(new Pessoa("Maria"))
    .addToList(new Pessoa("João"))
    
const listAnimal = new List<Animal<string>>()
listAnimal.addToList(new Animal('toto')).addToList(new Animal('mingal'))

console.log(ListPessoas)
console.log(ListPessoas.getFromList(1))
ListPessoas.removeFromList(0)
console.log(ListPessoas)
console.log(listAnimal)