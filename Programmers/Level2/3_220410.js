function solution(progresses, speeds) {
  let answer = [];
  let days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
  let count = 1;
  let maxDay = days[0];

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      count++;
    } else {
      maxDay = days[i];
      answer.push(count);
      count = 1;
    }
  }
  answer.push(count);
  return answer;
}
