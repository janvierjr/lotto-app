import { RandomLottoAlgo } from '../../utils/helperFunctions';

const RandomNumbers = ({ numPick, numLimit }) => {
  const lotteryNumbersArr = RandomLottoAlgo(numPick, numLimit);
  return (
    <div className='nums-container'>
      {lotteryNumbersArr.map((lottoNum) => {
        return (
          <div key={`${lottoNum}`} className='lotto-num'>
            {lottoNum}
          </div>
        );
      })}
    </div>
  );
};

export default RandomNumbers;
