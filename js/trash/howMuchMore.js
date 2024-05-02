// https://www.codewars.com/kata/56a1c63f3bc6827e13000006
//  ^^^ LINK HERE ^^^
// how many are smaller than me
function smaller(arr) {
    let solution = []
    arr.forEach(element => {
      if (!Number.isInteger(element)) console.log(true); 
    });
    for (let main of arr) {
      let i=0;
      arr.forEach(element => {
        if (element<main) i++
      });
      solution.push(i)
    }
    return solution
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
     