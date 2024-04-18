// https://www.codewars.com/kata/52449b062fb80683ec000024
// ^^^^^^ LINK THERE ^^^^^^`

function findSecretMessage(paragraph) {
    let words = paragraph.split(' ')
    words = words.map(element => element.toLowerCase());
    console.log(words);
    let result = ''
    let duplicates = []
    for (let y = 0; y<words.length; y++) {
      for (let x = 0; x<words.length; x++) {
        console.log(words.indexOf(x))
        if (words.indexOf(x) !== words.indexOf(y)) {
          duplicates.push(x)
          result += ' ' + words[x]
        }
      }
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
    // 
    // 
    // 
    // 
   