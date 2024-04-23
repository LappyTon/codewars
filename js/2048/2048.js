// 2048
// ^^^^^^ LINK THERE ^^^^^^`

function startGame() {
    let fields = [[0,0,0],[0,0,0],[0,0,0]]
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
    // function top(thisfield) {
    //   for (let i = 0; i < thisfield[0].length; i++) {
    //     thisfield[i].forEach((element, index) => {
    //       while (i-1>=0 && !thisfield[i-1][index]) {
    //         thisfield[i-1][index] = element
    //         thisfield[i][index] = 0
    //         i--
    //       }
    //     })
    //   }
    // }
    spawnEntity(fields)
    spawnEntity(fields)
    spawnEntity(fields)
    spawnEntity(fields)
    top(fields)
    return fields
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
     