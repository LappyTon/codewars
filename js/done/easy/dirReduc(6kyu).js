// https://www.codewars.com/kata/550f22f4d758534c1100025a


function dirReduc(arr) {
    const oppositeDirections = {
        'NORTH': 'SOUTH',
        'SOUTH': 'NORTH',
        'EAST': 'WEST',
        'WEST': 'EAST'
    };
    const reducedPath = [];
    for (const direction of arr) {
        const lastDirection = reducedPath.pop();
        if (lastDirection !== oppositeDirections[direction]) {
            if (lastDirection !== undefined) {
                reducedPath.push(lastDirection);
            }
            reducedPath.push(direction);
        }
    }
    return reducedPath;
  }
  function myDirReduc(arr) {
    let ways = {
      'EAST': 0, 'WEST': 0, 'SOUTH': 0, 'NORTH': 0,
    }
    
    let returnWay = [];
    
    for (let way of arr) {
      ways[way.toUpperCase()]++
    }
    if (ways['SOUTH'] !== ways['NORTH']) {
      if (ways['SOUTH'] > ways['NORTH']) {
        returnWay.push('SOUTH')
      } else {
        returnWay.push('NORTH')
      }
    }
    if (ways['EAST'] !== ways['WEST']) {
      if (ways['EAST'] > ways['WEST']) {
        returnWay.push('EAST')
      } else {
        returnWay.push('WEST')
      }
    }
    return returnWay;
  }