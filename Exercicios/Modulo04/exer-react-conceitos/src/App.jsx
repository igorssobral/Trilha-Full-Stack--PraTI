import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ContadorSimples from './components/contador-simples/ContadorSimples';
import AlteraCorFundo from './components/altera-cor-fundo/AlteraCorFundo';
import ListaTarefas from './components/lista-de-tarefas/ListaTarefas';
import Temporizador from './components/temporizador/Temporizador';

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
