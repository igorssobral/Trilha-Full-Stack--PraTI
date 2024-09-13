// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

const filmes = [
  { titulo: 'Inception', diretor: 'Christopher Nolan', anoLancamento: 2010 },
  { titulo: 'Interstellar', diretor: 'Christopher Nolan', anoLancamento: 2014 },
  { titulo: 'The Matrix', diretor: 'Wachowskis', anoLancamento: 1999 }
];

const titulos = [];
filmes.forEach(filme => {
  titulos.push(filme.titulo);
});

console.log(titulos);
