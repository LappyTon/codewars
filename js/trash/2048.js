// 2048
// ^^^^^^ LINK THERE ^^^^^^`

function startGame() {
  let zerofields = [[0,0,0],[0,0,0],[0,0,0]]
  let onefields = [[1,1,1],[1,0,1],[1,1,1]]
  function spawnEntity(thisfield) {
    console.log(thisfield); // Print initial state
    
    // const constfield = thisfield;
    // while (thisfield.length > 0) {
    //     let randomfield = Math.floor(Math.random() * thisfield.length);
    //     let randomindex = Math.floor(Math.random() * thisfield[randomfield].length);
    //     if (thisfield[randomfield][randomindex] === 0) {
    //         constfield[randomfield][randomindex] = 2;
    //         console.log(thisfield); // Print updated state
    //         return constfield;
    //     } else {
    //         thisfield[randomfield].splice(randomindex, 1);
    //         if (thisfield[randomfield].length === 0) {
    //             thisfield.splice(randomfield, 1);
    //         }
    //     }
    // }
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
   