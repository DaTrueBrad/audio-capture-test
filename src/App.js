import logo from './logo.svg';
import './App.css';
import Recorder from './components/Recorder';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Welcome to My Recording Studio</h2>
      </header>
      <h1>Record Something</h1>
      <Recorder />
    </div>
  );
}

export default App;
