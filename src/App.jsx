
import './App.css';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import {BrowserRouter , Route, Routes} from 'react-router-dom'

import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import { ItemsProvider } from './context/ItemsContext';



function App() {
  
  return (
    <div className="App">
      <ItemsProvider>
        <CartProvider>
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
              <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ItemsProvider>
    </div>
    
  );
}

export default App;
