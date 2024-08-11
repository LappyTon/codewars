// https://www.codewars.com/kata/52742f58faf5485cae000b9a
//  ^^^ LINK HERE ^^^
// Human readable duration format
function formatDuration(seconds) {
  if (!seconds) return 'now'
  let time = {
    year:0, day:0, hour: 0, minute: 0, second: 0
  }
  while (seconds>=31536000) {
    time.year++;
    seconds -= 31536000
  }
  while (seconds>=86400 ) {
    time.day++;
    seconds -= 86400
  }
  while (seconds>=3600 ) {
    time.hour++;
    seconds -= 3600
  }
  while (seconds >= 60) {
    time.minute++;
    seconds -= 60
  }
  time.second = seconds;

  let result = [], subresult = [];
  for (let [key, value] of Object.entries(time)) {
    if (!value) continue
    if (value>1) key+='s'
    subresult.push(value + ' ' + key)
  }
  result.push(subresult.shift());
  while (subresult.length>1) {
    console.log(true);
    result.push(', '+subresult.shift());
  }
  if (subresult[0])result.push(' and ' + subresult.pop())
  return result.join('')
}