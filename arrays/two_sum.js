function twoSum(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let currentnum = arr[i];
    let compliment = target - currentnum;
    if (map.has(compliment)) {
      // existing num , current num -- indexs
      return [map.get(compliment), i];
    }
    map.set(currentnum, i);
  }
  return [];
}

// Test
let arr = [2, 7, 11, 15, 3];
let target = 5;
console.log(twoSum(arr, target)); // [0, 1]

// idea : 
// take a number and sub with target - compliment and check if the compliment is in map is yes return 
// if not put ur number into the map 