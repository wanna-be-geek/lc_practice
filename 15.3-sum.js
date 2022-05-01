/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    //思路：三指针遍历数组，注意遇到相同元素要跳过，复杂度O（n*2）
    const res = []
    if (nums.length < 3) return res
    nums.sort((a,b) => a -b)
    let target = 0
    for (let i = 0; i < nums.length - 2; i ++) {
        if (nums[i] >target)break
        if (i > 0 && nums[i] == nums[i-1])continue
        let j = i + 1;
        let k = nums.length - 1;
        while (j<k) {
            const sum = nums[i] + nums[j] + nums[k]
            if (sum == target) {
                res.push([nums[i], nums[j],nums[k]]);
                while (nums[j] == nums[j+1])j++;
                while (nums[k] == nums[k-1])k--;
                j++;
                k--;
            } else if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return res
};
// @lc code=end

