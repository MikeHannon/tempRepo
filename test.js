
function rfact(num){
  if (num< 2){
    return 1;
  }
  return num*rfact(num-1);
}

console.log(rfact(100));

function ifact(num){
  var fact = 1;
  for (var i = 2; i <= num; i ++){
    fact *= i;
  }
  return fact;
}
console.log(ifact(100));
