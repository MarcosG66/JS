const prompt = require('prompt-sync')();

const nome = prompt('Digite seu nome: ')

const idade = prompt('Digite sua idade: ')

const maiorIdade = 18;

console.log(`Oi ${nome}`);
console.log(`Sua idade é ${idade}`);

if (idade < maiorIdade) {
    console.log(`Você não pode pagar boletos!`);

} else {
    console.log(`Parabéns, já pode pagar boletos!`);
}

