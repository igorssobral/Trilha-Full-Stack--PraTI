const prompt = require('prompt-sync')();

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let num1 = 0,
  num2 = 1;
const fibonacci = [];

for (let i = 1; i <= 10; i++) {
  fibonacci.push(num1);
  const proximo = num1 + num2;
  num1 = num2;
  num2 = proximo;
}

console.log('Os primeiros 10 números da sequência de Fibonacci são:');
console.log(fibonacci.join(', '));
