// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

const clientes = [
  { nome: 'Igor', idade: 26, cidade: 'Monteiro' },
  { nome: 'Ana', idade: 32, cidade: 'Rio de Janeiro' },
  { nome: 'Maria', idade: 40, cidade: 'Belo Horizonte' }
];

let contador = 0;
clientes.forEach(cliente => {
  if (cliente.idade > 30) {
      contador++;
  }
});

console.log(`Clientes com mais de 30 anos: ${contador}`);
