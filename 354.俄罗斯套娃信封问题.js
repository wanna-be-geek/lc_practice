/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    // sort the envelope in first dimension in ascending order
    //when find the same x,let y in descending order
    envelopes.sort(function(a,b) {
        return a[0] == b[0] ? b[1] - a[1] : a[0] - b[0];
    })
    //use 最长递增子序列,dp超时，改用二分
    const nums = envelopes.map(e=>e[1])
    const top = []
    let pile =0
    for (let i=0; i<nums.length; i++) {
        let poker = nums[i]
        let left =0,right = pile
        while(left < right) {
            const mid = left + Math.floor ((right - left) /2)
            if (top[mid] >= poker) right = mid
            else left = mid + 1
        }
        //二分到最右边
        if (left == pile)pile ++
        top[left] = poker
    }

    return pile
};
// @lc code=end

