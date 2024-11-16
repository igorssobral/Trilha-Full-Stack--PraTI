import { useNavigate } from 'react-router-dom';
import Title from '../ui/Title';
import { useState } from 'react';
import WelcomeMessage from './WelcomeMessage';

const FormularioRegistro = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dados, setDados] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  function handleBackHome() {
    navigate('/');
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setDados((prevDados) => ({
      ...prevDados,
      [name]: value,
    }));
  }

  function validateForm() {
    const newErrors = { name: '', email: '', password: '' };
    let formIsValid = true;

    if (!dados.name) {
      newErrors.name = 'O nome é obrigatório';
      formIsValid = false;
    }
    if (!dados.email) {
      newErrors.email = 'O email é obrigatório';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(dados.email)) {
      newErrors.email = 'Por favor, insira um email válido.';
      formIsValid = false;
    }

    if (!dados.password) {
      newErrors.password = 'A senha é obrigatória.';
      formIsValid = false;
    }else if(dados.password.length < 6){
        newErrors.password = 'Escolha uma senha maior.';
        formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  }
  function handleLogout() {
    setIsSubmitted(false);
    setDados({});
  }

  return (
    <div>
      <Title title='Formulário de Registro Simples' />
      <div className='flex flex-col items-center space-y-5'>
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-4 lg:w-3/6 mt-5'
          >
            <h2 className='text-3xl'>Registro</h2>
            <input
              type='text'
              placeholder='Nome'
              name='name'
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name}</p>
            )}

            <input
              type='email'
              placeholder='Email'
              name='email'
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className='text-red-500 text-sm'>{errors.email}</p>
            )}

            <input
              type='password'
              placeholder='Senha'
              name='password'
              onChange={handleInputChange}
            />
            {errors.password && (
              <p className='text-red-500 text-sm'>{errors.password}</p>
            )}

            <button type='submit'>Cadastrar</button>
          </form>
        ) : (
          <>
            <WelcomeMessage name={dados.name} />
            <button onClick={handleLogout}>Sair</button>
          </>
        )}

        <button onClick={handleBackHome} className='mx-auto'>
          Voltar para a Home
        </button>
      </div>
    </div>
  );
};

export default FormularioRegistro;
