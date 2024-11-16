import { useNavigate } from 'react-router-dom';
import Title from '../ui/Title';
import { useState } from 'react';

const FiltroDeLista = () => {
  const [search, setSearch] = useState('');
  const nomes = [
    'Miguel',
    'Maria',
    'João',
    'Ana',
    'Gabriel',
    'Beatriz',
    'Lucas',
    'Sofia',
    'Pedro',
    'Clara',
    'Rafael',
    'Laura',
    'Enzo',
    'Isabella',
    'Leonardo',
    'Júlia',
    'Arthur',
    'Camila',
    'Felipe',
    'Carolina',
    'Vitor',
    'Luísa',
    'Caio',
    'Rafaela',
    'Samuel',
    'Gabriela',
    'Gustavo',
    'Mariana',
    'Matheus',
    'Alice',
    'Igor',
    'Marcos',
  ];
  const navigate = useNavigate();

  const filteredNames =
    search != ''
      ? nomes.filter((nomes) =>
          nomes.toLowerCase().includes(search.toLowerCase())
        )
      : nomes;

  function handleBackHome() {
    navigate('/');
  }
  return (
    <div className='flex flex-col space-y-5'>
      <Title title='Filtro de Lista' />
      <input
        type='text'
        placeholder='Buscar nome'
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-[95%] lg:w-[500px]'>
        {filteredNames.length > 0 ? (
          filteredNames.map((nome, index) => (
            <li
              key={index}
              className='flex items-center justify-center list-none p-4 bg-zinc-900 border border-indigo-500 rounded-lg '
            >
              {nome}
            </li>
          ))
        ) : (
          <p className='w-max'>Nenhum nome encontrado!</p>
        )}
      </div>
      <button onClick={handleBackHome} className='mx-auto'>
        Voltar para a Home
      </button>
    </div>
  );
};

export default FiltroDeLista;
