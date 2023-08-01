function oddNumbers(nums) {
  let odds = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
      odds.push(nums[i]);
    }
  }
  return odds;
}
// console.log(oddNumbers([8, 3, 5]));

const oddNumbers1 = (nums) => nums.filter((el) => el % 2 === 1);

// function longStrings(strings, minimumLength = 0) {
//   let longs = [];
//   for (let i = 0; i < strings.length; i++) {
//     if (strings[i].length >= minimumLength) longs.push(strings[i]);
//   }
//   return longs;
// }

const longStrings1 = (string, minimumLength = 0) =>
  string.filter((el) => el.length >= minimumLength);

console.log(longStrings1(['uuuu', 'kkkk', 'j']));
