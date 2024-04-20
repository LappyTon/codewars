// https://www.codewars.com/kata/5a1cb5406975987dd9000028/train/javascript
// ^^^^^^ LINK THERE ^^^^^^`
//  Sort odd and even numbers in different order

function evenOrOdd(number) {
    if (number % 2 === 0) {
      return true;
  } else {
      return false;
  }
  }
  
  function evenOrOdd(number) {
    return number % 2 === 0;
  }
  
  function sortArray(array) {
    if (!array || array.length === 0) return array;
  
    let evenArray = array.filter(evenOrOdd).sort((a, b) => b - a);
    let oddArray = array.filter(num => !evenOrOdd(num)).sort((a, b) => a - b);
  
    return array.map(num => evenOrOdd(num) ? evenArray.shift() : oddArray.shift());
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
    // 
   