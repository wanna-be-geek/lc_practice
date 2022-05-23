/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const arr =new Array(n).fill(0).map(() =>new Array(n).fill(0));
    let left = 0, right = n -1,top = 0,bottom =n-1,cur = 1;
    while (left <= right && top <= bottom) {
        for (let i = left; i<=right; i++) {
            arr[top][i] = cur ++
        }
        top++;
        for(let i = top; i <= bottom; i++) {
            arr[i][right] = cur ++
        }
        right--
        for(let i = right; i >=left; i--) {
            arr[bottom][i] = cur ++
        }
        bottom--
        for(let i = bottom; i >=top; i--) {
            arr[i][left] = cur ++
        }
        left++
    }
    return arr
};
// @lc code=end

