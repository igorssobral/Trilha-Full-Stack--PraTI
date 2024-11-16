import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importando as páginas e componentes que serão renderizados nas rotas
import Home from './pages/Home';
import ContadorSimples from './components/layout/ContadorSimples';
import AlteraCorFundo from './components/layout/AlteraCorFundo';
import ListaTarefas from './components/layout/ListaTarefas';
import Temporizador from './components/layout/Temporizador';
import FiltroDeLista from './components/layout/FiltroDeLista';
import FormularioRegistro from './components/layout/FormularioRegistro';
import RequisicaoDadosSimples from './components/layout/RequisicaoDadosSimples';
import GaleriaImagens from './components/layout/GaleriaDeImagens';
import Timer from './components/layout/Timer';
import Tabs from './components/layout/Tabs';

function App() {
  return (
    <>
      {/* Configuração do roteamento do aplicativo */}
      <BrowserRouter>
        <Routes>
          {/* Rota principal, exibindo a página Home */}
          <Route path='/' element={<Home />} />

          {/* Definindo rotas para os diferentes componentes/páginas do aplicativo */}
          <Route path='/ContadorSimples' element={<ContadorSimples />} />
          <Route path='/AlteraCorFundo' element={<AlteraCorFundo />} />
          <Route path='/ListaTarefas' element={<ListaTarefas />} />
          <Route path='/Temporizador' element={<Temporizador />} />
          <Route path='/FiltroDeLista' element={<FiltroDeLista />} />
          <Route path='/FormRegistro' element={<FormularioRegistro />} />
          <Route path='/RequisicaoDados' element={<RequisicaoDadosSimples />} />
          <Route path='/GaleriaDeImagens' element={<GaleriaImagens />} />
          <Route path='/Timer' element={<Timer />} />
          <Route path='/Tabs' element={<Tabs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
