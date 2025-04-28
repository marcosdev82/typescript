interface Action<T> {
    action: T
}

type Action<T = string> = {
    action: T
}

const step1: Action<number> = {
    action: 0
}

step1.action = 20

console.log(step1)

const step2: Action<boolean> = {
    action:  true
}

console.log(step2)

const step3: Action  = {
    action: "qualquer coisa"
}

console.log(step3)

type NumberOrString = number | string
interface ActionI<T extends NumberOrString = string, U = number> {
    action: T,
    timestamp: U
}

const step4: ActionI = {
    action: "delete",
    timestamp: 123
}

console.log(step4)

export default "teste"