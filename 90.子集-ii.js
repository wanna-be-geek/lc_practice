/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//包含重复元素，需要进行剪枝，相同元素不重复遍历
var subsetsWithDup = function(nums) {
    const res = []
    nums.sort()
    const backTrace = (nums,start,track)=>{
        res.push(track.concat([]))
        for(let i=start;i<nums.length;i++) {

            if (i > start && nums[i] == nums[i -1]) {
                continue
            }
            track.push(nums[i])
            backTrace(nums,i + 1, track)
            track.pop()
        }
    };
    backTrace(nums,0,[])
    return res

};
// @lc code=end

