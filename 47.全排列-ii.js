/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 有重复元素，需要排除掉
var permuteUnique = function(nums) {
    nums.sort()
    const used = Array(nums.length).fill(false),res = []
    const dfs = (track) => {
        if (track.length == nums.length) {
            res.push (track.slice())
            return
        }
        for (let i = 0; i <nums.length; i++) {
            if (used[i]) continue
            if (i > 0 && nums[i] == nums[i -1] && ! used[i -1]){
                continue
            }
            used[i] = true
            track.push(nums[i])
            dfs(track)
            used[i] = false
            track.pop()
        }
    }
    dfs([])
    return res
};
// @lc code=end

