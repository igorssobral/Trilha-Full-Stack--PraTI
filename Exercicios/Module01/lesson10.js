const prompt = require('prompt-sync')();

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const num = Number(prompt('Digite um número: '));

for (var i = 0; i < 10; i++) {
  console.log(num);
}
