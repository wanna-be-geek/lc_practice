/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    //数组中最小正整数，一定小于等于数组的元素个数
    //首先交换数组的元素，按照num【0】=1，nums【1】= 2，3，4排列
    //其次遍历获得i+1！=nums【i】的下标
    for (let i = 0;i < nums.length;i++) {//遍历了 nums.length次
        let idx = nums[i] - 1;//对应下标
        if (i== idx ||nums[i] == nums[idx])continue
        if (idx >= 0 && idx <= nums.length - 1 ) {
            [nums[i],nums[idx]] = [nums[idx],nums[i]]
            i--; //换位后继续遍历
        }
    }

    for (let i = 0;i < nums.length;i++) {
        if (i + 1 == nums[i])continue
        return i+1
    }
    return nums.length + 1
};
// @lc code=end

