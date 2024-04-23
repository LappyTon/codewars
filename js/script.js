// 2048
// ^^^^^^ LINK THERE ^^^^^^`

function startGame() {
  let zerofields = [[0,0,0],[0,0,0],[0,0,0]]
  let onefields = [[1,1,1],[1,0,1],[1,1,1]]
  function spawnEntity(thisfield) {
    let truefield = []
    for (let i=0;i<3;i++) {
      thisfield[i].forEach((element, index) => {
        if (element) {
          truefield.push([i,index])
        }
      });
    }
    let random = truefield[Math.floor(Math.random() * truefield.length)]
    return thisfield[random[0]]
  }

  console.log(spawnEntity(onefields));
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
   