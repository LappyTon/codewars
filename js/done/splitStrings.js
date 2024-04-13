// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
// ^^^^^^ LINK THERE ^^^^^^
// Split Strings

function evenOrOdd(number) {
    if (number % 2 === 0) {
      return true;
  } else {
      return false;
  }
  }
  
  function solution(str){
     let result = [];
     if (!evenOrOdd(str.length)) str += '_';
     while (i < str.length) {
      result.push(`${str.at(i)}${str.at(i+1)}`);
      i+=2
     }
     return result
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
  