import Dictionary from './Dictionary';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="container">
        <Dictionary />
        <footer className="App-footer">
          This project was coded by <a href="https://github.com/26TracyNjoroge" target="_blank" rel="noopener noreferrer">Tracy Njoroge</a> is <a href="https://github.com/26TracyNjoroge/dictionary-react-project" target="_blank" rel=" noopener noreferrer">open-sourced on GitHub </a> and is hosted on <a href="https://dictionary-react-project.vercel.app/" target="_blank" rel="noopener noreferrer">Vercel</a>
        </footer>
    </div>
  </div>
  );
}

export default App;
