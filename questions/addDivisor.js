/*
 * 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
 *
 * 문제 출처: 약수의 합
 * https://programmers.co.kr/learn/courses/30/lessons/12928
 */



export default function addDivisor(n) {
  if (n === 0) return 0;

  let sum = 1;

  for (let i = 2; i <= n; i++) {
      if (n % i === 0) {
          sum += i;
      }
  }

  return sum;
}
