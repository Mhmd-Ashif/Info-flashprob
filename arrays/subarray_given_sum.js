function subarraySumHashMap(arr, target) {
  let map = new Map();
  map.set(0, -1);
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
    let required = totalSum - target;
    if (map.has(required)) {
      return [map.get(required) + 1, i];
    } else {
      map.set(totalSum, i);
    }
  }
  return [-1, -1];
}

console.log(subarraySumHashMap([10, 2, -2, -20, 10], -10));
