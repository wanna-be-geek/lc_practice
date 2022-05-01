/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0,right = height.length -1
    let maxLeft = 0,maxRight = 0
    let res = 0
    while (left < right) {
        if(height[left] < height[right]) {
            //左边小，先处理左边
            if (height[left] > maxLeft) {
                maxLeft = height[left]
            } else {
                res += maxLeft - height[left]
                left ++
            }
        } else {
            if (height[right] > maxRight) {
                maxRight = height[right]
            } else {
                res += maxRight - height[right]
                right --
            }
        }
    }
    return res
};
// @lc code=end

