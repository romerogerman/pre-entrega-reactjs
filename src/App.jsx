import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a la tienda de fútbol americano!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="¡Bienvenido a la tienda de fútbol americano!" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
