//26. Remove Duplicates from Sorted Array
//Ex. nums = [1,1,2,2,5,5]

var removeDuplicates = function (nums) {
    let index = 0
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] != nums[i + 1]) {
            nums[index] = nums[i]
            console.log(nums[index])
            index++
        } 
    }
    return index
};

console.log("New Array:\n")
console.log(removeDuplicates([1,1,2]))

