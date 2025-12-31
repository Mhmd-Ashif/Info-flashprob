function kadane(arr) {
  let currentSum = arr[0];
  let maxSum = arr[0];
  let tempStart = 0;
  let start = 0;
  let end = 0;

  for (let i = 1; i < arr.length; i++) {
    // “If adding the current element to my current subarray makes it worse or not
    if (currentSum + arr[i] < arr[i]) {
      // if worse
      currentSum = arr[i];
      tempStart = i;
    } else {
      // if not worse
      currentSum += arr[i];
    }

    // my new maxsum
    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }
  return { max: maxSum, start, end };
}

// Test
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(kadane(arr));
