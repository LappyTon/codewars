// https://www.codewars.com/kata/546f922b54af40e1e90001da
// ^^^^^^ LINK THERE ^^^^^^

function alphabetPosition(text) {
    const alphabet = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let result = '';
    text = text.toLowerCase()
    for (let symb of text) {
      if (alphabet.indexOf(symb)>0) {
          result +=' '+alphabet.indexOf(symb)
        
      }
    }
    return result.slice(1);
  }
  // tasks:
  // 
  // 
  // 
  // 
  // 
  // 
  // 