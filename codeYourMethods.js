// Работать это должно вот так:
// myForEach([1,2,3], (el) => console.log(el));
// const newArr = myMap([1,2,3], (el) => el * 2);

function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

// myForEach([1, 2, 3], (el) => console.log(el));

function myMap(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

const newArr = myMap([1, 2, 3], (el) => el * 2);
// console.log(newArr);

function myFilter(arr, callback) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

// const find = myFind([2, 4, 6], (el) => el === 4);
// console.log(find);

function myEvery(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === false) {
      return false;
    }
  }
  return true;
}

// const find = myEvery([2, 4, 6], (el) => el > 1);
// console.log(find);

function mySome(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      return true;
    }
  }
  return false;
}

// const find = mySome([2, 4, 6], (el) => el > 6);
// console.log(find);

function myReduce(arr, callback, accum) {
  if (accum === undefined) {
    accum = arr[0];
    for (let i = 0; i < arr.length; i++) {
      accum = callback(accum, arr[i]);
    }
    return accum;
  } else {
    for (let i = 0; i < arr.length; i++) {
      accum = callback(accum, arr[i]);
    }
    return accum;
  }
}

const callback = (acc, value) => acc * value;
const find = myReduce([2, 4, 6], callback);
console.log(find); // const arr = [1, 3, 5];

// const proizvedenie = arr.reduce(callback, 1);
// console.log(proizvedenie);
