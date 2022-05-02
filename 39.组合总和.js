/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//可重复取出元素没，则递归不用从i+1开始
var combinationSum = function(candidates, target) {
    const res = [];
    const backTrace = (start,track,sum) => {
        if (res.length > 150) return;
        if (target == sum) {
            res.push(track.concat([]));
            return
        }
        if (sum >target) {
            return
        }
        for (let i = start; i < candidates.length; i++) {
            track.push(candidates[i]);
            sum += candidates[i];
            backTrace(i,track,sum);
            sum -= candidates[i];
            track.pop();
        }
    };
    backTrace(0,[],0)
    return res
};
// @lc code=end

