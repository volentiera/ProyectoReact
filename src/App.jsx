
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/navbar';



function App() {
  const onAdd = (quantity) =>{
    (console.log(`Compro: ${quantity}`))
  }
  
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        <ItemListContainer/>
      </header>
    </div>
    
  );
}

export default App;
