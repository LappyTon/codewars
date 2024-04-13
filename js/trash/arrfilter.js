// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

function rightSortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }
  
  
  function mySortArray(array) {
    // const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    // for (let num of array) {
    //   if (num % 2) {
    //     array[array.indexOf(Math.min)] = array[array.indexOf(Math.max)];
    //     array[array.indexOf(Math.min)] = num
    //     odd.splice(odd.indexOf(Math.max(odd)), 0)
    //     odd.splice(odd.indexOf(Math.min(odd)), 0)
    //   }
    // } 
    // return array
      const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    
      for (let i = 0; i < array.length; i++) {
        if (array[i] % 2) {
          array[i] = odd.shift(); // Replace odd number with the smallest odd number
        }
      } 
    
      return array;
    
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
  