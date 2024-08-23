const prompt = require('prompt-sync')();

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

const num = Number(prompt('Digite um número: '));

console.log('\nTabuada multiplicação.');
for (let i = 0; i < 11; i++) {
  console.log(`${i} x ${num} = ${i * num}`);
}
console.log('\nTabuada Subtração.');
for (let i = 0; i < 11; i++) {
  console.log(`${num} - ${i} = ${num - i}`);
}
console.log('\nTabuada Divisão.');
for (let i = 1; i < 11; i++) {
  console.log(`${num} / ${i} = ${(num / i).toFixed(1)}`);
}
console.log('\nTabuada Adição.');
for (let i = 0; i < 11; i++) {
  console.log(`${i} + ${num} = ${i + num}`);
}
