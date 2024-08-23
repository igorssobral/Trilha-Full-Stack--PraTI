const prompt = require('prompt-sync')();

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const note = Number(prompt('Digite uma Nota: '));

if (note >= 0 && note <= 10) {
  if (note < 6) {
    console.log(`Sua nota é ${note} e você foi Reprovado!`);
  } else if (note < 7) {
    console.log(`Sua nota é ${note} e você foi pra recuperação!`);
  } else {
    console.log(`Sua nota é ${note} e você foi Aprovado, Parabéns!`);
  }
} else {
  console.log('Nota Inválida!');
}
