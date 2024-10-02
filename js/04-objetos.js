// Exemplo 1: Objeto com os dados de uma pessoa

const pessoa = {
    //propriedade: valor
    nome: "Chaves",
    idade: 10,
    cidade: "São Paulo",
    estado: "SP"
};

//Exibindo a estrutura do objeto
console.log(pessoa);

//Acessando determinadas propriedades
console.log(`O ${pessoa.nome} possui ${pessoa.idade} anos e mora em ${pessoa.cidade}.`);

//Exemplo 2: objeto com array
const livro = {
    titulo: "Senhor dos Anéis",
    autor: "J.R.R Tolkien",
    volumes: [
        "A Sociedade do Anel",
        "As Duas Torres",
        "O Retorno do rei"
    ]
};

//Exibindo a estrutura
console.log(livro);

//Acesso usando nome da prop.e índice do array desta prop.
console.log(`O segundo ${livro.volumes[1]}`);

//Exemplo 3: array de objetos
const livros = [
    {
        titulo: "Harry Potter",
        autor: "J.K. Rowling"
    },
    {
        titulo: "Senhor dos Anéis",
        autor: "J.R.R Tolkien"
    },
    {
        titulo: "Ghost Rider",
        autor: "Neil Peart"
    }
];

//Acessando através do índice a prop.
console.log(livros[1].autor);

/* Crie um objeto chamado "aluno" contendo os seguintes dados:
Nome Completo
Data de Nascimento
Lista de telefones (fixo e celular)
DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente): 
   rua
   número
   bairro
Mostre no console o nome do aluno, o telefone celular e o bairro em que mora. */


const aluno = {
        nomeCompleto: "Fulando de Tal",
        dataDeNascimento: "04/03/1987",
        telefones: [
            "(11) 2356-3000",
            "(11) 98558-4547"
            ],
        endereco: {
            rua: "Rua Francisco Coimbra",
            número: "403",
            bairro:"Penha"
        }
};

console.log(`${aluno.nomeCompleto} ${aluno.telefones[1]} ${aluno.endereco.bairro}` );



