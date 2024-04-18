// https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript
// ^^^^^^ LINK THERE ^^^^^^`

function isInteresting(number, awesomePhrases) {
  if (number.toString().length <= 3) return 0;
  let numbers = [number - 3, number - 2, number - 1, number + 1, number + 2, number + 3];
  
  function working(thisnumber, awesomePhrases) {
    if (awesomePhrases.includes(thisnumber)) return true;
    if (thisnumber.toString().split('').slice(1).every(element => element === '0')) return true;
    console.log(thisnumber.toString().split('').map);
    if (thisnumber.toString().split('').every(element => element === thisnumber[0])) return true
    return false; // Added return statement
  }
  
  console.log(number);
  if (working(number, awesomePhrases)) return 2;
  
  let interesting = false; // Added variable to track if any number is interesting
  numbers.forEach(element => {
    if (working(element, awesomePhrases)) interesting = true;
  });

  return interesting ? 1 : 0; // Return 1 if any number is interesting, otherwise return 0
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
 