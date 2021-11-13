/*
 * absolutes: 정수들의 절대값이 담긴 배열
 * signs: 정수들의 부호를 차례대로 담은 불리언 배열 (true: +, false: -)
 * 실제 정수들의 합을 구하여 리턴하도록 함수 완성하기.
 *
 * 문제 출처: 프로그래머스 음양 더하기
 * https://programmers.co.kr/learn/courses/30/lessons/76501
 */



export default function plusMinus(absolutes, signs) {
  let plusSum = 0;
  let minusSum = 0;

  for (let i = 0; i < signs.length; i++) {
      (signs[i]) ? plusSum += absolutes[i] : minusSum += absolutes[i];
  }

  return plusSum - minusSum;
}
