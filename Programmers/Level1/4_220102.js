function solution(x) {
    var change = String(x).split('');
    var hap = 0;
    for(var i=0; i<change.length; i++){
      hap += Number(change[i]);
    }
    return x%hap ? false : true;   
}