// https://www.codewars.com/kata/514b92a657cdc65150000006
//  ^^^ LINK HERE ^^^

function solution(number) {
    let fives = Math.floor((number - 1) / 5);
    let threes = Math.floor((number - 1) / 3);
    let sum = 0;
    for (let i = 1; i <= fives; i++) {
      sum += i * 5;
    }
    for (let i = 1; i <= threes; i++) {
      if (i % 5 !== 0) {
        sum += i * 3;
      }
    }
    return sum;
  }
  