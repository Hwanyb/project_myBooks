function solution(n) {
    const result = [];
    for(var i=0; i<=n; i++){
        if(n % i === 1){
            result[i] = i;
        }
    }
    return Math.min.apply(null, result.filter(element => null !== element));
}