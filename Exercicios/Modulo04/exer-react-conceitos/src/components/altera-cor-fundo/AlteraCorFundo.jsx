import { useState } from 'react';
import './AlteraCorFundo.css';
import Title from '../title/Title';
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
    <div className='content'>
      <Title title='Alteração de Cor de Fundo' />
      <div className='content'>
        {/* <h4>Mudança de Cores {mudancaAtiva ? 'Ativada' : 'Desativada'}</h4> */}
        <button onClick={MudarCores}>Mudar Cor</button>
        <div
          className='color-content'
          style={{ backgroundColor: corFundo }}
        ></div>
      </div>
      <button onClick={handleBackHome}>Voltar pro Início</button>
    </div>
  );
};

export default AlteraCorFundo;
