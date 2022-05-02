/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//回溯算法框架，子集和组合相同无顺序，排序有顺序
var subsets = function(nums) {
    let res = []
    const backtrace = (track, start) => {
        res.push(track.concat([]))
        //base case
        for (let i = start; i < nums.length; i++) {
            track.push(nums[i])
            backtrace(track,i + 1)
            track.pop()
        }
    };
    backtrace([],0)
    return res
};
// @lc code=end

