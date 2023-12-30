//EXERCÍCIO 1
let diaSemana = prompt("Digite o dia da semana:");

if(diaSemana == "Sábado" || diaSemana == "Domingo"){
    alert("Bom final de semana!");
}
else{
    alert("Boa semana!");
}

//EXERCÍCIO 2
let numero = prompt("Digite um número");
if(numero >= 0){
    alert("Numero positivo");
}
else{
    alert("Número negativo!");
}

//EXERCÍCIO 3
let pontuacao = 100;
if(pontuacao >= 100){
    alert("Parabéns! Você venceu :)");
}
else{
    alert("Tente novamente para ganhar!");   
}

//EXERCÍCIO 4
let saldo = 3.25;
alert("O saldo na sua conta é: R$" + saldo);

//EXERCÍCIO 5
let nomeUser = prompt("Olá! Digite seu nome:");
alert("Bem vindo(a)" + nomeUser);