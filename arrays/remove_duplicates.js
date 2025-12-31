// i use hash map because of two constrains :
// either the array could be sorted or unsorted

function removeDuplicates(arr) {
  let seen = new Map();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!seen.has(arr[i])) {
      seen.set(arr[i], true);
      result.push(arr[i]);
    }
  }

  return result;
}

let arr = [1, 1, 2, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr));
