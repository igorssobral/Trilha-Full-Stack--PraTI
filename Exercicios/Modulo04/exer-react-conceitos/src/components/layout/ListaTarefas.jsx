import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../ui/Title';

const ListaTarefas = () => {
  // Estado para armazenar a lista de tarefas
  const [tasks, setTasks] = useState([]);
  // Estado para armazenar a nova tarefa que está sendo digitada
  const [newTask, setNewTask] = useState('');

  // Hook do React Router para navegação
  const navigate = useNavigate();

  // Função para retornar à página inicial
  function handleBackHome() {
    navigate('/');
  }

  // Função para adicionar uma nova tarefa
  const handleAddTask = (e) => {
    e.preventDefault(); // Evita o recarregamento da página ao enviar o formulário
    if (newTask.trim()) {
      // Verifica se a nova tarefa não está vazia
      setTasks([...tasks, newTask]); // Adiciona a nova tarefa à lista existente
      setNewTask(''); // Limpa o campo de entrada
    }
  };

  // Função para remover uma tarefa específica
  const handleRemoveTask = (task) => {
    // Filtra a lista de tarefas para remover a tarefa especificada
    setTasks((prevTasks) => prevTasks.filter((t) => t !== task));
  };

  return (
    <div className='flex flex-col'>
      {/* Componente de título reutilizável */}
      <Title title='Lista de Tarefas' />
      <div>
        {/* Formulário para adicionar uma nova tarefa */}
        <form onSubmit={handleAddTask} className='flex flex-col gap-2'>
          <input
            type='text'
            placeholder='Digite uma Tarefa' // Texto placeholder para o campo de entrada
            value={newTask} // Liga o valor do input ao estado `newTask`
            onChange={(e) => setNewTask(e.target.value)} // Atualiza o estado conforme o texto é digitado
          />
          <button type='submit'>Adicionar</button>
        </form>
      </div>

      <div className='flex flex-col gap-5 '>
        <h3 className='mt-5'>Suas Tarefas</h3>
        <div className='flex flex-col gap-5'>
          {tasks.length > 0 ? (
            // Renderiza a lista de tarefas se houver itens
            tasks.map((task, index) => (
              <li
                key={index} // Atribui uma chave única para cada item da lista
                className='list-none w-full flex items-center justify-between p-3 border rounded-lg border-zinc-700'
              >
                {task}
                {/* Botão para remover a tarefa */}
                <button
                  onClick={() => handleRemoveTask(task)} // Chama a função de remoção com a tarefa específica
                  className='bg-red-600 border-none hover:bg-red-900 transition'
                >
                  Remover
                </button>
              </li>
            ))
          ) : (
            // Renderiza uma mensagem caso não haja tarefas
            <p className='text-center text-zinc-400 p-5'>
              {' '}
              Sem tarefas no momento
            </p>
          )}
        </div>
      </div>
      {/* Botão para retornar à página inicial */}
      <button onClick={handleBackHome} className='w-max mx-auto mt-5'>
        Voltar para a Home
      </button>
    </div>
  );
};

export default ListaTarefas;
