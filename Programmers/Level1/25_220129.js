function solution(n) {
    const a = [0,1,2,3,4,5,6,7,8,9]
    return a.filter(x => !n.includes(x)).reduce((p, c) => p + c);
}