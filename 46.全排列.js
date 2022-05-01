/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []
    const backTrace = (path) => {
        if (path.length == nums.length) {
            res.push(path);
            return
        }
        nums.forEach(num => {
            if (path.includes(num)) continue
            path.push(num)
            backTrace(path);
            path.pop()
        })
    }
    backTrace([])
    return res
};
// @lc code=end

