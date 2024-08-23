const prompt = require('prompt-sync')();

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

let num = 0;
for (var i = 0; i < 5; i++) {
  num += Number(prompt('Digite um número: '));
}

console.log('A Soma total é: ', num);
