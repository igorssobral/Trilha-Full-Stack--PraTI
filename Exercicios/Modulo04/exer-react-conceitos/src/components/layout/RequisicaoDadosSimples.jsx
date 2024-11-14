import { useNavigate } from 'react-router-dom';
import Title from '../ui/Title';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LoaderCircle } from 'lucide-react';

const RequisicaoDadosSimples = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadPosts, setLoadPosts] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const response = await axios.get('https://dummyjson.com/posts');
        setPosts(response.data.posts);
      } catch (error) {
        console.error('Erro ao carregar os posts:', error);
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }

    if (loadPosts) {
      fetchData();
    }
  }, [loadPosts]);

  function handleLoadPosts() {
    setLoadPosts(true);
  }
  function handleClosePosts() {
    setLoadPosts(false);
    setPosts([]);
  }
  function handleBackHome() {
    navigate('/');
  }

  return (
    <div className='flex flex-col items-center space-y-4'>
      <Title title='Aplicação de Requisição de Dados Simples' />
      <div className='space-y-5 flex flex-col items-center'>
        {loadPosts == false && (
          <button onClick={handleLoadPosts}>Carregar Posts</button>
        )}
        {loadPosts && <h2 className='text-xl lg:text-3xl'>Posts</h2>}
        <div className='min-w-64 lg:w-3/6 flex flex-col items-center gap-5 max-h-[70vh] p-2 py-5 overflow-y-auto'>
          {!isLoading ? (
            posts.map((post) => (
              <div
                key={post.id}
                className='w-full h-max space-y-5 bg-zinc-900 p-5 rounded-xl text-center'
              >
                {/* Título do post */}
                <h2 className='text-xl text-zinc-300 font-semibold'>
                  {post.title}
                </h2>

                {/* Corpo do post */}
                <p className='text-zinc-400'>{post.body}</p>

                {/* Tags */}
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

                {/* Reações e visualizações */}
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
        <button onClick={handleBackHome}>Voltar para a Home</button>{' '}
        {loadPosts && <button onClick={handleClosePosts}>Fechar Posts</button>}
      </div>
    </div>
  );
};

export default RequisicaoDadosSimples;
