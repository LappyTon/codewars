// https://www.codewars.com/kata/52449b062fb80683ec000024
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
   