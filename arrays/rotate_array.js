/**
 * Rotate array using reverse method (3 reverses)
 * Time: O(n), Space: O(1)
 */
function rotateArrayInPlace(nums, k) {
  const n = nums.length;
  k = k % n; // to avoid more rotations + index out of bound during rotationng

  reverse(nums, 0, k);
  reverse(nums, k + 1, n - 1);
  reverse(nums, 0, n - 1);

  // reverse(nums, 0, n - 1);
  // reverse(nums, 0, k - 1);
  // reverse(nums, k, n - 1);
  return nums;
}

function reverse(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

// Test
console.log(rotateArrayInPlace([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
