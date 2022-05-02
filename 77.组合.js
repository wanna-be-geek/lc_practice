/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = []
    const backTrace = (start,track,target)=> {
        if (target == track.length){
            res.push(track.concat([]))
        }
        for(let i = start; i <= n; i++) {
            track.push(i)
            backTrace(i+1,track,target)
            track.pop()
        }
    }
    backTrace(1,[],k)
    return res
};
// @lc code=end

