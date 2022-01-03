function gcd(minNum, maxNum){
  return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}

function lcm(minNum, maxNum){
  return minNum * maxNum / gcd(minNum, maxNum);
}

function solution(n, m) {
  var answer = [];
  answer[0] = gcd(n, m);
  answer[1] = lcm(n, m);
  
  return answer;
}