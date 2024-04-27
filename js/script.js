// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
//  ^^^ LINK HERE ^^^

function snail(matrix, result) {
  if (!result) result = [];
  if (!matrix.length) return result

  result.push(...matrix.shift());
  for (let i = 0; i < matrix.length; i++) {
    result.push(matrix[i].pop());
  }
  if (matrix.length) {
    result.push(...matrix.pop().reverse());
  }
  for (let i = matrix.length - 1; i >= 0; i--) {
    result.push(matrix[i].shift());
  }

  return snail(matrix, result);
}