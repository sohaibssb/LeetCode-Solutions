//169. Majority Element
//Ex. Input: nums = [3,2,3], Output: 3


var majorityElement = function (nums) {
    const ht = {};

    for (const i of nums) {

        ht[i] = ht[i] + 1 || 1;
    }

    for (const key in ht) {
        if (ht[key] > Math.floor(nums.length / 2)) {
            return Number(key);
        }
    }
    
};


console.log("The Results:\n")
console.log(majorityElement([3, 2, 3]))