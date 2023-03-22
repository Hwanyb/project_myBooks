function solution(a, b, c) {
    const arr = Array.from({ length: b - a + 1 }, (_, index) => index + a);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += String(arr[i]).split(c).length - 1;
    }
    return count;
}