function solution(N, stages) {
  let arr = [];
  let totalPlayer = stages.length;
  for (let i = 1; i <= N; i++) {
    let notClearNum = stages.filter((e) => e == i).length;
    let failRatio = 0;
    if (notClearNum === 0) {
      failRatio = 0;
    } else {
      failRatio = notClearNum / totalPlayer;
    }
    totalPlayer -= notClearNum;
    arr.push({ index: i, ratio: failRatio });
  }
  arr.sort((a, b) => {
    if (a.ratio > b.ratio) {
      return -1;
    } else if (a.ratio < b.ratio) {
      return 1;
    } else {
      if (a.index > b.index) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  return arr.map((e) => e.index);
}

// 다른 사람의 풀이
// function solution(N, stages) {
//   let result = [];
//   for(let i=1; i<=N; i++){
//       let reach = stages.filter((x) => x >= i).length;
//       let curr = stages.filter((x) => x === i).length;
//       result.push([i, curr/reach]);
//   }
//   result.sort((a,b) => b[1] - a[1]);
//   return result.map((x) => x[0]);
// }