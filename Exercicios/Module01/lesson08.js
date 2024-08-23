const prompt = require('prompt-sync')();

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const num1 = Number(prompt('Digite um número: '));
const num2 = Number(prompt('Digite outro número: '));

if (num2 >= num1) {
  console.log(`${num1} - ${num2}`);
} else {
  console.log(`${num2} -> ${num1}`);
}
