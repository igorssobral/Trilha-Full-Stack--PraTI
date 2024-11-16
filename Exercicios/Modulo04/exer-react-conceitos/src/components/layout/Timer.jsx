/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../ui/Title';
import { TimerIcon, X } from 'lucide-react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [errors, setErrors] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const navigate = useNavigate();

  function handleBackHome() {
    navigate('/');
  }

  useEffect(() => {
    if (isRunning && seconds > 0) {
      const id = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      setIntervalId(id);

      return () => clearInterval(id);
    }

    if (isRunning && seconds === 0) {
      setIsRunning(false);
      setOpenModal(true);
      setShowInput(true)
    }

    return () => clearInterval(intervalId);
  }, [isRunning, seconds]);

  const handleSeconds = (seconds) => {
    if (seconds <= 0) {
      setErrors('Digite um valor válido.');
      setSeconds(0);
    } else {
      setSeconds(seconds);
      setErrors('');
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const restartTimer = () => {
    setIsRunning(false);
    setSeconds(0);
    setShowInput(true);
  };

  const startTimer = () => {
    if (seconds > 0) {
      setIsRunning(true);
      setShowInput(false);
    }
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
      <Title title='Timer' />
      <div className='space-y-3'>
        <h2 className={`text-3xl ${seconds < 4 ? 'text-red-600 animate-pulse transition' : ''}`}>{formatTime(seconds)}</h2>
        {showInput && (
          <input
            type='number'
            min={0}
            placeholder='Digite o timer'
            onChange={(e) => handleSeconds(Number(e.target.value))}
            className='appearance-none'
          />
        )}
        {errors && <p className='text-red-500 text-sm p-2'>{errors}</p>}
      </div>
      <div>
        <div className='button-group'>
          {!isRunning ? (
            <button
              onClick={startTimer}
              disabled={seconds == 0 ? true : false}
              className={`${
                seconds == 0 ? 'border-none text-zinc-600' : false
              }`}
            >
              Iniciar
            </button>
          ) : (
            <button onClick={pauseTimer}>Pausar</button>
          )}
          <button onClick={restartTimer}>Reiniciar</button>
        </div>
      </div>
      <button onClick={handleBackHome}>Voltar para a Home</button>

      {openModal && (
        <div className='absolute inset-0 flex justify-center items-center bg-black/60'>
          <div className='relative w-80 lg:w-96 h-64 flex flex-col items-center gap-5 p-5 bg-zinc-950 rounded-xl border border-indigo-500'>
            <button
              onClick={() => setOpenModal(false)}
              className='absolute top-1 right-0 border-none bg-transparent '
            >
              <X className='size-6 hover:text-indigo-600 hover:scale-110 transition' />
            </button>
            <h1 className='text-zinc-300'>O Tempo acabou!</h1>
            <TimerIcon className='size-14 animate-bounce ' />
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
