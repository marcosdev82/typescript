function SomaOuConcatena(x: number | string, y: number | string) {
   return (typeof x === "number" &&  typeof y === "number")  ? x + y : x + "" + y   
}

console.log(SomaOuConcatena(1,2))
console.log(SomaOuConcatena(1,"3"))

type numberOrString = number | string

function SomaOuConcatenaG<T extends numberOrString>(x: T, y: T) {
   return (typeof x === "number" &&  typeof y === "number")  ? x + y : x + "" + y   
} 

console.log(SomaOuConcatenaG("1", "3"))