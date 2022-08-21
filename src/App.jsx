
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/navbar';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <ItemListContainer greeting="Bienvenido!"/>
      </header>
    </div>
  );
}

export default App;
