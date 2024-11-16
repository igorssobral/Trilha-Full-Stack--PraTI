/* eslint-disable react/prop-types */

// Componente Title que recebe props para exibir um título e uma descrição
const Title = (props) => {
  return (
    <div className='flex flex-col gap-5 mt-5'>
      {/* Exibe o título. A classe 'max-md:text-3xl' faz com que o texto seja maior em telas menores */}
      <h1 className='max-md:text-3xl'>{props.title}</h1>

      {/* Exibe a descrição recebida através das props */}
      <h4>{props.desc}</h4>
    </div>
  );
};

export default Title;
