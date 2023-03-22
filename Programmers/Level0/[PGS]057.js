function solution(rsp) {
    return [...rsp].map(i => i === "2" ? "0" : i === "0" ? "5" : "2").join("");
}

// 객체를 사용한 방법
function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}