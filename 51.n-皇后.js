/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const isValid = (row,col,chessboard,n) => {
        for (let i = 0; i < row; i++) {
            if (chessboard[i][col]== 'Q') {
                return false
            }
        }
        //topleft
        for (let i = row -1,j = col -1; i >=0&&j>=0; i--,j--) {
            if (chessboard[i][j]== 'Q') {return false}
        }
        //top Right
        for (let i = row -1,j = col + 1; i >=0&&j<n; i--,j++) {
            if (chessboard[i][j]== 'Q') {return false}
        }
        return true
    }
    const transformChessboard = (chessboard) => {
        let chessboardAttrs = []
        chessboard.forEach(row => {
            let rowStr = ''
            row.forEach(value => {
                rowStr += value
            })
            chessboardAttrs.push(rowStr)
        })
        return chessboardAttrs
    }
    let res = []
    const backTrace = (row,chessboard) => {
        if (row == n) {
            res.push(transformChessboard(chessboard))
            return
        }
        for (let col = 0;col< n;col++) {
            if (isValid(row,col,chessboard,n)){
                chessboard[row][col] = 'Q'
                backTrace (row + 1, chessboard)
                chessboard[row][col] = '.'
            }
        }
    }
    let chessboard = Array.from(new Array(n),()=> new Array(n).fill('.'))
    backTrace(0,chessboard)
    return res

};
// @lc code=end

