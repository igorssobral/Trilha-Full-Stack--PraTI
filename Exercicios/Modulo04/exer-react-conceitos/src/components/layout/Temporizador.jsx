/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'; // Importando hooks do React
import { useNavigate } from 'react-router-dom'; // Hook de navegação
import Title from '../ui/Title'; // Componente para título

const Temporizador = () => {
  // Estado para controlar os segundos do temporizador
  const [seconds, setSeconds] = useState(0);

  // Estado para controlar se o temporizador está rodando ou pausado
  const [isRunning, setIsRunning] = useState(false);

  // Estado para armazenar o ID do intervalo (para poder limpá-lo posteriormente)
  const [intervalId, setIntervalId] = useState(null);

  // Hook de navegação para voltar à página inicial
  const navigate = useNavigate();

  // Função para voltar à página inicial
  function handleBackHome() {
    navigate('/');
  }

  // Hook useEffect para controlar o funcionamento do temporizador
  useEffect(() => {
    // Se o temporizador estiver rodando, cria o intervalo
    if (isRunning) {
      const id = setInterval(() => {
        // Atualiza os segundos a cada 1 segundo
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      // Armazena o ID do intervalo para poder limpar depois
      setIntervalId(id);
    } else {
      // Se o temporizador for pausado, limpa o intervalo
      if (intervalId) {
        clearInterval(intervalId);
      }
    }

    // Limpeza do intervalo ao sair do componente ou quando o temporizador for pausado
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]); // O efeito é executado sempre que o estado isRunning mudar

  // Função para pausar o temporizador
  const pauseTimer = () => {
    setIsRunning(false);
  };

  // Função para reiniciar o temporizador (zera os segundos e pausa)
  const restartTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  // Função para iniciar o temporizador
  const startTimer = () => {
    setIsRunning(true);
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
      {/* Componente de título reutilizável */}
      <Title title='Temporizador' />
      <div>
        {/* Exibindo o tempo formatado */}
        <h2 className='text-2xl'>{formatTime(seconds)}</h2>
      </div>
      <div>
        {/* Botões para controlar o temporizador */}
        <div className='button-group'>
          {/* Mostra "Iniciar" se o temporizador não estiver rodando, senão mostra "Pausar" */}
          {!isRunning ? (
            <button onClick={startTimer}>Iniciar</button>
          ) : (
            <button onClick={pauseTimer}>Pausar</button>
          )}
          {/* Botão para reiniciar o temporizador */}
          <button onClick={restartTimer}>Reiniciar</button>
        </div>
      </div>
      {/* Botão para voltar à página inicial */}
      <button onClick={handleBackHome}>Voltar para a Home</button>
    </div>
  );
};

export default Temporizador;
