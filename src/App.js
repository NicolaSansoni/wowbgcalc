import logo from './logo.svg';
import './App.css';
import DiceList from './DiceList'

function App() {
  return (
    <div className="App">
      <DiceList color="blue"/>
      <DiceList color="red"/>
      <DiceList color="green"/>
    </div>
  );
}

export default App;
