
//Ex. Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2, 2, _, _]

var removeElement = function(nums, val) {
    
    let k = 0
    
    for (let i = 0; i < nums.length; i++){

        if (nums[i] != val) {

            nums[k] = nums[i]
            k++
        } 
  
    }
    return k, nums

};


let nums = [3, 2, 2, 3, 4];
let val = 3;

console.log(removeElement(nums, val))