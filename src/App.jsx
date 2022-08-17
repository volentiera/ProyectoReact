import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';






function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
      <div className="d-flex">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          hola
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </div>
      </header>
    </div>
  );
}

export default App;
