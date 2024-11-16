import { useNavigate } from 'react-router-dom';
import Title from '../ui/Title'; 
import { useState } from 'react'; 
import WelcomeMessage from './WelcomeMessage'; // Componente para exibir mensagem de boas-vindas após o registro.

const FormularioRegistro = () => {
  // Estado para controlar se o formulário foi submetido.
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Estado para armazenar os dados do formulário.
  const [dados, setDados] = useState({ name: '', email: '', password: '' });

  // Estado para armazenar mensagens de erro na validação do formulário.
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  // Hook para navegar entre páginas usando react-router-dom.
  const navigate = useNavigate();

  // Função para redirecionar o usuário para a página inicial.
  function handleBackHome() {
    navigate('/');
  }

  // Função para atualizar os valores dos inputs do formulário no estado.
  function handleInputChange(e) {
    const { name, value } = e.target; // Extrai o nome e valor do campo alterado.
    setDados((prevDados) => ({
      ...prevDados, // Mantém os valores anteriores.
      [name]: value, // Atualiza o valor correspondente ao campo alterado.
    }));
  }

  // Função para validar os campos do formulário.
  function validateForm() {
    const newErrors = { name: '', email: '', password: '' }; // Objeto para armazenar erros encontrados.
    let formIsValid = true;

    // Valida o campo "name".
    if (!dados.name) {
      newErrors.name = 'O nome é obrigatório';
      formIsValid = false;
    }

    // Valida o campo "email".
    if (!dados.email) {
      newErrors.email = 'O email é obrigatório';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(dados.email)) {
      // Verifica se o email está em um formato válido.
      newErrors.email = 'Por favor, insira um email válido.';
      formIsValid = false;
    }

    // Valida o campo "password".
    if (!dados.password) {
      newErrors.password = 'A senha é obrigatória.';
      formIsValid = false;
    } else if (dados.password.length < 6) {
      // Garante que a senha tenha pelo menos 6 caracteres.
      newErrors.password = 'Escolha uma senha maior.';
      formIsValid = false;
    }

    setErrors(newErrors); // Atualiza o estado com os erros encontrados.
    return formIsValid; // Retorna se o formulário é válido.
  }

  // Função chamada ao submeter o formulário.
  function handleSubmit(e) {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário.
    if (validateForm()) {
      setIsSubmitted(true); // Atualiza o estado para indicar que o formulário foi submetido com sucesso.
    }
  }

  // Função para realizar o logout e redefinir os dados.
  function handleLogout() {
    setIsSubmitted(false); // Define que o formulário não está mais submetido.
    setDados({}); // Reseta os dados do formulário.
  }

  return (
    <div>
      {/* Componente de título reutilizável */}
      <Title title='Formulário de Registro Simples' />
      <div className='flex flex-col items-center space-y-5'>
        {/* Renderiza o formulário ou a mensagem de boas-vindas baseado no estado de submissão */}
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit} // Função executada ao submeter o formulário.
            className='flex flex-col gap-4 lg:w-3/6 mt-5'
          >
            <h2 className='text-3xl'>Registro</h2>
            {/* Campo de entrada para o nome */}
            <input
              type='text'
              placeholder='Nome'
              name='name'
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name}</p> // Mensagem de erro para o campo nome.
            )}

            {/* Campo de entrada para o email */}
            <input
              type='email'
              placeholder='Email'
              name='email'
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className='text-red-500 text-sm'>{errors.email}</p> // Mensagem de erro para o campo email.
            )}

            {/* Campo de entrada para a senha */}
            <input
              type='password'
              placeholder='Senha'
              name='password'
              onChange={handleInputChange}
            />
            {errors.password && (
              <p className='text-red-500 text-sm'>{errors.password}</p> // Mensagem de erro para o campo senha.
            )}

            {/* Botão de envio do formulário */}
            <button type='submit'>Cadastrar</button>
          </form>
        ) : (
          <>
            {/* Componente que exibe uma mensagem de boas-vindas */}
            <WelcomeMessage name={dados.name} />
            <button onClick={handleLogout}>Sair</button>
          </>
        )}

        {/* Botão para voltar à página inicial */}
        <button onClick={handleBackHome} className='mx-auto'>
          Voltar para a Home
        </button>
      </div>
    </div>
  );
};

export default FormularioRegistro;
