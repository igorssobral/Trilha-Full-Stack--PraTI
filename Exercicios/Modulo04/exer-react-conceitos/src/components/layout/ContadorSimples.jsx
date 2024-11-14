import { useState } from 'react';
import Title from '../ui/Title';
import { useNavigate } from 'react-router-dom';

const ContadorSimples = () => {
  let [count, setCount] = useState(0);

  const navigate = useNavigate();

  function handleBackHome() {
    navigate('/');
  }

  function incrementar() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrementar() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }
  return (
    <div>
      <Title title={'Contador Simples'} />
      <div className='flex flex-col gap-5'>
        <h1>{count}</h1>
        <div className='button-group'>
          <button onClick={decrementar}>Decrementar -</button>
          <button onClick={incrementar}>Incrementar +</button>
        </div>
        <button onClick={handleBackHome}>Voltar pro Início</button>
      </div>
    </div>
  );
};

export default ContadorSimples;
