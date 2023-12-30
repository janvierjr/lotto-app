import { random } from 'underscore';

/**
 *
 * @param {*} num
 * @returns array with randome lottery numbers
 */

export function RandomLottoAlgo(num, limit) {
  const lottoArr = [];

  for (let i = 0; i < num; i++) {
    let randomNum = random(1, (limit))
    lottoArr.push(randomNum);

  }

  // eliminate duplicates by re-running function
  let sortedLottoArr = lottoArr.slice().sort((a, b) => a - b);
  for (let i = 0; i < sortedLottoArr.length; i++){
    if (sortedLottoArr[i + 1] === sortedLottoArr[i]) {
      return RandomLottoAlgo(num, limit)
    }
  }


  return sortedLottoArr;

}
