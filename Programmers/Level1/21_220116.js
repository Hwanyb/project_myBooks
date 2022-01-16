function solution(n, arr1, arr2) {
    const result= [];
    for(var i=0; i<n; i++){
         result[i] = arr1[i] | arr2[i];
        result[i] = result[i].toString(2).padStart(n, 0).split('');
       for(var j=0; j<result[i].length; j++){
           result[i][j] === "1" ? result[i][j] = "#" : result[i][j] = " " ;   
       }
        result[i] = result[i].join('');
    }
    return result;
}