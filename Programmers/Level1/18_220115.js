function solution(s){
    const pCount = s.split('').filter(element => 'p' === element || 'P' === element).length;
    const yCount = s.split('').filter(element => 'y' === element || 'Y' === element).length;
    return pCount === yCount ? true : false;
}