//80. Remove Duplicates from Sorted Array II
//Ex. Input: nums = [1,1,1,2,2,3], Output: 5, nums = [1,1,2,2,3,_]


var removeDuplicates = function (nums) {
    
    if (nums.length <= 2) return nums.length;
    let prev1 = nums[0],
        prev2 = nums[1];
    let pivot = 2;
    for (let i = 2; i < nums.length; i++){
        const curr = nums[i];
        if (curr != prev1 || curr != prev2) {
            nums[pivot] = curr;
            pivot += 1;
        }
        prev1 = prev2;
        prev2 = curr;

    }    
    return pivot;
};


console.log("The Results:\n")
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]))

