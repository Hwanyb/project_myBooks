function solution(a, b) {
  const month = a - 1;
  const day = b;
  const weekDayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const date = new Date(2016, month, day);
  const weekDay = date.getDay();
  const answer = weekDayArr[weekDay];

  return answer;
}

// 다른 사람 풀이
// function solution(a, b){
//     var date = new Date(2016, (a - 1), b);
//       return date.toString().slice(0, 3).toUpperCase();
//   }
