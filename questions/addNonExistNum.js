/*
 * numbers: 0이상 9이하의 정수들이 담긴 배열. 각 요소는 중복되지 않음.
 * numbers에 없는 숫자들의 합을 리턴.
 *
 * 문제 출처: 프로그래머스 음양 더하기
 * https://programmers.co.kr/learn/courses/30/lessons/86051
 */



export default function addNonExistNum(numbers) {
  let index = 0;
  let totalSum = 0;
  const reducer = (prevNum, nowNum) => prevNum + nowNum;
  const givenArrSum = numbers.reduce(reducer);

  while (index < 10) {
    totalSum += index;
    index++;
  }

  return totalSum - givenArrSum;
}
