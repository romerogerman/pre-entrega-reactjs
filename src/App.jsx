import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Cascos from './pages/Cascos';
import Guantes from './pages/Guantes';
import CartPage from './components/CartPage'; // Asegúrate de importar CartPage
import CartContextProvider from './components/CartContext'; // Importa el proveedor del contexto

function App() {
  return (
    <CartContextProvider> {/* Asegúrate de envolver tu aplicación en el proveedor del contexto */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a la tienda de fútbol americano!" items={[]} />} />
          <Route path="/category/cascos" element={<Cascos />} />
          <Route path="/category/guantes" element={<Guantes />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartPage />} /> {/* Ruta para el carrito */}
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
