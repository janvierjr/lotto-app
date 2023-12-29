import { range } from 'underscore';
import './RandomNumbers.css';

const RandomNumbers = ({ numPick }) => {
  /**
   * pass down number of lotto-nums via props
   *
   */
  const numPickOptions = range(numPick);

  // console.log('numPickOptions', numPickOptions())

  return (
    <div className='nums-container'>
      {numPickOptions.map(num => {
        return <div key={num} className='lotto-num'>#</div>;
      })}

    </div>
  );
};

export default RandomNumbers;
