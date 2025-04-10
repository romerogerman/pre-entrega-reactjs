// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Cascos from './pages/Cascos';
import Guantes from './pages/Guantes';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a la tienda de fútbol americano!" items={[]} />} />
        <Route path="/category/cascos" element={<Cascos />} />
        <Route path="/category/guantes" element={<Guantes />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
