// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/javascript
// ^^^^^^ LINK THERE ^^^^^^`
// Number of trailing zeros of N!
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function zeros(n) {
  let fact = factorial(n);
  console.log(fact);
  let result = 0;
  for (let i = fact.toString().length - 1; i >= 0; i--) {
    if (fact.toString()[i] === '0') {
      result++;
    } else {
      break;
    }
  }
  return result;
}


  // tasks:
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
    // 
   