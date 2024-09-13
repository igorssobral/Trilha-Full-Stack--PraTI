// 11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

const pedidos = [
  { cliente: 'Igor', produto: 'Cadeira', quantidade: 2 },
  { cliente: 'Andy', produto: 'Mesa', quantidade: 1 },
  { cliente: 'Maria', produto: 'Sofá', quantidade: 3 },
  { cliente: 'Carlos', produto: 'Lâmpada', quantidade: 2 }
];

const agrupamento = {};

pedidos.forEach(pedido => {
  if (!agrupamento[pedido.cliente]) {
      agrupamento[pedido.cliente] = 0;
  }
  agrupamento[pedido.cliente] += pedido.quantidade;
});

console.log(agrupamento);
