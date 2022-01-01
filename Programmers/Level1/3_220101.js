function solution(s) {
    var answer = '*'.repeat(s.length - 4) + s.slice(-4);
    return answer;
}