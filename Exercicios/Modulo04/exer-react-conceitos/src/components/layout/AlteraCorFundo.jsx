import { useState } from 'react';
import Title from '../ui/Title';
import { useNavigate } from 'react-router-dom';

const AlteraCorFundo = () => {
  const [corFundo, setCorFundo] = useState('#fff');

  const navigate = useNavigate();

  function handleBackHome() {
    navigate('/');
  }

  const gerarCorAleatoria = () => {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
      cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
  };

  const MudarCores = () => {
    setCorFundo(gerarCorAleatoria());
  };

  return (
    <div className='flex flex-col items-center gap-5'>
      <Title title='Alteração de Cor de Fundo' />
      <div className='flex flex-col gap-5 items-center '>
        <button onClick={MudarCores}>Mudar Cor</button>
        <div
          className='w-[800px] h-[40vh] rounded-2xl'
          style={{ backgroundColor: corFundo }}
        ></div>
      </div>
      <button onClick={handleBackHome}>Voltar pro Início</button>
    </div>
  );
};

export default AlteraCorFundo;
