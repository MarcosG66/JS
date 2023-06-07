const prompt = require('prompt-sync')();

const nota1 = +prompt ('TD: ')
const nota2 = +prompt ('AP: ')
const nota3= +prompt ('AG: ')


let media = (nota1+nota2+nota3)/3

if (media >= 7) {
    console.log('Aprovado!')
} 

else if (media >= 4 )
{console.log('AF!')}

else {
    console.log('Reprovado!')
}

