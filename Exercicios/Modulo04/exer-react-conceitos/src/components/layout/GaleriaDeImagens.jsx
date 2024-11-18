import { useState } from 'react';
import Title from '../ui/Title';
import { CircleChevronLeft, CircleChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';

const GaleriaImagens = () => {
  const navigate = useNavigate();

  // Função para voltar para a página inicial
  function handleBackHome() {
    navigate('/');
  }

  // Lista de URLs de imagens para exibir na galeria
  const imagens = [img1, img2, img3, img4];

  // Estado para gerenciar a imagem atualmente selecionada no modal
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  // Abrir o modal com a imagem selecionada
  const abrirModal = (imagem) => {
    setImagemSelecionada(imagem);
  };

  // Fechar o modal
  const fecharModal = () => {
    setImagemSelecionada(null);
  };

  // Mostrar a imagem anterior no modal
  const imagemAnterior = () => {
    const indiceAtual = imagens.indexOf(imagemSelecionada);
    const novoIndice = (indiceAtual - 1 + imagens.length) % imagens.length;
    setImagemSelecionada(imagens[novoIndice]);
  };

  // Mostrar a próxima imagem no modal
  const imagemProxima = () => {
    const indiceAtual = imagens.indexOf(imagemSelecionada);
    const novoIndice = (indiceAtual + 1) % imagens.length;
    setImagemSelecionada(imagens[novoIndice]);
  };

  return (
    <div className='flex flex-col items-center'>
      {/* Componente de título reutilizável */}
      <Title title='Galeria de Imagens' />

      {/* Container com a galeria de imagens */}
      <div className='w-3/6 flex flex-wrap justify-center gap-4'>
        {imagens.map((imagem, index) => (
          <img
          loading='eager'
            key={index}
            src={imagem}
            alt={`Imagem ${index + 1}`}
            onClick={() => abrirModal(imagem)} // Abrir modal ao clicar na imagem
            className='max-w-sm max-h-[30vh] object-cover cursor-pointer transition-transform duration-200 hover:scale-105 rounded-lg'
          />
        ))}
      </div>

      {/* Botão para voltar para a Home */}
      <button onClick={handleBackHome} className='w-max mx-auto mt-5'>
        Voltar para a Home
      </button>

      {/* Modal para exibir a imagem ampliada */}
      {imagemSelecionada && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'>
          <div className='p-4 rounded-lg relative'>
            {/* Botão para fechar o modal */}
            <button
              onClick={fecharModal}
              className='absolute top-2 right-4 text-white p-2 bg-transparent border-none hover:text-red-700 transition hover:scale-105'
            >
              <X className='size-10' />
            </button>

            {/* Conteúdo do modal com navegação entre imagens */}
            <div className='flex items-center justify-center gap-1'>
              {/* Botão para imagem anterior */}
              <button
                onClick={imagemAnterior}
                className='p-2 border-none bg-transparent hover:text-zinc-400 transition hover:scale-105'
              >
                <CircleChevronLeft className='size-10' />
              </button>

              {/* Imagem ampliada */}
              <img
              loading='eager'
                src={imagemSelecionada}
                alt='Imagem Ampliada'
                className='w-[300px] lg:w-[90%] max-h-[80vh] object-contain rounded-lg'
              />

              {/* Botão para próxima imagem */}
              <button
                onClick={imagemProxima}
                className='p-2 border-none bg-transparent hover:text-zinc-400 transition hover:scale-105'
              >
                <CircleChevronRight className='size-10' />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriaImagens;
