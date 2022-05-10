/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const n = nums.length
    let left = 0,right = n-1
    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left
        if (nums[mid] === target) {
            return mid 
        } else if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        }
    }
    return -1
};
// @lc code=end

