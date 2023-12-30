
//EXERCICIO 1
console.log('Boas vindas');

//EXERCICIO 2
let nome = 'Gabriela';
console.log(`Olá, ${nome}!`);

//EXERCICIO 3
alert(`Olá, ${nome}!`);

//EXERCICIO 4
let linguagemPreferida = prompt('Qual sua linguagem de programação favorita?');
console.log(linguagemPreferida);

//EXERCICIO 5
let valor1 = 39;
let valor2 = 42;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)

//EXERCICIO 6
valor1 = 15;
valor2 = 7;
resultado = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

//EXERCICIO 7
let idade = prompt('Digite a sua idade:');
if (idade > 17) {
    console.log('Você é maior de idade.');
} else {
    console.log('Você é menor de idade.');
}

//EXERCICIO 8
var numero = parseFloat(prompt("Digite um número:"));

if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

//EXERCICIO 9

let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}

//EXERCICIO 10
let nota = 6;

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//EXERCICIO 11
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//EXERCICIO 12
let numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroInteiroAleatorio);

//EXERCICIO 13
numeroInteiroAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiroAleatorio);