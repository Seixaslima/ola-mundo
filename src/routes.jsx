import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from 'paginas/Inicio/Inicio';
import SobreMim from 'paginas/SobreMim/SobreMim';
import Menu from 'componentes/Menu/Menu';
import Rodape from 'componentes/Rodape/Rodape';
import PaginaPadrao from 'componentes/PaginaPadrao/PaginaPadrao';
import Post from 'paginas/Post/Post';
import NaoEncontrado from 'paginas/NaoEncontrado/NaoEncontrado';
import ScrollToTop from 'componentes/ScrollToTop/ScrollToTop';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}
