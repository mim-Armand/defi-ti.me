import logo from './fg_01.png';
import './App.css';

function App() {
  return (
    <div className="app-conitainer">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='middle-text'><a href='https://twitter.com/defi_time'>Future's coming.</a></div>
        <div className="colorful-backgrounds bottom-section"></div>
      </header>
    </div>
  );
}

export default App;
