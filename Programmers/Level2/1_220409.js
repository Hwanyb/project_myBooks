function solution(record) {
  let newRecordArr = record.map((str) => str.split(" "));
  let result = [];
  let nicknameSet = {};
  for (let i = 0; i < newRecordArr.length; i++) {
    if (newRecordArr[i].length === 3) {
      nicknameSet[newRecordArr[i][1]] = newRecordArr[i][2];
    }
  }
  for (let i = 0; i < newRecordArr.length; i++) {
    if (newRecordArr[i][0] === "Enter") {
      result.push(`${nicknameSet[newRecordArr[i][1]]}님이 들어왔습니다.`);
    } else if (newRecordArr[i][0] === "Leave") {
      result.push(`${nicknameSet[newRecordArr[i][1]]}님이 나갔습니다.`);
    }
  }
  return result;
}
