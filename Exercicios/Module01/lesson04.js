const prompt = require('prompt-sync')();

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

console.log(
  '----MENU----\n' + '1- Opção 1\n' + '2- Opção 2\n' + '3- Opção 3\n'
);

const option = Number(prompt('Escolha uma Opção: '));
switch (option) {
  case 1:
    console.log(`Você escolheu a Opção ${option}`);
    break;
  case 2:
    console.log(`Você escolheu a Opção ${option}`);
    break;
  case 3:
    console.log(`Você escolheu a Opção ${option}`);
    break;
  default:
    console.log('Opção inválida!');
}
