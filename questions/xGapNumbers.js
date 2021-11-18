/*
 * x = 정수. -10000000 이상, 10000000 이하.
 * n = 자연수. 1000 이하.
 * x부터 시작해 x씩 증가하는 숫자를 n개 지니는 배열을 리턴하기.
 *
 * 문제 출처: 프로그래머스 x만큼 간격이 있는 n개의 숫자
 * https://programmers.co.kr/learn/courses/30/lessons/12954
 */



export default function xGapNumbers(x, n) {
  let answer = [x];
  let nowSum = x;

  for (let i = 1; i < n; i++) {
    nowSum += x;
    answer.push(nowSum);
  }

  return answer;
}
