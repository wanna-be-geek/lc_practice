/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const res = []
    candidates.sort()
    const dfs = (index, track, currentSum) => {
        if (target == currentSum) {
            res.push(track.concat([]))
        }
        if (target < currentSum) {
            return;
        }
        for (let i = index; i < candidates.length; i++) {
            if (i > index && candidates[i] == candidates[i - 1]) {
                continue;
            }
            track.push(candidates[i])
            currentSum += candidates[i]
            dfs(i + 1,track,currentSum)
            track.pop()
            currentSum -= candidates[i]
        }
    }
    dfs(0,[],0)
    return res
};
// @lc code=end

