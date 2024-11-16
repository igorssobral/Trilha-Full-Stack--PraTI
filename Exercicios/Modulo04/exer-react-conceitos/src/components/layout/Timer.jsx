/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'; // Importando hooks do React
import { useNavigate } from 'react-router-dom'; // Hook para navegação entre páginas
import Title from '../ui/Title'; // Componente de título
import { TimerIcon, X } from 'lucide-react'; // Ícones para o temporizador e fechar o modal

const Timer = () => {
  // Estados para controlar o tempo restante, erros, modal, exibição do input e controle do temporizador
  const [seconds, setSeconds] = useState(0); // Estado do tempo restante em segundos
  const [errors, setErrors] = useState(''); // Estado para mensagens de erro
  const [openModal, setOpenModal] = useState(false); // Estado para controlar a exibição do modal
  const [showInput, setShowInput] = useState(true); // Estado para controlar a exibição do campo de entrada
  const [isRunning, setIsRunning] = useState(false); // Estado para controlar se o temporizador está rodando
  const [intervalId, setIntervalId] = useState(null); // Estado para armazenar o ID do intervalo do temporizador

  const navigate = useNavigate(); // Hook para navegação entre páginas

  // Função para voltar à página inicial
  function handleBackHome() {
    navigate('/');
  }

  // Hook useEffect para controlar o funcionamento do temporizador
  useEffect(() => {
    if (isRunning && seconds > 0) {
      // Se o temporizador estiver rodando e o tempo restante for maior que 0
      const id = setInterval(() => {
        // Decrementa o tempo a cada segundo
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      setIntervalId(id); // Armazena o ID do intervalo

      return () => clearInterval(id); // Limpa o intervalo quando o componente for desmontado ou o estado mudar
    }

    // Se o tempo chegar a 0, para o temporizador e exibe o modal
    if (isRunning && seconds === 0) {
      setIsRunning(false); // Para o temporizador
      setOpenModal(true); // Abre o modal
      setShowInput(true); // Exibe novamente o campo de entrada
    }

    return () => clearInterval(intervalId); // Limpa o intervalo caso o temporizador seja pausado
  }, [isRunning, seconds]); // Dependências: o efeito é executado quando o estado de isRunning ou seconds mudar

  // Função para definir o tempo do temporizador com validação
  const handleSeconds = (seconds) => {
    if (seconds <= 0) {
      // Se o valor for inválido (menor ou igual a 0), exibe um erro
      setErrors('Digite um valor válido.');
      setSeconds(0); // Zera o tempo
    } else {
      // Caso contrário, define o valor do tempo e limpa os erros
      setSeconds(seconds);
      setErrors('');
    }
  };

  // Função para pausar o temporizador
  const pauseTimer = () => {
    setIsRunning(false);
  };

  // Função para reiniciar o temporizador (zera o tempo e pausa)
  const restartTimer = () => {
    setIsRunning(false);// Para o temporizador
    setSeconds(0);// zera o tempo
    setShowInput(true); // Exibe o campo de entrada novamente
  };

  // Função para iniciar o temporizador
  const startTimer = () => {
    if (seconds > 0) {
      setIsRunning(true); // Inicia o temporizador
      setShowInput(false); // Oculta o campo de entrada
    }
  };

  // Função para formatar o tempo no formato HH:MM:SS
  const formatTime = (secs) => {
    const hours = Math.floor(secs / 3600); // Calcula as horas
    const minutes = Math.floor((secs % 3600) / 60); // Calcula os minutos
    const remainingSeconds = secs % 60; // Calcula os segundos restantes

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='flex flex-col gap-5'>
      {/* Exibe o título do temporizador */}
      <Title title='Timer' />
      <div className='space-y-3'>
        {/* Exibe o tempo formatado, com animação caso o tempo esteja abaixo de 4 segundos */}
        <h2 className={`text-3xl ${seconds < 4 ? 'text-red-600 animate-pulse transition' : ''}`}>
          {formatTime(seconds)}
        </h2>

        {/* Exibe o campo de entrada para definir o tempo, se necessário */}
        {showInput && (
          <input
            type='number'
            min={0}
            placeholder='Digite o timer'
            onChange={(e) => handleSeconds(Number(e.target.value))} // Atualiza o tempo com o valor inserido
            className='appearance-none'
          />
        )}

        {/* Exibe mensagem de erro se houver */}
        {errors && <p className='text-red-500 text-sm p-2'>{errors}</p>}
      </div>
      <div>
        <div className='button-group'>
          {/* Mostra "Iniciar" se o temporizador não estiver rodando, senão "Pausar" */}
          {!isRunning ? (
            <button
              onClick={startTimer} // Inicia o temporizador
              disabled={seconds === 0} // Desabilita o botão se o tempo for 0
              className={`${seconds === 0 ? 'border-none text-zinc-600' : ''}`} // Estiliza o botão se o tempo for 0
            >
              Iniciar
            </button>
          ) : (
            <button onClick={pauseTimer}>Pausar</button>
          )}
          {/* Botão para reiniciar o temporizador */}
          <button onClick={restartTimer}>Reiniciar</button>
        </div>
      </div>

      {/* Botão para voltar à página inicial */}
      <button onClick={handleBackHome}>Voltar para a Home</button>

      {/* Modal exibido quando o tempo chega a 0 */}
      {openModal && (
        <div className='absolute inset-0 flex justify-center items-center bg-black/60'>
          <div className='relative w-80 lg:w-96 h-64 flex flex-col items-center gap-5 p-5 bg-zinc-950 rounded-xl border border-indigo-500'>
            {/* Botão para fechar o modal */}
            <button
              onClick={() => setOpenModal(false)} // Fecha o modal
              className='absolute top-1 right-0 border-none bg-transparent '
            >
              <X className='size-6 hover:text-indigo-600 hover:scale-110 transition' />
            </button>
            <h1 className='text-zinc-300'>O Tempo acabou!</h1>
            {/* Ícone do temporizador com animação */}
            <TimerIcon className='size-14 animate-bounce ' />
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
