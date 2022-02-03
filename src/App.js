import './App.css';
import Countdown from 'react-countdown';

function App() {
  return (
    <div className="App" style={{ backgroundImage: "url(dobby.png)", backgroundSize: 'cover', overflow: 'hidden' }}>
      <header className="App-header">
        <h1>Days until Shawn is free</h1>
        <h1><Countdown date={new Date(1654491600000)} /></h1>
      </header>
    </div>
  );
}

export default App;
