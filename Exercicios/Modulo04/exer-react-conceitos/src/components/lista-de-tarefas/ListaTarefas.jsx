import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../title/Title';
import './ListaTarefas.css';

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
    <div className='container'>
      <Title title='Lista de Tarefas' />
      <div>
        <form onSubmit={handleAddTask}>
          <input
            type='text'
            placeholder='Digite uma Tarefa'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button type='submit'>Adicionar</button>
        </form>
      </div>

      <div className='tasks'>
        <h3>Suas Tarefas</h3>
        <div>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => handleRemoveTask(task)}>Remover</button>
              </li>
            ))
          ) : (
            <p> Sem tarefas no momento</p>
          )}
        </div>
      </div>
      <button onClick={handleBackHome}>Voltar para a Home</button>
    </div>
  );
};

export default ListaTarefas;
