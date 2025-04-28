const teste = document.getElementById('teste') as HTMLButtonElement

teste.addEventListener('click', e => console.log(e))


const teste2 = document.getElementById('teste2') as HTMLButtonElement
teste2.addEventListener('click', e => console.log(e)) 

console.log(teste2)

export default {teste2}