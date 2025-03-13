// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Cascos from './pages/cascos';  // Importa el componente Cascos
import Guantes from './pages/guantes';  // Importa el componente Guantes

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a la tienda de fútbol americano!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="¡Bienvenido a la tienda de fútbol americano!" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/casco/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cascos" element={<Cascos />} />  {/* Ruta para la página Cascos */}
        <Route path="/guantes" element={<Guantes />} />  {/* Ruta para la página Guantes */}
      </Routes>
    </Router>
  );
}

export default App;
