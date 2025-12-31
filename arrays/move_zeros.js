// THE template to remember:
function moveZerosTemplate(nums) {
    let insertPos = 0;
    
    // Step 1: Move all non-zeros to front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos++] = nums[i];
        }
    }
    
    // Step 2: Fill remaining with zeros
    while (insertPos < nums.length) {
        nums[insertPos++] = 0;
    }
    
    return nums;
}

// you can change the order based upon
// Move zeros to front
function moveZerosToFront(nums) {
    let lastZeroIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
          // swapping logicc
            [nums[lastZeroIndex], nums[i]] = [nums[i], nums[lastZeroIndex]];
            lastZeroIndex++;
        }
    }
    
    return nums;
}

console.log(moveZerosToFront([1, 0, 2, 0, 3])); // [0, 0, 1, 2, 3]
// Move specific value to end
function moveValueToEnd(nums, value) {
    let nonValueIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== value) {
            [nums[nonValueIndex], nums[i]] = [nums[i], nums[nonValueIndex]];
            nonValueIndex++;
        }
    }
    
    return nums;
}

console.log(moveValueToEnd([2, 1, 2, 3, 2, 4], 2)); // [1, 3, 4, 2, 2, 2]