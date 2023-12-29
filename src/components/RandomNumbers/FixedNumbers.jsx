import { range } from 'underscore';
import SingleNumber from './RandomNumbers';
import './FixedNumbers.css';

const FixedNumbers = ({
  numPick,
  numHigh,
  getNumberClicked,
}) => {
  // Determines number of pics based on user input of numPick prop
  const numPickOption = range(numPick);

  // Determines array of numbers to choose from with highest possible number being numHigh
  const allLottoNumsArr = range(1, numHigh + 1);

  return (
    <div>
      {getNumberClicked ? (
        <SingleNumber numPick={numPick} />
      ) : (
        <div className='nums-container'>
            {numPickOption.map((num) => {
              return (
                <div key={num} className='lotto-num'>
                  #
                </div>
              )
            })}
        </div>
      )}
    </div>
  );
};

export default FixedNumbers;
