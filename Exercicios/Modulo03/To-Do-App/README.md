# To-Do APP

Este é um aplicativo de gerenciamento de tarefas simples, desenvolvido para ajudar a organizar e acompanhar suas atividades diárias. Criado como uma prática de manipulação do DOM, o aplicativo permite adicionar, editar, excluir e concluir tarefas, além de buscar por tarefas específicas e categorizá-las por prioridade.

## Tecnologias Utilizadas

- **HTML5**: Estrutura do conteúdo da página.
- **CSS (TailwindCSS)**: Estilização da interface, com o uso do TailwindCSS para design responsivo e personalização rápida.
- **JavaScript**: Implementação das funcionalidades interativas, como modais, formulários e manipulação do DOM.
- **LocalStorage**: Armazenamento persistente das tarefas, garantindo que elas não sejam perdidas ao recarregar a página.
- **Google Fonts (Inter)**: Tipografia utilizada no aplicativo.
- **Bootstrap Icons**: Ícones para ações como adicionar, editar, concluir e excluir tarefas.
- **AOS (Animate On Scroll)**: Biblioteca para animações nas transições de página.

## Funcionalidades

- **Adicionar Tarefa**: O usuário pode adicionar uma nova tarefa informando título, descrição e prioridade (Alta, Média ou Baixa).
- **Editar Tarefa**: O usuário pode editar tarefas existentes, alterando título, descrição e prioridade.
- **Excluir Tarefa**: O usuário pode excluir tarefas que não são mais necessárias.
- **Concluir Tarefa**: O usuário pode marcar uma tarefa como concluída, alterando seu status.
- **Busca de Tarefas**: O usuário pode buscar tarefas por palavras-chave para localizar facilmente uma tarefa específica.
- **Visualização por Prioridade**: Tarefas podem ser filtradas por prioridade (Alta, Média ou Baixa), com animações de cor para indicar diferentes níveis de urgência.
- **Persistência de Dados**: As tarefas são armazenadas no LocalStorage, permitindo que as informações permaneçam salvas mesmo que o navegador seja fechado ou a página recarregada.

## Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter os seguintes itens instalados no seu sistema:

- Navegador moderno (Chrome, Firefox, Edge, etc.)
- Editor de código (recomendado: Visual Studio Code)

### Passo a Passo

1. **Clone o Repositório**:

   ```bash
   git clone https://github.com/igorssobral/Trilha-Full-Stack-MaisPraTI/tree/main/Exercicios/Modulo03/To-Do-App
   ```
2. **Abra o projeto no seu editor de código**:

    Navegue até a pasta do projeto e abra-o no seu editor de código favorito.

3. **Abra o arquivo `index.html`**:

    Para visualizar o aplicativo, basta abrir o arquivo `index.html` em um navegador. Não há necessidade de servidor ou configuração adicional.

    ```bash
    open index.html
    ```

### Funcionamento Local

O aplicativo funcionará sem a necessidade de um servidor. As tarefas são salvas no LocalStorage do navegador, permitindo que elas permaneçam disponíveis mesmo após recarregar a página ou fechar o navegador. Se quiser reiniciar o aplicativo com uma lista vazia, basta limpar o LocalStorage do navegador.

## Acesso ao Deploy

O aplicativo está disponível para acesso direto por meio do link abaixo:

[🔗 To-Do APP - Acessar Aplicativo](https://to-do-app-iota-pink.vercel.app/)

## Estrutura do Código

- **HTML**: Define a estrutura da interface, com seções para a lista de tarefas, modais para adicionar, editar e excluir tarefas, além do cabeçalho e rodapé do aplicativo.
- **CSS (TailwindCSS)**: Estilização do layout e dos componentes para facilitar a construção de interfaces responsivas e estilos personalizados.
- **JavaScript (script.js)**: Contém a lógica do aplicativo, incluindo manipulação de eventos (como abertura e fechamento de modais), criação e edição de tarefas, exclusão e marcação de tarefas como concluídas, e a funcionalidade de busca de tarefas.

### Principais Funções JavaScript

- **Manipulação de Modais**: Funções como `openModalNewTask()`, `closeModalNewTask()` e outras abrem e fecham modais para adicionar, editar ou excluir tarefas.
- **Adição e Edição de Tarefas**: Ao submeter o formulário de nova tarefa ou editar uma tarefa, o JavaScript coleta os dados e atualiza a lista de tarefas na interface e no `LocalStorage`.
- **Validação de Formulários**: Validações básicas garantem que os campos de entrada estejam preenchidos corretamente.
- **Busca de Tarefas**: A função de busca filtra a lista conforme o usuário digita no campo de pesquisa.
- **Exclusão e Conclusão de Tarefas**: Permite ao usuário excluir ou concluir uma tarefa, removendo-a ou alterando seu status, e atualizando as alterações no `LocalStorage`.
- **Persistência de Dados no LocalStorage**: A cada atualização (adição, edição, exclusão ou conclusão de uma tarefa), o `LocalStorage` é atualizado para manter a lista de tarefas salva no navegador.


