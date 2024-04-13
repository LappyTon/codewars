// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
    if (names.length >= 4) {
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    } else
    if (names.length >= 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else
    if (names.length >= 2) {
      return `${names[0]} and ${names[1]} like this`
    } else 
    if (names.length >= 1) {
      return `${names[0]} likes this`
    } return "no one likes this"
  }
  
  function cleverlikes(names) {
    names.length === 0 && (names = ["no one"]);
    let [a, b, c, ...others] = names;
    switch (names.length) {
      case 1: return `${a} likes this`;
      case 2: return `${a} and ${b} like this`;
      case 3: return `${a}, ${b} and ${c} like this`;
      default: return `${a}, ${b} and ${others.length + 1} others like this`;
    }
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
  