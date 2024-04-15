// https://www.codewars.com/kata/5a6b24d4e626c59d5b000066/train/javascript
// ^^^^^^ LINK THERE ^^^^^^`
// The Hashtag Generator
function generateHashtag (str) {
    if (str.split(' ').join('').length!==0){
    if (str.split(' ').join('').length<140) return '#' + str.split(' ').map(el => {if (el) {return el.at(0).toUpperCase() + el.slice(1)}}).join('')
    }
    return false
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
   