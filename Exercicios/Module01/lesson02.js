const prompt = require('prompt-sync')();

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

const age = Number(prompt('Digite sua idade: '));

if (age > 0) {
  if (age < 12) {
    console.log(`Idade: ${age}, sua categoria é [Criança]`);
  } else if (age < 18) {
    console.log(`Idade: ${age}, sua categoria é [Adolescente]`);
  } else if (age < 60) {
    console.log(`Idade: ${age}, sua categoria é [Adulto]`);
  } else {
    console.log(`Idade: ${age}, sua categoria é [Idoso]`);
  }
} else {
  console.log('Idade inválida!');
}
