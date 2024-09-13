const prompt = require('prompt-sync')();

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const number = Number(prompt('Digite um numero: '));

if (number >= 0) {

  if (number % 2 === 0) console.log(`O Número ${number} é Par!`);
  else console.log(`O Número ${number} é Impar!`);

} else console.log('Número Inválido!');
