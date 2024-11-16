import { useState } from 'react';
import Title from '../ui/Title'; 
import { Facebook, Instagram, Linkedin } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom'; 

const Tabs = () => {
  // Estado para controlar a aba ativa
  const [activeTab, setActiveTab] = useState('sobre');

  // Hook de navegação para voltar à home
  const navigate = useNavigate();

  // Função para navegar de volta à página inicial
  function handleBackHome() {
    navigate('/');
  }

  // Função para renderizar o conteúdo de acordo com a aba ativa
  const renderContent = () => {
    // Renderiza conteúdo com base na aba ativa
    switch (activeTab) {
      case 'sobre':
        return (
          <div className='space-y-5'>
            <Title title='Sobre' desc='Sobre a empresa...' />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              perferendis aperiam maiores quod laboriosam qui magnam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              perferendis aperiam maiores quod laboriosam qui magnam, eum sit
              commodi quas tempore reprehenderit saepe perspiciatis eveniet quam
              vero sapiente aspernatur labore.
            </p>
          </div>
        );
      case 'contato':
        return (
          <div className='space-y-5 flex flex-col items-center'>
            <Title title='Contato' desc='Entre em contato...' />
            {/* Formulário de contato */}
            <form action='' className='space-y-2'>
              <input type='text' placeholder='nome' className='w-full' />
              <input type='text' placeholder='email' className='w-full' />
              <textarea
                name=''
                id=''
                placeholder='mensagem'
                className='resize-none w-full'
              ></textarea>
              <button type='button' className='w-full'>
                Enviar mensagem
              </button>
            </form>
            {/* Ícones de redes sociais */}
            <div className='flex items-center gap-4'>
              <button className='text-zinc-400'>
                <Linkedin />
              </button>
              <button className='text-zinc-400'>
                <Facebook />
              </button>
              <button className='text-zinc-400'>
                <Instagram />
              </button>
            </div>
          </div>
        );
      default:
        return <div>Selecione uma aba.</div>; // Mensagem caso nenhuma aba seja selecionada
    }
  };

  return (
    <div className='w-80 flex flex-col font-sans mt-10'>
      {/* Componente de título reutilizável */}
      <Title title='Tabs' />
      <div className='flex border-b border-b-indigo-600'>
        {/* Aba "Sobre" */}
        <div
          className={`flex-1 text-center py-2 cursor-pointer transition-all duration-300 ${
            activeTab === 'sobre' ? 'bg-indigo-600' : ''
          }`}
          onClick={() => setActiveTab('sobre')} // Alterando a aba ativa para "Sobre"
        >
          Sobre
        </div>
        {/* Aba "Contato" */}
        <div
          className={`flex-1 text-center py-2 cursor-pointer transition-all duration-300 ${
            activeTab === 'contato' ? 'bg-indigo-600 ' : ''
          }`}
          onClick={() => setActiveTab('contato')} // Alterando a aba ativa para "Contato"
        >
          Contato
        </div>
      </div>
      {/* Exibindo conteúdo da aba ativa */}
      <div className='p-4 mt-4 rounded'>{renderContent()}</div>
      {/* Botão para voltar à página inicial */}
      <button onClick={handleBackHome}>Voltar para a Home</button>
    </div>
  );
};

export default Tabs;
