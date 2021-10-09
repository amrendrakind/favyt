import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This page belongs to Favyt: Your Favorite Collections!!
        </p>
        <a
          className="App-link"
          href="www.favyt.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Favyt
        </a>
      </header>
    </div>
  );
}

export default App;
