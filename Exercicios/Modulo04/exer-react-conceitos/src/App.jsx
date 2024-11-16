import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ContadorSimples' element={<ContadorSimples />} />
          <Route path='/AlteraCorFundo' element={<AlteraCorFundo />} />
          <Route path='/ListaTarefas' element={<ListaTarefas />} />
          <Route path='/Temporizador' element={<Temporizador/>} />
          <Route path='/FiltroDeLista' element={<FiltroDeLista/>} />
          <Route path='/FormRegistro' element={<FormularioRegistro/>} />
          <Route path='/RequisicaoDados' element={<RequisicaoDadosSimples/>} />
          <Route path='/GaleriaDeImagens' element={<GaleriaImagens/>} />
          <Route path='/Timer' element={<Timer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
