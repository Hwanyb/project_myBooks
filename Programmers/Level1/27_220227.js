function solution(n) {
  var sumArr = [];

  for (var i = 0; i < n.length; i++) {
    var sum = 0;
    for (var j = i + 1; j < n.length; j++) {
      sum = n[i] + n[j];
      sumArr.push(sum);
    }
  }
  
  const set = new Set(sumArr);
  const sortedUniqueArr = [...set].sort((a, b) => a - b);

  return sortedUniqueArr;
}