// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
// ^^^^^^ LINK THERE ^^^^^^
// Human Readable Time

function humanReadable (seconds) {
    let time = {
      hour: 0, min: 0, sec: 0
    }
    let result = '';
    while (seconds>=3600 ) {
      time.hour++;
      seconds -= 3600
    }
    while (seconds >= 60) {
      time.min++;
      seconds -= 60
    }
    time.sec = seconds
    for (let item in time) {
      if (time[item] < 10) {
        result += '0' + time[item] + ":"
      } else result += time[item] + ':'
    }
    return result.slice(0, -1)
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
   