import { useNavigate } from 'react-router-dom';
import Title from '../components/title/Title';
import './Home.css';
function Home() {

    const navigate = useNavigate()
  return (
    <div className='cons'>
      <Title
        title='Exercício React'
        desc='Praticando conceitos essenciais do ReactJS '
      />
      <div className='buttons-exer'>
        <button onClick={() =>navigate('/ContadorSimples')}>Contador Simples</button>
        <button onClick={() =>navigate('/AlteraCorFundo')}>Alteração de Cor de Fundo</button>
        <button onClick={() =>navigate('/ListaTarefas')}>Lista de Tarefas</button>
        <button onClick={() =>navigate('/Temporizador')}>Temporizador com useEffect</button>
        <button>Filtro de Lista</button>
        <button>Formulário de Registro Simples</button>
        <button>Aplicação de Requisição de Dados Simples</button>
        <button>Galeria de Imagens com Visualização Detalhada</button>
        <button>Timer com Intervalo e Alerta</button>
        <button>Componentes com Tabs Navegáveis</button>
      </div>
    </div>
  );
}

export default Home;
