// Manipulação de Arrays de Objetos com forEach
// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

const produtos = [
  { nome: 'Smartphone', preco: 2000, desconto: 0.1 },
  { nome: 'Tablet', preco: 1200, desconto: 0.15 },
  { nome: 'Notebook', preco: 3000, desconto: 0.2 }
];

produtos.forEach(produto => {
  produto.preco -= produto.preco * produto.desconto;
  console.log(`Nome: ${produto.nome}, Novo Preço: R$${produto.preco}`);
});
