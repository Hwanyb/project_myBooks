function solution(price, money, count) {
    var sum = 0;
    for(var i = 1; i <= count; ++i){
        sum += price *i;
    }
    var answer = sum - money;
    
    return answer > 0 ? answer : 0;
}