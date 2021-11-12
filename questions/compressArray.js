/*
 * Compress given array.
 * ex) [1, 1, 1, 3, 3, 5, 5, 5, 5, 5, 1] => [1, 3, 5, 1]
 */

 export default function compressArray(array) {
  let answer = [array[0]];

  for (let i = 0; i < array.length - 1; i++ ) {
    const nowNumber = array[i];
    const nextNumber = array[i + 1];

    if (nowNumber === nextNumber && !answer[answer.length -1]) {
      answer.push(nextNumber);
    }
    if (nowNumber !== nextNumber) {
      answer.push(nextNumber);
    }
  }

  return answer;
}
