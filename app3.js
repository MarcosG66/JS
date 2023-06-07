// Fazer um programa que verifique se um numero é  par ou ímpar
const prompt = require('prompt-sync')();

const entradaDoUsuario = prompt('Digite um número: ');

let restoDaDivisao = entradaDoUsuario % 2;

if (restoDaDivisao == 0 ) {
    console.log(`É par`);
}

else {
    console.log(`É impar`);
}
