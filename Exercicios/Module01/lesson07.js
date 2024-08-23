const prompt = require('prompt-sync')();

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const numberApples = prompt('Número de maçãs: ');
let totalValue = 0;
if (numberApples > 0) {
  if (numberApples < 12) {
    totalValue = numberApples * 0.3;
  } else {
    totalValue = numberApples * 0.25;
  }
  console.log(
    `Você comprou ${numberApples} maçã(es) e pagará R$ ${totalValue.toFixed(
      2
    )}.`
  );
} else {
  console.log('Numero de maçãs inválidas.');
}
