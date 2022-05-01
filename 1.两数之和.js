/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

};

var findRepeatNumber = function(nums) {
    const n = nums.length
    for(let i = 0;i < n;i ++) {
        while (i != nums[i]){
            if (nums[i] == nums[nums[i]]) {
                return nums[i]
            }
            [nums[i],nums[nums[i]]] = [nums[nums[i]],nums[i]]
        }
    }
};

console.log(findRepeatNumber([1,2,2,3,0,4,5]))
// @lc code=end

