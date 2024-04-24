// 2048
// ^^^^^^ LINK THERE ^^^^^^`

function startGame(num) {
  let fields = []
  for (let i=0; i<num; i++) {
    fields[i] = []
    for (let j=0;j<num;j++) {
      fields[i][j] = 0
    }
  }
  

  function spawnEntity(thisfield) {
    let truefield = []
    for (let i=0;i<fields[0].length;i++) {
      thisfield[i].forEach((element, index) => {
        if (!element) {
          truefield.push([i,index])
        }
      });
    }
    if (!truefield.length) return false
    let random = truefield[Math.floor(Math.random() * truefield.length)]
    thisfield[random[0]][random[1]] = 4
    return thisfield
  }
  function top(thisfield) {
    for (let col = 0; col < thisfield[0].length; col++) {
        for (let row = 1; row < thisfield.length; row++) {
            if (thisfield[row][col] !== 0) {
                let currentRow = row;
                while (currentRow > 0 && thisfield[currentRow - 1][col] === 0) {
                    // Move the tile up
                    thisfield[currentRow - 1][col] = thisfield[currentRow][col];
                    thisfield[currentRow][col] = 0;
                    currentRow--;
                }
                if (currentRow > 0 && thisfield[currentRow - 1][col] === thisfield[currentRow][col]) {
                    // Merge tiles if they have the same value
                    thisfield[currentRow - 1][col] *= 2;
                    thisfield[currentRow][col] = 0;
                }
            }
        }
    }
    return thisfield;
  }
  function left(thisfield) {
    for (let row = 0; row < thisfield.length; row++) {
        for (let col = 1; col < thisfield[row].length; col++) {
            if (thisfield[row][col] !== 0) {
                let currentCol = col;
                while (currentCol > 0 && thisfield[row][currentCol - 1] === 0) {
                    // Move the tile to the left
                    thisfield[row][currentCol - 1] = thisfield[row][currentCol];
                    thisfield[row][currentCol] = 0;
                    currentCol--;
                }
                if (currentCol > 0 && thisfield[row][currentCol - 1] === thisfield[row][currentCol]) {
                    // Merge tiles if they have the same value
                    thisfield[row][currentCol - 1] *= 2;
                    thisfield[row][currentCol] = 0;
                }
            }
        }
    }
    return thisfield;
  }
  function bottom(thisfield) {
    for (let col = 0; col < thisfield[0].length; col++) {
        for (let row = thisfield.length - 2; row >= 0; row--) {
            if (thisfield[row][col] !== 0) {
                let currentRow = row;
                while (currentRow < thisfield.length - 1 && thisfield[currentRow + 1][col] === 0) {
                    // Move the tile down
                    thisfield[currentRow + 1][col] = thisfield[currentRow][col];
                    thisfield[currentRow][col] = 0;
                    currentRow++;
                }
                if (currentRow < thisfield.length - 1 && thisfield[currentRow + 1][col] === thisfield[currentRow][col]) {
                    // Merge tiles if they have the same value
                    thisfield[currentRow + 1][col] *= 2;
                    thisfield[currentRow][col] = 0;
                }
            }
        }
    }
    return thisfield;
  }
  function right(thisfield) {
    for (let row = 0; row < thisfield.length; row++) {
        for (let col = thisfield[row].length - 2; col >= 0; col--) {
            if (thisfield[row][col] !== 0) {
                let currentCol = col;
                while (currentCol < thisfield[row].length - 1 && thisfield[row][currentCol + 1] === 0) {
                    // Move the tile to the right
                    thisfield[row][currentCol + 1] = thisfield[row][currentCol];
                    thisfield[row][currentCol] = 0;
                    currentCol++;
                }
                if (currentCol < thisfield[row].length - 1 && thisfield[row][currentCol + 1] === thisfield[row][currentCol]) {
                    // Merge tiles if they have the same value
                    thisfield[row][currentCol + 1] *= 2;
                    thisfield[row][currentCol] = 0;
                }
            }
        }
    }
    return thisfield;
  }
  while (true) {
    if (fields.filter(num=>num !== 0).length = 0) console.log(true);
    spawnEntity(fields)

  }
}
    
    // tasks:
      // make a new 2048 repository when beta version is enabled
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
     