/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const max = 9,res = []
    const dfs = (currentSum,track,index) => {
        if (currentSum == n && track.length == k) {
            res.push(track.concat([]))
        }
        if (currentSum > n || track.length > k) return
        for (let i = index; i <= max; i++) {
            currentSum +=i
            track.push(i)
            dfs(currentSum,track,i + 1)
            currentSum -= i
            track.pop()
        }
    };
    dfs (0,[],1)
    return res
};
// @lc code=end

