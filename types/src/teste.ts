function add2(x: number, y?: number) {
    if (y === undefined) {
        return null
    }
    return x + y
}


type testeAlias = number | string | boolean

let teste3:testeAlias

teste3 = 10

let teste4:testeAlias

teste4 = true

type User = {
    nome: string,
    idade?: number
}

const daniel: User = {
    nome: "Daniel",
    idade: 10
}

console.log(daniel)

const maria: User = {
    nome: "Maria"
}

