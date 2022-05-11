/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
//dp数组的定义：dp【i】指以nums【i】结尾的子数组的最长递增子序列长度
    //base case
    const dp = Array(nums.length).fill(1);
    dp[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i;j++){
            if (nums[i] > nums[j]){
                dp[i] = Math.max(dp[i],dp[j]+1)
            }
        }
    }
    return Math.max(...dp)
};
// @lc code=end

