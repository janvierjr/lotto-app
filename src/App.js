import './App.css';
import UserInputs from './components/UserInputs/UserInputs';
import RandomNumbers from './components/RandomNumbers/RandomNumbers';

function App() {
  return (
    <div className="App">
      <h1>Random Lotto Number Picker</h1>
      <UserInputs />
      <RandomNumbers />
    </div>
  );
}

export default App;
