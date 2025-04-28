type User = {
    name: string,
    id: number
}

type LevelAdmin = "Administrados" | "Autor" | "Editor"

type Admin = {
    isAdmin: true,
    level: LevelAdmin
}

type UserAdmin = User & Admin

let marcos: UserAdmin = {
    name: "Marcos Tavares",
    id: 0,
    isAdmin: true,
    level: "Administrados"
}

export default 1