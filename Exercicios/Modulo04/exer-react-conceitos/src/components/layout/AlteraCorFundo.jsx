import { useState } from 'react'; 
import Title from '../ui/Title';
import { useNavigate } from 'react-router-dom'; 

const AlteraCorFundo = () => {
  // Estado para armazenar a cor de fundo atual.
  const [corFundo, setCorFundo] = useState('#fff');

  // Função para navegar entre páginas usando react-router-dom.
  const navigate = useNavigate();

  // Função chamada ao clicar no botão "Voltar para a Home".
  // Redireciona o usuário para a rota inicial.
  function handleBackHome() {
    navigate('/');
  }

  // Função para gerar uma cor hexadecimal aleatória.
  const gerarCorAleatoria = () => {
    const letras = '0123456789ABCDEF'; // Caracteres válidos para cores hexadecimais.
    let cor = '#';
    for (let i = 0; i < 6; i++) {
      // Adiciona um caractere aleatório à cor.
      cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
  };

  // Função que altera o estado da cor de fundo para uma cor aleatória.
  const MudarCores = () => {
    setCorFundo(gerarCorAleatoria());
  };

  return (
    <div className='flex flex-col items-center gap-5'>
      {/* Componente de título reutilizável */}
      <Title title='Alteração de Cor de Fundo' />
      
      <div className='flex flex-col gap-5 items-center '>
        {/* Botão para mudar a cor de fundo */}
        <button onClick={MudarCores}>Mudar Cor</button>
        
        {/* Div que exibe a cor de fundo alterada */}
        <div
          className='w-[350px] lg:w-[800px] h-[40vh] rounded-2xl'
          style={{ backgroundColor: corFundo }}
        ></div>
      </div>
      
      {/* Botão para voltar à página inicial */}
      <button onClick={handleBackHome}>Voltar para a Home</button>
    </div>
  );
};

export default AlteraCorFundo;
