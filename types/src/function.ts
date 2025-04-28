function add(x:number, y:number) {
   return x + y
}

const multply = (x:number, y:number) => {
    return x * y
}

// tipagem de arrow funcion
const subtract: (x:number, y:number) => number = (x, y) => x - y

let teste = add(3, 1)
console.log(teste)

// type User = {
//     name: string,
//     id: number
// }

// type LevelAdmin = "Administrados" | "Autor" | "Editor"

// type Admin = {
//     isAdmin: true,
//     level: LevelAdmin
// }

// type UserAdmin = User & Admin

// let marcos: UserAdmin = {
//     name: "Marcos Tavares",
//     id: 0,
//     isAdmin: true,
//     level: "Administrados"
// }

// type IsAdmin = (user: User) => boolean

// const isAdmin: IsAdmin = (user) => !!(user as UserAdmin).isAdmin

// console.log(isAdmin(marcos))

// let maria: User = {
//     name: "maria",
//     id: 1
// }

// console.log(isAdmin(maria))

export default 2