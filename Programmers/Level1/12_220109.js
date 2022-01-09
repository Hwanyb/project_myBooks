function solution(n) {
    var answer = 0;
    for(var i = 0; i <= n; i++){
        n%i === 0 ? answer += i : answer += 0;
    }
    return answer;
}