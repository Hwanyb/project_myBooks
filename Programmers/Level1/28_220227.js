function solution(d, budget) {
  const sortedD = d.sort((a, b) => a - b);

  let sum = 0;
  let count = 0;

  for (var i = 0; i < d.length; i++) {
    sum += sortedD[i];
    if (sum <= budget) {
      count++;
    }
  }
  return count;
}
