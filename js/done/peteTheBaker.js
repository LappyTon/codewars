// https://www.codewars.com/kata/525c65e51bf619685c000059`
// ^^^^^^ LINK THERE ^^^^^^
// Pete the baker

function cakes(recipe, available) {
    let results = {};
    for (let ingredient in recipe) {
      results[ingredient] = 0;
      while (available[ingredient] >= recipe[ingredient]) {
        available[ingredient] -= recipe[ingredient];
        results[ingredient]++;
      }
      if (!results[ingredient]) { 
        return 0;
      }
    }
    return Object.values(results).reduce((min, count) => Math.min(min, count), Infinity);
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
   