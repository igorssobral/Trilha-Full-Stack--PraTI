/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../ui/Title';

const Temporizador = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const navigate = useNavigate();

  function handleBackHome() {
    navigate('/');
  }

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      setIntervalId(id);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const restartTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const formatTime = (secs) => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const remainingSeconds = secs % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='flex flex-col gap-5'>
      <Title title='Temporizador' />
      <div>
        <h2 className='text-2xl'>{formatTime(seconds)}</h2>
      </div>
      <div>
        <div className='button-group'>
          {!isRunning ? (
            <button onClick={startTimer}>Iniciar</button>
          ) : (
            <button onClick={pauseTimer}>Pausar</button>
          )}
          <button onClick={restartTimer}>Reiniciar</button>
        </div>
      </div>
      <button onClick={handleBackHome}>Voltar para a Home</button>
    </div>
  );
};

export default Temporizador;
