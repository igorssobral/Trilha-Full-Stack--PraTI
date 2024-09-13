// Combinação de Estruturas
// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

const vendas = [
  { produto: 'Laptop', quantidade: 5, valor: 1500 },
  { produto: 'Smartphone', quantidade: 10, valor: 800 },
  { produto: 'Tablet', quantidade: 7, valor: 1000 }
];

let totalVendas = 0;
vendas.forEach(venda => {
  totalVendas += venda.quantidade * venda.valor;
});

console.log(`Valor total de vendas: R$${totalVendas}`);
