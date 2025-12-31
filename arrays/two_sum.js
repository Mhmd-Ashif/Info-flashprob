function twoSum(len, arr, target) {
  let i = 0;
  let j = len - 1;
  arr.sort();
  while (i < j) {
    if (arr[i] + arr[j] == target) {
      return [i, j];
    } else if (arr[i] + arr[j] > target) {
      j--;
    } else {
      i++;
    }
  }
}

n = 5;
arr = [2, 7, 11, 15, 3];
target = 9;

twoSum(n, arr, target);
