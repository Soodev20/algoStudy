/*
 * numbers: 정수들이 담긴 배열. 모든 수는 0 이상 100 이하.
 * 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해 만들 수 있는 모든 수를 오름차순 배열로 반환하라.
 *
 * 문제 출처: 프로그래머스 음양 더하기
 * https://programmers.co.kr/learn/courses/30/lessons/76501
 */



export default function addingTwoNumbers(numbers) {
  let answer = new Set();
  let loopNumber = numbers.length - 1;

  while (loopNumber >= 0) {
    for (let i = 0; i < loopNumber; i++) {
      if (loopNumber != i) {
        answer.add(Number(numbers[loopNumber] + numbers[i]));
      }
    }

    loopNumber--;
  }

  return Array.from(answer).sort((a, b) => a - b);
}
