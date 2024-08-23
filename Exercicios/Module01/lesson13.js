const prompt = require('prompt-sync')();

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

let nums = 0;
let count = 0;

do {
  const num = Number(prompt('Digite um número: '));
  if (num === 0) {
    break;
  }
  nums += num;
  count++;
} while (true);
console.log('A média aritmética é: ', nums / count);
