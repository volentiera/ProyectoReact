
import './App.css';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import {BrowserRouter , Route, Routes} from 'react-router-dom'

import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/Cart/CartContainer';



function App() {
  
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartContainer/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
    
  );
}

export default App;
