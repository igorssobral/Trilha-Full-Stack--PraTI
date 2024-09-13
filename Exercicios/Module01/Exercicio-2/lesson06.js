// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.


const funcionarios = [
  { nome: 'Pedro', cargo: 'Analista', salario: 3000 },
  { nome: 'Igor', cargo: 'Gerente', salario: 5000 },
  { nome: 'Amanda', cargo: 'Assistente', salario: 2500 }
];

const salarioMinimo = 3000;
for (const funcionario of funcionarios) {
  if (funcionario.salario > salarioMinimo) {
      console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$${funcionario.salario}`);
  }
}
