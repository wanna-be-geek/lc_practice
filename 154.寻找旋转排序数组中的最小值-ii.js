/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0,right = nums.length - 1
    while (left < right) {
        const mid= left + Math.floor ((right - left) /2)
        if (nums[mid] < nums[right]) {
            right = mid
        } else if (nums[mid] > nums[right]) {
            left = mid + 1
        } else {
            right --
        }
    }
    return nums[left]
};
// @lc code=end

