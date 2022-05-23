/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const res = []
    let count =0
    const total = matrix.length * matrix[0].length
    let left = 0 , right = matrix[0].length - 1,top = 0,bottom = matrix.length - 1
    while(left<=right && top<=bottom) {
        console.log(left,right,top,bottom)
        for (let i = left; i <= right && count < total; i++) {
            res.push(matrix[top][i])
            count++;
        }
        top++;
        for (let i = top; i <= bottom && count < total; i++) {
            res.push(matrix[i][right])
            count++;
        }
        right--;
        for(let i = right;i>=left && count < total;i--) {
            res.push(matrix[bottom][i])
            count++;
        }
        bottom--
        for(let i = bottom;i>=top && count < total;i--) {
            res.push(matrix[i][left])
            count++;
        }
        left++
    }
    return res
};
// @lc code=end

