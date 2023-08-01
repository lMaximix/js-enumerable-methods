function firstUnder(numbers, limit) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= limit) return numbers[i];
  }
}

function firstUnder(numbers, limit) {
  return numbers.find((el) => el <= limit);
}

function startsWith(strings, letter) {
  for (let i = 0; i < strings.length; i++) {
    if (strings[i][0] === letter) return strings[i];
  }
}

function startsWith(strings, letter) {
  return strings.find((el) => el === letter);
}
