import './App.css';
import Profile from './compoenents/ProfileProps';
import ListaApp from './compoenents/ListaTareas';
import Gallery from './compoenents/Esculturas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>Participantes</h1>
        </p>

        <Gallery/>

      </header>
    </div>
  );
}

export default App;
