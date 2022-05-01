/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {}
    for (let i = 0 ;i <nums.length;i++) {
        const n = nums[i];
        if (hash[target - n] !== undefined) {
            return [hash[target - n], i]
        }
        hash[n] = i;
    }
    return [];
};
// @lc code=end

