import { useState } from 'react';
import Title from '../ui/Title';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('sobre');

  const navigate = useNavigate();

  function handleBackHome() {
    navigate('/');
  }

  const renderContent = () => {
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
            </form>{' '}
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
        return <div>Selecione uma aba.</div>;
    }
  };

  return (
    <div className='w-80 flex flex-col font-sans mt-10'>
      <Title title='Tabs' />
      <div className='flex border-b border-b-indigo-600'>
        <div
          className={`flex-1 text-center py-2 cursor-pointer transition-all duration-300 ${
            activeTab === 'sobre' ? 'bg-indigo-600' : ''
          }`}
          onClick={() => setActiveTab('sobre')}
        >
          Sobre
        </div>
        <div
          className={`flex-1 text-center py-2 cursor-pointer transition-all duration-300 ${
            activeTab === 'contato' ? 'bg-indigo-600 ' : ''
          }`}
          onClick={() => setActiveTab('contato')}
        >
          Contato
        </div>
      </div>
      <div className='p-4 mt-4 rounded'>{renderContent()}</div>
      <button onClick={handleBackHome} >Voltar para a Home</button>
    </div>
  );
};

export default Tabs;
