// Declarando um array

let alunos = ["Jon Oliva", "Freddie Mercury","Annabelle"];

// Exibindo a estrutura do array
console.log(alunos);

// Acessando um elemento especificodo array
console.log(` ${alunos[1]} é o vocalista da banda Queen!🤘`);

/* Mini-exercícios

1) Crie um novo array contendo o nome de 7 coisas que você gosta (artista, música, livro, comida... sei lá, inventa!*/

let curiosidades = ["Fredie Mercury", "Luis Miguel", "We are de campions", "UX Design elementos", "Pizza","PUGs","Viajar","Natal"];


/*2) Em seguida, mostre no console um frase personalizada indicando o nome do segundo, quinto e do sétimo  elemento do array. Use concatenação Ou template string.*/

console.log(`Amo as músicas do cantor ${curiosidades[1]} como sou fã de ${curiosidades[4]}, quando estou na estrada ${curiosidades[6]}`);

/* Arrays como matriz de 2 dimensões */

const  tecnologias = [
    ["HTML5","CSS3","JavaScript"],
    ["Figma", "Photoshop"],
    ["PHP", "Node.js","SQL","Express", ["Apache", "IIS"]]
];

// console.log(tecnologias);


console.log(tecnologias[0][2]); //JavaScript
console.log(tecnologias[1][0]); //Figma
console.log(tecnologias[2][3]); //Express
console.log(tecnologias[0][0]); //HTML5
console.log(tecnologias[2][4][0]); // Apache







