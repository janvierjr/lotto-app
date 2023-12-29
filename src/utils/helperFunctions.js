
/**
 *
 * @param {*} num
 * @returns array with randome lottery numbers
 */

export function RandomLottoAlgo(num) {
  console.log('lotto numbers TADA', num)
  const lottoArr = []

  for (let i = 0; i < num; i++){
    lottoArr.push(i);
  }

  return lottoArr;
};