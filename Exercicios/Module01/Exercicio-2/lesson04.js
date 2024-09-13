// Manipulação de Arrays de Objetos com for of
// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.
const pessoas = [
  { nome: 'Ana', idade: 25, cidade: 'São Paulo' },
  { nome: 'Igor', idade: 30, cidade: 'Monteiro' },
  { nome: 'Maria', idade: 22, cidade: 'Belo Horizonte' }
];

for (const pessoa of pessoas) {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}
