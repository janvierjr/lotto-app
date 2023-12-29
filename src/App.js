import './App.css';
import UserInputs from './components/UserInputs/UserInputs';
import RandomNumbers from './components/RandomNumbers/RandomNumbers';
import { useState } from 'react';

function App() {
/**
 * on button click
 * 1. make sure highest number choice filled
 * 2.
 */

   const [numPick, setNumPick] = useState(6);

   const handleNumPickChange = (e) => {
     setNumPick(e.target.value);
   };

  return (
    <div className='App'>
      <h1 className='txt-pink'>
        Lotto <span className='txt-yellow'>Number</span> Picker
      </h1>
      <div className='container'>
        <UserInputs
          numPick={numPick}
          handleNumPickChange={handleNumPickChange}
        />
        <RandomNumbers numPick={numPick} />
        <div className='btn-container'>
          <button className='lotto-button txt-white'>Get My Numbers</button>
        </div>
      </div>
    </div>
  );
}

export default App;
