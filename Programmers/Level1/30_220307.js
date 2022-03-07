function solution(left, right) {
  const range = [...Array(right - left + 1)].map((v, i) => i + left);
  let sum = 0;

  for (let i = 0; i < range.length; i++) {
    let arr = [];

    for (let j = 1; j <= right; j++) {
      if (range[i] % j === 0) {
        arr.push(j);
      }
    }
    if (arr.length % 2 === 0) {
      sum += range[i];
    } else {
      sum -= range[i];
    }
  }
  return sum;
}

// 다른 사람의 풀이 (제곱근이 정수면 약수의 갯수가 홀수이다.)
// function solution(left, right) {
//     var answer = 0;
//     for (let i = left; i <= right; i++) {
//         if (Number.isInteger(Math.sqrt(i))) {
//             answer -= i;
//         } else {
//             answer += i;
//         }
//     }
//     return answer;
// }