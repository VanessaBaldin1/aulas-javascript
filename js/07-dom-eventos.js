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

for (let link of links) {
    link.setAttribute("target", "_blank");
}


/* versão 2 (antiga, vale para atributos nativos do HTML)
link.target = "_blank";
*/

/* Manipulando Eventos */
const ex1 = document.querySelector("#exemplo01");

/* const ex1 = document.getElementById ("exemplo01");
Poderíamos também usar a função getElementById em vez do querySelector. A diferença é que ela só funciona para seleção através do ID. Obs.: ao usá-la NÂO COLOQUE #.
*/

const msg = document.querySelector("#mensagem");
const pagina = document.querySelector("body");


/* Função - Ouvinte do Evento (Event listener)
aplicado ao elemento AlVO do evento desejado ("click") e uma função para executar as ações a partir do evento. Obs.: esta função é considerada do tipo "anônima" e é conhecida como "callback".  */

ex1.addEventListener("click", function () {
    msg.innerHTML = "Olá 🌹";

    /* Modificar a página alterando a fonte (CSS via JS)*/
    pagina.style.fontFamily = "verdana";
});

/* Ouvinte de evento para voltar ao normal (sem texto no parágrafo e com fonte padrão na página) O evento ocorrerá ao clicar DUAS VEZES no parágrafo da mensagem */

msg.addEventListener("dblclick", function () {
    msg.innerHTML = ""; //removendo o conteúdo do parágrafo
    pagina.style.fontFamily = "initial"; //voltando para fonte padrão
})

/*  Exemplo 2: modo noturno */
const botaoAtivar = document.querySelector("#ativar");


botaoAtivar.addEventListener("click", function () {
    /* Usamos o toggle do classList para alternar a aplicação/remoção da classe "noturno".
    Na prática, vira um liga/ desliga. */
    pagina.classList.toggle("noturno");


    /* Desafio! FAÇA aqui mesmo: Trocar o texto do botão.
    Se a página deve mostrar a palavra "Desativar". Caso contrário, deve mostrar a palavra "Ativar". Use if/else */

    if (pagina.classList == "noturno") {
        botaoAtivar.innerHTML = "Desativar"
    }
    else { botaoAtivar.innerHTML = "Ativar" }

});

/* Sobre o duplo e o triplo sinal de igual */

let a = "10";
let b = 10;
let resultado = a ===b;
console.log(resultado);

/* == Compara VALORES 
=== compara VALORES E TIPO DE DADOS */



