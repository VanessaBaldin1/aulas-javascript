/* Comandos Condicionais
if -> SE
else -> SENÂO */

// Exemplo 1: Condicional simples

let numero = 5;
if (numero > 10) {
    console.log(numero);
}

// Exemplo 2: condicional composta
let aluno = "Klaibert";
let idade = 78;

/* Lógica: verificar se o aluno é menor de idade ou maior de idade. */
if (idade < 18) {
    console.log("É menor de idade");

} else {
    console.log("É maior de idade");
}

console.log("---\n");

// Exercícios (Faça Aqui)

/* 1)Crie duas variáveis conforme a seguir:
Nota 1 (contendo um valor de 0 a 10) 
Nota 2 (contendo outro valor de 0 a 10)*/

let nota1 = 9;
let nota2 = 8;

/* 2) Crie uma variável chamada " Média" das duas notas informadas. Dica: você deve somar as duas notas e depois dividir por 2. */
let soma = nota1 + nota2;
let media = soma / 2;

/* 3) Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". Caso contrário, mostre "reprovado". */
if (media >= 7) {
    console.log(`${media} Aprovado Parabéns`);

} else {
    console.log(`${media} Reprovado fazer recuperação`);    
}

/* ShortHand if/else (if/else "curto/abreviado")
usando operador ternário ?: */

let situacao = media >=7 ? "aprovado":"reprovado";
console.log(situacao);
