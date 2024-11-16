import { useState } from 'react';
import Title from '../ui/Title';
import { useNavigate } from 'react-router-dom';

const ContadorSimples = () => {
  // Estado para armazenar o valor atual do contador.
  let [count, setCount] = useState(0);

  // Função para navegação entre páginas usando react-router-dom.
  const navigate = useNavigate();

  // Redireciona o usuário para a página inicial.
  function handleBackHome() {
    navigate('/');
  }

  // Incrementa o valor do contador em 1.
  function incrementar() {
    setCount((prevCount) => prevCount + 1); // Usa o estado anterior para evitar inconsistências.
  }

  // Decrementa o valor do contador em 1, desde que ele seja maior que 0.
  function decrementar() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  return (
    <div>
      {/* Componente de título reutilizável */}
      <Title title={'Contador Simples'} />
      
      <div className='flex flex-col gap-5'>
        {/* Exibe o valor atual do contador */}
        <h1>{count}</h1>
        
        {/* Botões para decrementar e incrementar o contador */}
        <div className='button-group'>
          <button onClick={decrementar}>Decrementar -</button>
          <button onClick={incrementar}>Incrementar +</button>
        </div>
        
        {/* Botão para voltar à página inicial */}
        <button onClick={handleBackHome}>Voltar para a Home</button>
      </div>
    </div>
  );
};

export default ContadorSimples;
