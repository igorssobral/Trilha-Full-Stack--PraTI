import { useNavigate } from 'react-router-dom';
import Title from '../ui/Title';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LoaderCircle } from 'lucide-react';

const RequisicaoDadosSimples = () => {
  // Estados para armazenar os posts, status de carregamento e controle de exibição
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Indica se os dados estão sendo carregados
  const [loadPosts, setLoadPosts] = useState(false); // Controle para carregar ou não os posts

  // Hook do React Router para navegação
  const navigate = useNavigate();

  // useEffect que monitora o estado `loadPosts`
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true); // Ativa o indicador de carregamento

      try {
        // Faz uma requisição para obter os posts
        const response = await axios.get('https://dummyjson.com/posts');
        setPosts(response.data.posts); // Armazena os posts obtidos na resposta
      } catch (error) {
        console.error('Erro ao carregar os posts:', error); // Loga qualquer erro ocorrido
      }

      // Simula um tempo de carregamento para melhorar a experiência do usuário
      setTimeout(() => {
        setIsLoading(false); // Desativa o indicador de carregamento
      }, 1500);
    }

    if (loadPosts) {
      // Se `loadPosts` for verdadeiro, busca os dados
      fetchData();
    }
  }, [loadPosts]); // Executa o efeito sempre que `loadPosts` mudar

  // Função para ativar a busca dos posts
  function handleLoadPosts() {
    setLoadPosts(true);
  }

  // Função para fechar a exibição dos posts e limpar os dados
  function handleClosePosts() {
    setLoadPosts(false);
    setPosts([]); // Limpa a lista de posts
  }

  // Função para voltar à página inicial
  function handleBackHome() {
    navigate('/');
  }

  return (
    <div className='flex flex-col items-center space-y-4'>
      {/* Componente de título reutilizável */}
      <Title title='Aplicação de Requisição de Dados Simples' />
      <div className='space-y-5 flex flex-col items-center'>
        {/* Botão para carregar os posts, exibido somente se `loadPosts` for falso */}
        {loadPosts == false && (
          <button onClick={handleLoadPosts}>Carregar Posts</button>
        )}

        {/* Título "Posts" exibido quando `loadPosts` for verdadeiro */}
        {loadPosts && <h2 className='text-xl lg:text-3xl'>Posts</h2>}

        {/* Contêiner para exibir os posts */}
        <div className='min-w-64 lg:w-3/6 flex flex-col items-center gap-5 max-h-[70vh] p-2 py-5 overflow-y-auto'>
          {!isLoading ? (
            // Renderiza os posts quando não está carregando
            posts.map((post) => (
              <div
                key={post.id} // Identificador único para cada post
                className='w-full h-max space-y-5 bg-zinc-900 p-5 rounded-xl text-center'
              >
                {/* Título do post */}
                <h2 className='text-xl text-zinc-300 font-semibold'>
                  {post.title}
                </h2>

                {/* Corpo do post */}
                <p className='text-zinc-400'>{post.body}</p>

                {/* Tags associadas ao post */}
                <div className='flex justify-center gap-2 mt-3'>
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='text-sm bg-zinc-700 px-2 py-1 rounded-md'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Informações adicionais: reações e visualizações */}
                <div className='mt-4 space-x-4 text-sm text-zinc-400 flex justify-center'>
                  <span className='flex items-center space-x-1'>
                    <span className='text-green-400 mr-1'>
                      {post.reactions.likes}
                    </span>{' '}
                    Likes
                  </span>
                  <span className='flex items-center space-x-1'>
                    <span className='text-red-400 mr-1'>
                      {post.reactions.dislikes}
                    </span>{' '}
                    Dislikes
                  </span>
                  <span className='flex items-center space-x-1'>
                    <span className='text-yellow-400 mr-1'>{post.views}</span>{' '}
                    Views
                  </span>
                </div>
              </div>
            ))
          ) : (
            // Exibe um indicador de carregamento enquanto os dados são buscados
            <div className=' w-max flex gap-2'>
              Carregando
              <p>
                <LoaderCircle className='animate-spin' />
              </p>{' '}
            </div>
          )}
          {!loadPosts && <p className='w-max'>Nenhum Post encontrado!</p>}
        </div>
      </div>
      <div className='flex gap-4 items-center'>
        {/* Botão para voltar para a página inicial */}
        <button onClick={handleBackHome}>Voltar para a Home</button>{' '}
        {/* Botão para fechar os posts, exibido apenas quando `loadPosts` for verdadeiro */}
        {loadPosts && <button onClick={handleClosePosts}>Fechar Posts</button>}
      </div>
    </div>
  );
};

export default RequisicaoDadosSimples;
