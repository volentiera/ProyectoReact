
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/navbar';



function App() {
  const onAdd = (props) =>{
    (console.log(`Compro: ${props}`))
  }
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <ItemListContainer greeting="Bienvenido!"/>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
      </header>
    </div>
  );
}

export default App;
