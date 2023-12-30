import './App.css';
import UserInputs from './components/UserInputs/UserInputs';
import FixedNumbers from './components/RandomNumbers/FixedNumbers';
import { useState } from 'react';
function App() {
/**
 * on button click
 * 1. make sure highest number choice filled
 * 2.
 */

  const [numPick, setNumPick] = useState(0);
  const [numLimit, setNumLimit] = useState(42);
  const [numPickError, setNumPickError] = useState(false);
  const [getNumberClicked, setGetNumberClicked] = useState(false);

  const handleNumPickChange = (e) => {
    if (e.target.value <= 7 && e.target.value > 2) {
      handleReset();
      setNumPick(e.target.value);
     }
   };

  const handleNumLimitChange = (e) => {
    if (e.target.value <= 99 && e.target.value > 2) {
      handleReset();
      setNumLimit(e.target.value);
    }
  }

  const handleGetLottoNums = () => {
    if (numPick > 0) {
      setNumPickError(false);
      setGetNumberClicked(true);
    } else {
      setNumPickError(true);
    }
  }

  const handleReset = () => {
    setGetNumberClicked(false);
  };

  return (
    <div className='App'>
      <h1 className='txt-pink'>
        Lotto <span className='txt-yellow'>Number</span> Picker
      </h1>
      <div className='container'>
        <UserInputs
          numPick={numPick}
          numLimit={numLimit}
          handleNumPickChange={handleNumPickChange}
          handleNumLimitChange={handleNumLimitChange}
        />
        <FixedNumbers
          numPick={numPick}
          numLimit={numLimit}
          getNumberClicked={getNumberClicked}
        />
        <div className='btn-container'>
          <button
            className='lotto-button txt-white bg-pink'
            onClick={handleGetLottoNums}
          >
            Get My Numbers
          </button>
          <button className='lotto-button bg-yellow' onClick={handleReset}>
            Reset
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
