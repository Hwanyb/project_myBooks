function solution(arr) {
  var minIndex = arr.indexOf(Math.min.apply(null, arr));
  arr.splice(minIndex, 1);
  return arr.length > 1 ? arr: [-1];
}