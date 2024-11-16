import { useNavigate } from 'react-router-dom';
import Title from '../ui/Title';
import { useState } from 'react';

const FiltroDeLista = () => {
  // Estado para armazenar o termo de busca digitado pelo usuário.
  const [search, setSearch] = useState('');

  // Lista de nomes que será filtrada com base no termo de busca.
  const nomes = [
    'Miguel', 'Maria', 'João', 'Ana', 'Gabriel', 'Beatriz', 'Lucas', 'Sofia', 'Pedro', 'Clara',
    'Rafael', 'Laura', 'Enzo', 'Isabella', 'Leonardo', 'Júlia', 'Arthur', 'Camila', 'Felipe',
    'Carolina', 'Vitor', 'Luísa', 'Caio', 'Rafaela', 'Samuel', 'Gabriela', 'Gustavo', 'Mariana',
    'Matheus', 'Alice', 'Igor', 'Marcos',
  ];

  // Hook para navegar entre páginas usando react-router-dom.
  const navigate = useNavigate();

  // Filtra os nomes com base no termo de busca digitado pelo usuário.
  // Se o campo de busca estiver vazio, retorna a lista completa.
  const filteredNames =
    search !== ''
      ? nomes.filter((nomes) =>
          nomes.toLowerCase().includes(search.toLowerCase()) // Filtragem ignorando maiúsculas/minúsculas.
        )
      : nomes;

  // Redireciona o usuário para a página inicial.
  function handleBackHome() {
    navigate('/');
  }

  return (
    <div className='flex flex-col space-y-5'>
      {/* Componente de título reutilizável */}
      <Title title='Filtro de Lista' />

      {/* Campo de entrada para o usuário digitar o termo de busca */}
      <input
        type='text'
        placeholder='Buscar nome'
        onChange={(e) => setSearch(e.target.value)} // Atualiza o estado de busca com o valor digitado.
      />

      {/* Exibe os nomes filtrados ou uma mensagem caso nenhum nome seja encontrado */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-[95%] lg:w-[500px]'>
        {filteredNames.length > 0 ? (
          filteredNames.map((nome, index) => (
            <li
              key={index} // Atribui uma chave única para cada item da lista.
              className='flex items-center justify-center list-none p-4 bg-zinc-900 border border-indigo-500 rounded-lg'
            >
              {nome}
            </li>
          ))
        ) : (
          // Mensagem exibida caso nenhum nome seja encontrado.
          <p className='w-max'>Nenhum nome encontrado!</p>
        )}
      </div>

      {/* Botão para voltar à página inicial */}
      <button onClick={handleBackHome} className='mx-auto'>
        Voltar para a Home
      </button>
    </div>
  );
};

export default FiltroDeLista;
