import './App.css';
import UserInputs from './components/UserInputs/UserInputs';
import RandomNumbers from './components/RandomNumbers/FixedNumbers';
import { useState } from 'react';
function App() {
/**
 * on button click
 * 1. make sure highest number choice filled
 * 2.
 */

  const [numPick, setNumPick] = useState(0);
  const [numHigh, setNumHigh] = useState(42);
  const [numPickError, setNumPickError] = useState(false);
  const [getNumberClicked, setGetNumberClicked] = useState(false);

   const handleNumPickChange = (e) => {
     setNumPick(e.target.value);
   };

  const handleNumHighChange = (e) => {
    setNumHigh(e.target.value)
  }

  const handleGetLottoNums = () => {
    if (numPick > 0) {
      setNumPickError(false);
      setGetNumberClicked(true);
    } else {
      setNumPickError(true);
    }
  }

  return (
    <div className='App'>
      <h1 className='txt-pink'>
        Lotto <span className='txt-yellow'>Number</span> Picker
      </h1>
      <div className='container'>
        <UserInputs
          numPick={numPick}
          numHigh={numHigh}
          handleNumPickChange={handleNumPickChange}
          handleNumHighChange={handleNumHighChange}
        />
        <RandomNumbers
          numPick={numPick}
          numHigh={numHigh}
          getNumberClicked={getNumberClicked}
        />
        <div className='btn-container'>
          <button
            className='lotto-button txt-white'
            onClick={handleGetLottoNums}
          >
            Get My Numbers
          </button>
          {numPickError && (
            <p className='txt-red'>Please choose the Number of Picks</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
