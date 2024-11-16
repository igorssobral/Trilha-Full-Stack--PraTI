/* eslint-disable react/prop-types */

// Componente que exibe uma mensagem de boas-vindas para o usuário
const WelcomeMessage = ({ name }) => {
  return (
    <div className="flex flex-col items-center space-y-4 p-5">
      {/* Exibe a saudação personalizada com o nome do usuário */}
      <h2 className="text-2xl ">Bem-vindo, <strong className='text-purple-800'>{name}</strong>!</h2>
      {/* Mensagem indicando que o registro foi realizado com sucesso */}
      <p>Seu registro foi realizado com sucesso.</p>
    </div>
  );
};

export default WelcomeMessage;
