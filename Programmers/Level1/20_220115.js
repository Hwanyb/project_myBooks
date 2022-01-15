function solution(s) {
    const a = s.length;
    return s.substr(Math.ceil(a / 2) - 1, a % 2 ? 1 : 2);
}