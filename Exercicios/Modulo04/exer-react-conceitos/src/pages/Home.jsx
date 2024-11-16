import { useNavigate } from 'react-router-dom';
import Title from '../components/ui/Title';
import './Home.css';
function Home() {

    const navigate = useNavigate()
  return (
    <div className='cons'>
      <Title
        title='React'
        desc='Praticando conceitos essenciais do ReactJS '
      />
      <div className='flex flex-col gap-3 mt-24 p-2'>
        <button onClick={() =>navigate('/ContadorSimples')}>Contador Simples</button>
        <button onClick={() =>navigate('/AlteraCorFundo')}>Alteração de Cor de Fundo</button>
        <button onClick={() =>navigate('/ListaTarefas')}>Lista de Tarefas</button>
        <button onClick={() =>navigate('/Temporizador')}>Temporizador com useEffect</button>
        <button onClick={() =>navigate('/FiltrodeLista')}>Filtro de Lista</button>
        <button onClick={() =>navigate('/FormRegistro')}>Formulário de Registro Simples</button>
        <button onClick={() =>navigate('/RequisicaoDados')}>Aplicação de Requisição de Dados Simples</button>
        <button onClick={() =>navigate('/GaleriaDeImagens')}>Galeria de Imagens com Visualização Detalhada</button>
        <button onClick={() =>navigate('/Timer')}>Timer com Intervalo e Alerta</button>
        <button onClick={() =>navigate('')}>Componentes com Tabs Navegáveis</button>
      </div>
    </div>
  );
}

export default Home;
