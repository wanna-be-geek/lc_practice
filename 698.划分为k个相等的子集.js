/*
 * @lc app=leetcode.cn id=698 lang=javascript
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    nums = nums.sort((a, b) => b-a)
    if (k > nums.length)return false;
    let sum = nums.reduce((p, c) => p + c)
    if (sum%k != 0)return false;
    let target = sum / k
    const cacheErrorMap = {}
    const sums = new Array(k).fill(0)
    const backTrace = (sums, index) => {
        if (cacheErrorMap.hasOwnProperty(sums.sort().toString())) return false;
        if (index == nums.length) {
            // 遍历完所有
            const status = !
            sums.find(i => i!=target)
            return status
        }
        const res = false //当前情况是否满足
        for (let i = 0; i < sums.length; i++) {//从数组的视角，遍历K个桶
            if (nums[index] + sums[i] <= target) {
                const newSums = sums.concat([])
                newSums[i] = newSums[i] + nums[index]
                let isOK =  backTrace (newSums, index + 1)
                if (isOK) {
                    return true
                } else {
                    cacheErrorMap[newSums.sort().toString()] = 1
                }
            }
        }
        return res
    }
    return backTrace(sums,0)
};

// @lc code=end

