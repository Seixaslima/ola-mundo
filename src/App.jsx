import Inicio from './paginas/Inicio/Inicio';
import SobreMim from './paginas/SobreMim/SobreMim';

const endereco = window.location.pathname;

const pagina = endereco === '/' ? <Inicio /> : <SobreMim />;

function App() {
  return pagina;
}

export default App;
