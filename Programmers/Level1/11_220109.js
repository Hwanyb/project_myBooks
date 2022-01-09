function solution(n)
{   return String(n)
            .split('')
            .map(o => o = parseInt(o))
            .reduce((p, c) => p + c);
}