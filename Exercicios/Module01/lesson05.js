const prompt = require('prompt-sync')();

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const weight = Number(prompt('Digite se peso: '));
const height = Number(prompt('Digite sua altura ex:(1.80): '));

const IMC = (weight / height ** 2).toFixed(2);
let result;
if (IMC < 18.5) {
  result = 'Abaixo do Peso.';
} else if (IMC <= 24.9) {
  result = 'Peso Normal.';
} else if (IMC <= 29.9) {
  result = 'Sobrepeso';
} else if (IMC <= 34.9) {
  result = 'Obesidade grau I';
} else if (IMC <= 39.9) {
  result = 'Obesidade grau II';
} else result = 'Obesidade grau III';

console.log(`Seu IMC é ${IMC} e sua categoria de peso é ${result}`);
