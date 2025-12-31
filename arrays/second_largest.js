function secondLargest(arr) {
  if (arr.length < 2) return -1;
  let largest = -Infinity;
  let secLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      // new largest
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secLargest && arr[i] < largest) {
      secLargest = arr[i];
    }
  }
  return secLargest == -Infinity ? -1 : secLargest;
}

// console.log(secondLargest([12, 35, 1, 10, 34, 1]));
// console.log(secondLargest([10, 5, 10]));
// console.log(secondLargest([5]));
console.log(secondLargest([10, 10, 10]));
