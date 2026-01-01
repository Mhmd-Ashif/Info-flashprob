function missingNumber(arr) {
  let n = arr.length;
  // find sum of n numbers
  let sumOfNum = (n * (n + 1)) / 2;
  let countOfNum = 0;
  for (let i = 0; i < n; i++) {
    countOfNum += arr[i];
  }

  return sumOfNum - countOfNum;
}

// console.log(missingNumber([3, 0, 1])); - 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); //8
