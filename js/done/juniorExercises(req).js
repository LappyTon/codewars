// not codewars
// ^^^^^^ LINK THERE ^^^^^^`
// reverse string

function reversedString(str) {
    str = str.split('')
    let result = []
    for (let letter of str) {
      result.unshift(letter)
    }
    return result
  }
  
  // pallindrome checker
  
  function pallindromeChecker(num) {
    const digits = num.toString().split('').map(Number);
    const cutedDigits = digits.slice(Math.floor(digits.length/2))
    if (cutedDigits.every((digit, i)=>digits.at(i)===digits.at(-1-i))) return true;
    return false
  }
  
  // FizzBuzz (integers function)
  
  function fizzBuzz() {
    for (let i=1; i<=100; i++) {
      if (Number.isInteger(i/3) && Number.isInteger(i/5)) {
        console.log('FizzBuzz');
      } else if (Number.isInteger(i/3)) {
        console.log('Fizz');
      } else if (Number.isInteger(i/5)) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
  }
  
  // factorial calc 
  
  function factorialCalc(num) {
    result = 0
    for (let i=0; i<=num; i++) {
      result += i
    }
    return result
  }
  
  // longest word
  
  function longestWord(sentence) {
    sentence = sentence.split(' ')
    let max=0,
    maxletters=[]
    sentence.forEach(word=>{if(word.length>max){max=word.length;maxletters.push(word)}})
    return maxletters.at(-1)
  }
  
  // tasks:
    // 
    // make string letters reversed 
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