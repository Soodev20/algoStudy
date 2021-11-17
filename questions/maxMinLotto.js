/*
 * lottos: 로또 찍은 번호. 모르는 번호는 0으로 표시. 배열.
 * winNums: 로또 당첨 번호. 배열.
 * 6개 번호가 모두 일치하면 1위 ~ 2개 번호가 일치하면 5위, 그 외는 6위.
 * 이 때 최고 순위와 최저 순위를 구해서 배열로 리턴하세요.
 *
 * 문제 출처: 프로그래머스 로또의 최고 순위와 최저 순위
 * https://programmers.co.kr/learn/courses/30/lessons/77484
 */



export default function maxMinLotto(lottos, winNums) {
  const unknownNumber = lottos.filter(lotto => lotto === 0).length;

  if (unknownNumber === 6) return [1, 6];

  const correctNumber = lottos.filter(lotto => winNums.includes(lotto)).length;

  if (unknownNumber === 0 && correctNumber === 0) return [6, 6];

  const min = 7 - correctNumber;
  const max = min - unknownNumber;

  return [max, min];
}
