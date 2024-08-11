function connectFour (n) {
    let returning = false;
    n.forEach((array, h) => {
      array.forEach((element, i) => {
        let vrow = [array[i], array[i+1], array[i+2], array[i+3]]
        if (vrow.every( n => n !== "-" && n == array[i] )) {
          returning = array[i];
        }
        if (h + 3 < n.length) {
          let hrow = [array[i], n[h+1][i], n[h+2][i], n[h+3][i]]
          let d1row = [array[i], n[h+1][i-1], n[h+2][i-2], n[h+3][i-3]]
          let d2row = [array[i], n[h+1][i-1], n[h+2][i-2], n[h+3][i-3]]
  
          if (hrow.every( n => n !== "-" && n == array[i] )) {
            returning = array[i];
          }
          if (d1row.every( n => n !== "-" && n == array[i] )) {
            returning = array[i];
          }
          if (d2row.every( n => n !== "-" && n == array[i] )) {
            returning = array[i];
          }
        }
        
      }) 
    });
    
    return returning
  }
  
  console.log(connectFour([
    ['-','-','-','-','-','-','-'],
    ['-','-','-','-','-','-','a'],
    ['-','-','-','-','-','a','-'],
    ['-','-','-','-','a','-','-'],
    ['-','-','-','a','-','-','-']
  ]))
  
  
  // console.log(connectFour([
  //   [Y,R,Y,R,Y,R,Y],
  //   [R,Y,R,R,Y,R,Y],
  //   [Y,Y,R,R,R,Y,R],
  //   [R,R,Y,Y,Y,R,Y],
  //   [Y,Y,Y,R,R,R,Y],
  //   [R,Y,R,R,R,Y,R]
  // ]))
  