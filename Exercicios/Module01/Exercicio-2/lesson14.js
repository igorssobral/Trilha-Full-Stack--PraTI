// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

const empresa = {
  departamentos: [
      {
          nome: 'TI',
          funcionarios: [
              { nome: 'Igor', cargo: 'Desenvolvedor' },
              { nome: 'Andy', cargo: 'Analista' }
          ]
      },
      {
          nome: 'RH',
          funcionarios: [
              { nome: 'Carlos', cargo: 'Gerente de RH' },
              { nome: 'Julia', cargo: 'Assistente de RH' }
          ]
      }
  ]
};

for (const departamento of empresa.departamentos) {
  console.log(`Departamento: ${departamento.nome}`);
  for (const funcionario of departamento.funcionarios) {
      console.log(`  Funcionário: ${funcionario.nome}, Cargo: ${funcionario.cargo}`);
  }
}
