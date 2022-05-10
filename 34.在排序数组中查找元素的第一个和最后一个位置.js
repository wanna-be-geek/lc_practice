/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 实现搜索左右边界的二分查找
var searchRange = function(nums, target) {
    return [leftbound(nums, target), rightbound(nums, target)]
};

const leftbound = function(nums, target) {
    let n = nums.length;
    let left = 0, right = n
    while (left < right) {
        let mid = Math.floor((right - left) / 2) + left
        if (nums[mid] === target) {
            right = mid
        } else if (nums[mid] >target) {
            right = mid
        } else if (nums[mid] <target) {
            left = mid + 1
        }
    }
    if (left == nums.length) return -1;
    return nums[left] == target ? left : -1
 }

 const rightbound = function(nums, target) {
    let n = nums.length;
    let left = 0, right = n
    while (left < right) {
        let mid = Math.floor((right - left) / 2) + left
        if (nums[mid] === target) {
            left = mid + 1
        } else if (nums[mid] >target) {
            right = mid
        } else if (nums[mid] <target) {
            left = mid + 1
        }
    }
    if (left == 0) return -1;
    return nums[right - 1] == target ? right - 1 : -1
 }
// @lc code=end

