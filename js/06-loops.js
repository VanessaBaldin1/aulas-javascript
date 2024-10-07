/* Principais comandos de repetições
 
-while -> ENQUANTO
-for -> PARA
 
São comandos de uso geral, existem em praticamente qualquer linguagem de programação.
*/

// Exemplo 1: while

let contador = 1;

while (contador <= 50) {
    console.log("Valor do contador é: " + contador);
    contador++; //++ operador de incremento

}

console.log("---\n");

// Exemplo 2: for 

for (let contador = 1; contador <= 10; contador++) {
    console.log("Oieee pela " + contador + "º vez!");

}
console.log("Chega chato para caramba!!");

/* Nomenclatura para variáveis de controle. Embora possamos dar qualquer nome(como contador por exemplo), geralmente são usadas as letras i, j ou k (ou outras letras se necessário) */

for (let i = 1; i <= 3; i++) {
    console.log("Valor de i é: " + i);
}

console.log("\n-----");


/* Loops exclusivos do JS para estruturas de dados */
//for/of -> loop para arrays
const cores = ["rosa", "azul", "preto", "amarelo", "verde", "vermelho"];

for (const cor of cores) {
    console.log(cor);
}

console.log("\n-----");

//Usando o for tradicional 

//Guardando o tamanho do array uma vez (fazendo cache do array)

let quantidade = cores.length;

for (let i = 0; i < quantidade; i++) {

    /* Usamos i dentro dos colchetes como índice dinâmico do array*/
    console.log(cores[i]);
}


//for/in -> loops para objetos

const pessoa = {
    nome: "Fulano de Tal",
    idade: 55,
    cidade: "São Paulo",
    estado: "SP",
    email: "fulano@provedor.com",
    time: "Corinthians"
};

console.log("\n-----");

for (const prop in pessoa) {
    //Mostrar somente o nome da propriedade
    console.log(prop);

    //Mostra somente o valor da propriedade
    console.log(pessoa[prop]);
}

console.log("\n-----");

/* Exercícios
1) Faça um array chamado "clientes" contendo 3 objetos. Cada objeto deverá ter uma propriedade "identificador" (com valores 1, 2 e  3) e uma propriedade "nome" (com os nomes dos clientes: "Goku A", "Naruto B" e "Shiryu C"*/

const clientes = [
    {
        identificador: 1,
        nome: "Maria"
    },

    {
        identificador: 2,
        nome: "Paulo"
    },

    {
        identificador: 3,
        nome: "Marcelo"
    }
]

/*2) Faça um loop ( qualquer um dos que vimos) e mostre no console os dados de cada cliente conforme a seguir
- cliente: Goku, id: 1
- Cliente: Naruto, id:2
- Cliente: Shiryu, id:3 */

for (const cliente of clientes) {

    console.log(cliente);

}

for (const item of clientes) {
    console.log(`Nome: ${item.nome}, Idenficador: ${item.identificador}`);
}


