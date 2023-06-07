const prompt = require('prompt-sync')();

//const nome = prompt('');
//console.log(`Oi ${nome}`);

let nome1 = 'Ze';
let nome2 = 'Maria';

let expressao2 = nome1 == nome2;

console.log('Tipo da variavel: ', typeof expressao2)
console.log('Expressao: ', expressao2)

if (expressao2) {
    console.log('os nomes sao iguais');
}
else {
    console.log('os nomes sao diferentes');
}