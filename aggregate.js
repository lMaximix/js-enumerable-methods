// function sum(arrayNumbers, sum = 0) {
//   for (let i = 0; i < arrayNumbers.length; i++) {
//     sum += arrayNumbers[i];
//   }
//   return sum;
// }

function sum(arrayNumbers, sum = 0) {
  return arrayNumbers.reduce((acc, el) => acc + el, 0);
}

console.log(sum([1, 2, 3, 4]));
