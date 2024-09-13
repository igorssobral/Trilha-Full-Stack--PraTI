// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

const livro = {
  titulo: '1984',
  autor: 'George Orwell',
  anoPublicacao: 1949,
  genero: 'Dystopian'
};

if (!livro.editora) {
  livro.editora = 'Editora Exemplo';
}

console.log(livro);
