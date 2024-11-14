import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../ui/Title';

const ListaTarefas = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const navigate = useNavigate();

  function handleBackHome() {
    navigate('/');
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (task) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t !== task));
  };
  return (
    <div className='flex flex-col'>
      <Title title='Lista de Tarefas' />
      <div>
        <form onSubmit={handleAddTask} className='flex flex-col gap-2'>
          <input
            type='text'
            placeholder='Digite uma Tarefa'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button type='submit'>Adicionar</button>
        </form>
      </div>

      <div className='flex flex-col gap-5 '>
        <h3 className='mt-5'>Suas Tarefas</h3>
        <div className='flex flex-col gap-5'>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <li
                key={index}
                className='list-none w-full flex items-center justify-between p-3 border rounded-lg border-zinc-700'
              >
                {task}
                <button
                  onClick={() => handleRemoveTask(task)}
                  className='bg-red-600 border-none hover:bg-red-900 transition'
                >
                  Remover
                </button>
              </li>
            ))
          ) : (
            <p className='text-center text-zinc-400 p-5'>
              {' '}
              Sem tarefas no momento
            </p>
          )}
        </div>
      </div>
      <button onClick={handleBackHome} className='w-max mx-auto mt-5'>
        Voltar para a Home
      </button>
    </div>
  );
};

export default ListaTarefas;
