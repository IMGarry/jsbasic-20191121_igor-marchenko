/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

/*
Первый способ, который сразу пришел на ум.
function pow(n, m) {
  return Math.pow(n, m);
}*/

function pow(n, m) {
  let sum = n;
  for (let i = 1; i < m; i++) {
    sum *= n;
  }
  return sum;
}

let n = Math.round(prompt('Введите число 1', ''));
let m = Math.round(prompt('Введите число 2', ''));

alert(pow(n, m));

