# Exercício React App

Este projeto contém várias atividades para praticar conceitos essenciais do ReactJS, como gerenciamento de estado, manipulação de efeitos colaterais com `useState` e `useEffect`, além de interações com a interface do usuário.

## Instruções de Instalação

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/igorssobral/Trilha-Full-Stack-MaisPraTI/tree/main/Exercicios/Modulo04/exer-react-conceitos
   ```

2. Navegue até a pasta do projeto:

```bash
cd exer-react-conceitos
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra seu navegador e acesse http://localhost:5173 para ver o projeto em funcionamento.

# Tarefas

1. **Contador Simples**  
   Este componente exibe um contador com dois botões: "Incrementar" e "Decrementar". A contagem não pode ser menor que zero.  
   **Tecnologias usadas**: useState  
   **Desafio**: Impedir que o contador seja menor que zero.

2. **Alteração de Cor de Fundo**  
   Neste componente, o fundo da página muda de cor cada vez que o usuário clica em um botão. As cores são geradas aleatoriamente.  
   **Tecnologias usadas**: useState, useEffect  
   **Desafio**: Gerar cores aleatórias ao clicar no botão.

3. **Lista de Tarefas**  
   Este aplicativo de lista de tarefas permite ao usuário adicionar e remover tarefas, marcar como concluídas e filtrar tarefas pendentes.  
   **Tecnologias usadas**: useState, map  
   **Desafio**: Implementar a marcação de tarefas como concluídas e a filtragem de tarefas pendentes.

4. **Temporizador com useEffect**  
   Este componente exibe um temporizador que conta o tempo em segundos. Ele inicia automaticamente e pode ser pausado e reiniciado.  
   **Tecnologias usadas**: useState, useEffect  
   **Desafio**: Adicionar funcionalidade de pausa e reinício.

5. **Filtro de Lista**  
   Este componente renderiza uma lista de nomes e permite ao usuário filtrar os itens com base no texto digitado.  
   **Tecnologias usadas**: useState, map  
   **Desafio**: Ignorar maiúsculas e minúsculas ao filtrar.

6. **Formulário de Registro Simples**  
   Este formulário coleta o nome, e-mail e senha do usuário. Após o envio, uma mensagem de boas-vindas é exibida.  
   **Tecnologias usadas**: useState  
   **Desafio**: Garantir que todos os campos estejam preenchidos antes do envio.

7. **Aplicação de Requisição de Dados Simples**  
   Este componente exibe uma lista de posts de uma API pública (como JSONPlaceholder). Um botão permite recarregar os dados, e há um indicador de carregamento.  
   **Tecnologias usadas**: useState, useEffect  
   **Desafio**: Adicionar um indicador de carregamento e botão para recarregar os dados.

8. **Galeria de Imagens com Visualização Detalhada**  
   Este componente exibe uma galeria de imagens e permite a visualização ampliada ao clicar em uma imagem.  
   **Tecnologias usadas**: useState  
   **Desafio**: Implementar navegação entre as imagens no modal.

9. **Timer com Intervalo e Alerta**  
   Neste timer, o usuário define a quantidade de segundos para a contagem regressiva. Quando o tempo chega a zero, um alerta é exibido.  
   **Tecnologias usadas**: useState, useEffect  
   **Desafio**: Adicionar funcionalidades de pausa e reinício.

10. **Componentes com Tabs Navegáveis**  
    Este componente permite alternar entre abas com conteúdo diferente, como "Sobre" e "Contato".  
    **Tecnologias usadas**: useState  
    **Desafio**: Adicionar um efeito visual para destacar a aba ativa.

## Dependências

- react: 18.x.x
- react-dom: 18.x.x
- react-router-dom: 6.x.x
