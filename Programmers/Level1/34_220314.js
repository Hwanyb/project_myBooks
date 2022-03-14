function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let cmdArr = commands[i];
    let newArr = array.slice(cmdArr[0] - 1, cmdArr[1]).sort((a, b) => a - b);
    answer.push(newArr[cmdArr[2] - 1]);
  }
  return answer;
}

// 다른 사람의 풀이
// function solution(array, commands) {
//   return commands.map(command => {
//       const [sPosition, ePosition, position] = command
//       const newArray = array
//           .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
//           .sort((a,b) => a - b)    

//       return newArray[position - 1]
//   })
// }