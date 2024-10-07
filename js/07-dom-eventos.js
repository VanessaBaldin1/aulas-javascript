/* Funções de acesso e manupulação do DOM

- querySelector() é uma função para selecionar um único elemento na página(DOM).

- querySelectorAll() é uma função para selecionar VÁRIOS elementos na página (DOM).

No dois casos, a seleção é feita usando seletores comuns, ao que fazemos no CSS.*/

/* Exemplos */

const titulo = document.querySelector("h1");

const textoDOM = document.querySelector(".texto-dom");

const subtitulos = document.querySelectorAll("h2");

const varios = document.querySelectorAll("p, img, button");

console.log(varios);

/* Modificando elementos do DOM */
titulo.textContent = "Olá JavaScript";

// textoDom.innerHTML = "<i>Márcio será reprovado!</i>";

/* Selecionar todos os linksda lista de referências e colocar neles o atributo target valendo _blank */

let links = document.querySelectorAll(".lista-de-referencias a");

console.log(links);
/* versão 1 (moderna, vale para qualquer atributo) */
// links[0].setAttribute("target", "_blank");

for(let link of links){
    link.setAttribute("target","_blank");
}


/* versão 2 (antiga, vale para atributos nativos do HTML)
link.target = "_blank";
*/

/* Manipulando Eventos */
const ex1 = document.querySelector("#exemplo01");
const msg = document.querySelector("#mensagem");

ex1.addEventListener("click", function(){
    msg.innerHTML = "Olá 🌹";
});