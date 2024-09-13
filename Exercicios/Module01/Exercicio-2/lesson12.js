// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

const estoque = [
  { produto: 'Caneta', quantidade: 5, minimo: 10 },
  { produto: 'Caderno', quantidade: 15, minimo: 5 },
  { produto: 'Lápis', quantidade: 3, minimo: 10 }
];

estoque.forEach(item => {
  if (item.quantidade < item.minimo) {
      item.quantidade *= 2;
  }
  console.log(item);
});
