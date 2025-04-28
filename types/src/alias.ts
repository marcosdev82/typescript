// não é obrigatório colocar o tipo do retorno, pois o typescript já insere por inferencia
// function add2(x: number, y?: number): number | null 
function add2(x: number, y?: number) {
    if (y === undefined) {
        return null
    }
    return x + y
}

const teste2 = add2(10)

// usando union para criar um alias
type testeAlias =  number | string | boolean 

let teste3: testeAlias

teste3 = 10
teste3 = "Teste 3"
teste3 = true

let teste4: testeAlias

teste4 = 11

type User =  {
    nome: string,
    idade?: number
}

const daniel: User = {
    nome: "Daniel"
}

const maria: User = {
    nome: "Maria",
    idade: 31,
} 

type sizes = "12px" | "18px" | "24px"

const small: sizes = "12px"
const normal: sizes = "18px"
const larget: sizes = "24px"

export default 1 