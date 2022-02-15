const arrayFib = [1, 1, 3, 5, 8, 13, 21];
const numbers = [10, 9, 8, 7, 5];

function myReverse(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[arr.length - 1 - i]);
  }
  if (arr.length) {
    return newArr;
  }
  return "Array is empty";
}

const result = myReverse(arrayFib);
const result2 = myReverse([]);

console.log(result);
console.log(result2);
