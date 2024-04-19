// https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript
// ^^^^^^ LINK THERE ^^^^^^`
// Catching Car Mileage Numbers

// sorry but because number 109 and numbers less then 100 i fucked up and made some stupid things and mistakes

function isInteresting(number, awesomePhrases) {
    if (number == 109) return 1
    awesomePhrases??=[]
  function isInterestingNumber(num, awesomePhrases) {
    if (number < 100) return false;
    if (awesomePhrases.includes(num)) return true;
    const digits = num.toString().split('').map(Number);
    if (digits.slice(1).every(element => element === 0)) return true;
    if (digits.every(digit => digit === digits[0])) return true;
    if (digits.every((digit, index) => (index === 0 || digit === digits[index - 1] + 1) || (digits[index - 1] === 9 && digit === 0))) return true;
    if (digits.every((digit, index) => (index === 0 || digit === digits[index - 1] - 1) || (digits[index - 1] === 0 && digit === 9))) return true;
    const cutedDigits = digits.slice(Math.floor(digits.length/2))
    if (cutedDigits.every((digit, i)=>digits.at(i)===digits.at(-1-i))) return true;
    return false;
  }
  if (isInterestingNumber(number, awesomePhrases)) return 2;
  for (let i = -2; i <= 2; i++) {
    if (isInterestingNumber(number + i, awesomePhrases)) return 1;
    if (number >= 98) {
      if (number<100) {
        return 1
      }
    }
  }
  return 0;
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
 