function solution(arr) {
  var avg = arr.reduce((p, c) => p + c) / arr.length;
  return avg;
}