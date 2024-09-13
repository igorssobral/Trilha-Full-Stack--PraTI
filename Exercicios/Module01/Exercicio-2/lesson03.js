// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

const produto = {
  nome: 'Laptop',
  preco: 1500,
  garantia: 2,
  peso: 1.5
};

function filtrarPropriedades(obj, valorMinimo) {
  const resultado = {};
  for (const propriedade in obj) {
      if (obj[propriedade] > valorMinimo) {
          resultado[propriedade] = obj[propriedade];
      }
  }
  return resultado;
}

const filtrado = filtrarPropriedades(produto, 1000);
console.log(filtrado);
