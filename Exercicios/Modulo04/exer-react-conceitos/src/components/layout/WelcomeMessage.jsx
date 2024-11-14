/* eslint-disable react/prop-types */
const WelcomeMessage = ({ name }) => {
    return (
      <div className="flex flex-col items-center space-y-4 p-5">
        <h2 className="text-2xl ">Bem-vindo, <strong className='text-purple-800'>{name}</strong>!</h2>
        <p>Seu registro foi realizado com sucesso.</p>
      </div>
    );
  };
  
  export default WelcomeMessage;