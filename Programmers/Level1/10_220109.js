function solution(n) {
  return String(n)
  .split("")
  .reverse()
  .map(o => o = parseInt(o));
}