import axios from 'axios';

type ResponseUser = { name: string, id: number, email: string }
/**
 * Usando o conceito de generics para tipar o retorno de uma requisição assincrona
 */
axios.get<Array<ResponseUser>>('http://localhost:3001/users').then((response) => {
    console.log("---- response.data ----")
    const resposta = response.data[0]
    console.log(resposta.name)
});

const maria = <ResponseUser>{name: "Maria", id: 2, email: "marcos@teste.com"}

axios.post<ResponseUser>('http://localhost:3001/users', maria).then((response) => {
    console.log(response.data.id)
});  