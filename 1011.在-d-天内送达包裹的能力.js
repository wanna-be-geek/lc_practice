/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let l = Math.max(...weights), r = weights.reduce((a,b) => a + b, 0);
    const candeliver = (m) => {
        let count = 0,needDays = 0
        weights.forEach((el) => {
            if (count + el > m) {
                count =0
                needDays +=1
            }
            count += el
        })
        return needDays + 1 <= days
    }
    while (l < r) {
        const mid = l + Math.floor ((r - l)/2)
        if (candeliver(mid)) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    return l
};
// @lc code=end

