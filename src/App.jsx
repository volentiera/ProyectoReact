
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter , Route, Routes} from 'react-router-dom'


import Navbar from './components/navbar';



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/descripcion" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
